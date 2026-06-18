from analyzer import analyze_product
from matcher import match_influencers
from influencers import get_influencers
from predictor import predict_campaign
from outreach import generate_outreach
from commission import recommend_commission
from success_factors import get_success_factors


PRODUCT_NAME = "Handmade Terracotta Vase"
PRICE = 800
DESCRIPTION = "Eco-friendly handmade pottery"


print("\n" + "=" * 60)
print("KARIGARCONNECT AI")
print("=" * 60)

# --------------------------------------------------
# STEP 1: PRODUCT ANALYSIS
# --------------------------------------------------

analysis = analyze_product(
    PRODUCT_NAME,
    PRICE,
    DESCRIPTION
)

print("\nPRODUCT ANALYSIS")
print("-" * 60)

for key, value in analysis.items():
    print(f"{key}: {value}")

# --------------------------------------------------
# STEP 2: MATCH INFLUENCERS
# --------------------------------------------------

matches = match_influencers(
    analysis,
    get_influencers()
)

print("\nTOP INFLUENCER MATCHES")
print("-" * 60)

for m in matches:
    print(
        f"{m['name']:<20} "
        f"{m['match_score']}%"
    )

best = matches[0]

commission = recommend_commission(best)

factors = get_success_factors(best)

print("\nSUCCESS FACTORS")
print("-" * 60)

for k, v in factors.items():
    print(f"{k}: {v}%")

print("\nBEST MATCH")
print("-" * 60)

print(f"Name: {best['name']}")
print(f"Match Score: {best['match_score']}%")
print(f"Followers: {best['followers']}")
print(f"Engagement: {best['engagement']}%")
print(
    f"AI Confidence: "
    f"{best['confidence_score']}%"
)
print(f"Recommended Commission: {commission}%")

print("\nWhy This Influencer?")
for reason in best["why_match"]:
    print(f"- {reason}")

# --------------------------------------------------
# STEP 3: CAMPAIGN PREDICTION
# --------------------------------------------------

forecast = predict_campaign(
    best["match_score"],
    best["followers"],
    best["engagement"],
    PRICE
)

print("\nCAMPAIGN FORECAST")
print("-" * 60)

for key, value in forecast.items():
    print(f"{key}: {value}")

# --------------------------------------------------
# STEP 4: OUTREACH MESSAGE
# --------------------------------------------------

message = generate_outreach(
    PRODUCT_NAME,
    analysis,
    best,
    commission
)

print("\nOUTREACH MESSAGE")
print("-" * 60)

print(message)

print("\n" + "=" * 60)
print("DEMO COMPLETE")
print("=" * 60)