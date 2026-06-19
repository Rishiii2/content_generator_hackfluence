def get_success_factors(best):

    return {
        "Audience Alignment":
            round(best["semantic_score"], 1),

        "Engagement Strength":
            round(best["engagement_score"], 1),

        "Creator Authority":
            round(best["follower_score"], 1),

        "Conversion Potential":
            round(
                (
                    best["semantic_score"] * 0.6 +
                    best["engagement_score"] * 0.4
                ),
                1
            )
    }