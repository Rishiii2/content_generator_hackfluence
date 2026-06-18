import numpy as np
from sklearn.linear_model import LogisticRegression


def _train_conversion_model():
    rng = np.random.default_rng(42)

    N = 500

    match = rng.uniform(40, 100, N)
    engagement = rng.uniform(1, 8, N)

    z = -4 + 0.04 * match + 0.30 * engagement + rng.normal(0, 0.5, N)

    prob = 1 / (1 + np.exp(-z))

    label = (
        rng.uniform(0, 1, N) < prob
    ).astype(int)

    X = np.column_stack([
        match,
        engagement
    ])

    clf = LogisticRegression()

    clf.fit(X, label)

    return clf


_conversion_model = _train_conversion_model()


def predict_campaign(match_score, followers, engagement, price):

    probability = _conversion_model.predict_proba([
        [match_score, engagement]
    ])[0][1]

    estimated_reach = int(
        followers * (engagement / 100) * 8
    )

    ctr = 0.03 + (match_score / 1000)

    clicks = int(
        estimated_reach * ctr
    )

    conversion_rate = probability * 0.15

    orders = int(
        clicks * conversion_rate
    )

    revenue = orders * price

    return {
        "match_score": round(match_score, 1),
        "reach": estimated_reach,
        "clicks": clicks,
        "orders": orders,
        "revenue": revenue,
        "conversion_probability": round(
            probability * 100,
            1
        )
    }


if __name__ == "__main__":

    result = predict_campaign(
        match_score=85,
        followers=120000,
        engagement=4.8,
        price=800
    )

    print("\nCampaign Prediction\n")

    for key, value in result.items():
        print(f"{key}: {value}")