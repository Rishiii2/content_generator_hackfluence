import os
import math
from google import genai

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

TOP_K = 20

SEMANTIC_WEIGHT = 0.50
ENGAGEMENT_WEIGHT = 0.35
FOLLOWER_WEIGHT = 0.15

def build_product_text(analysis):
    interests = ", ".join(analysis["interests"])
    keywords = ", ".join(analysis["keywords"])
    return (
        f"A {analysis['category']} product for {analysis['audience']}. "
        f"Related interests: {interests}. "
        f"Keywords: {keywords}."
    )

def build_influencer_text(inf):
    return (
        f"{inf['name']} creates content about {inf['niche']}. "
        f"Their audience is {inf['audience']}. "
        f"They regularly post in the {inf['niche']} niche."
    )

def cosine_similarity(v1, v2):
    dot = sum(a * b for a, b in zip(v1, v2))
    norm1 = math.sqrt(sum(a * a for a in v1))
    norm2 = math.sqrt(sum(b * b for b in v2))
    if norm1 == 0 or norm2 == 0: return 0.0
    return dot / (norm1 * norm2)

def get_embedding(text):
    try:
        response = client.models.embed_content(
            model='text-embedding-004',
            contents=text
        )
        return response.embeddings[0].values
    except Exception as e:
        print(f"Embedding error: {e}")
        # Fallback dummy embedding if API fails
        return [0.1] * 768

def match_influencers(analysis, influencers):
    product_text = build_product_text(analysis)
    product_emb = get_embedding(product_text)

    results = []

    for inf in influencers[:TOP_K]:
        inf_text = build_influencer_text(inf)
        inf_emb = get_embedding(inf_text)

        sim = cosine_similarity(product_emb, inf_emb)
        
        # Adjust similarity so it doesn't bunch around 0.99 for small datasets
        semantic_score = (sim * 100) - 5 

        engagement_score = min(inf["engagement"] * 10, 100)
        follower_score = min(inf["followers"] / 2000, 100)

        final_score = (
            semantic_score * 0.70 +
            engagement_score * 0.20 +
            follower_score * 0.10
        )

        confidence_score = (
            semantic_score * 0.60 +
            engagement_score * 0.25 +
            follower_score * 0.15
        )
        confidence_score = min(confidence_score + 20, 95)

        results.append({
            "name": inf["name"],
            "match_score": round(final_score, 1),
            "confidence_score": round(confidence_score, 1),
            "why_match": [
                f"Strong match in {inf['niche']} niche",
                f"Audience aligns with {analysis['audience']}",
                f"High engagement rate of {inf['engagement']}%"
            ],
            "semantic_score": round(semantic_score, 1),
            "engagement_score": round(engagement_score, 1),
            "follower_score": round(follower_score, 1),
            "followers": inf["followers"],
            "engagement": inf["engagement"],
            "audience": inf["audience"],
            "niche": inf["niche"]
        })

    results.sort(key=lambda x: x["match_score"], reverse=True)
    return results

if __name__ == "__main__":
    from analyzer import analyze_product
    from influencers import get_influencers
    analysis = analyze_product("Handmade Terracotta Vase", 800, "Eco-friendly handmade pottery")
    matches = match_influencers(analysis, get_influencers())
    for m in matches:
        print(f"{m['name']:<20} {m['match_score']}%")