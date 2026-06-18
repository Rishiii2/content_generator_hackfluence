from sentence_transformers import SentenceTransformer
from sklearn.neighbors import NearestNeighbors
import numpy as np

TOP_K = 20

model = SentenceTransformer("all-MiniLM-L6-v2")

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


def match_influencers(analysis, influencers):

    product_text = build_product_text(analysis)

    product_emb = model.encode([product_text])

    influencer_embs = np.load(
        "influencer_embeddings.npy"
    )

    knn = NearestNeighbors(
        n_neighbors=min(TOP_K, len(influencers)),
        metric="cosine"
    )

    knn.fit(influencer_embs)

    distances, indices = knn.kneighbors(product_emb)

    results = []

    for distance, idx in zip(distances[0], indices[0]):

        inf = influencers[idx]

        semantic_score = (1 - float(distance)) * 100

        engagement_score = min(
            inf["engagement"] * 10,
            100
        )

        follower_score = min(
            inf["followers"] / 2000,
            100
        )

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

        confidence_score = min(
            confidence_score + 20,
            95
        )

        results.append({
            "name": inf["name"],
            "match_score": round(final_score, 1),

            "confidence_score": round(
                confidence_score,
                1
            ),

            "why_match": [
                f"Strong match in {inf['niche']} niche",
                f"Audience aligns with {analysis['audience']}",
                f"High engagement rate of {inf['engagement']}%"
            ],

            "semantic_score": round(
                semantic_score,
                1
            ),

            "engagement_score": round(
                engagement_score,
                1
            ),

            "follower_score": round(
                follower_score,
                1
            ),

            "followers": inf["followers"],
            "engagement": inf["engagement"],
            "audience": inf["audience"],
            "niche": inf["niche"]
        })

    results.sort(
        key=lambda x: x["match_score"],
        reverse=True
    )

    return results


if __name__ == "__main__":

    from analyzer import analyze_product
    from influencers import get_influencers

    analysis = analyze_product(
        "Handmade Terracotta Vase",
        800,
        "Eco-friendly handmade pottery"
    )

    matches = match_influencers(
        analysis,
        get_influencers()
    )

    print("\nMatch Results:\n")

    for m in matches:
        print(
            f"{m['name']:<20} {m['match_score']}%"
        )