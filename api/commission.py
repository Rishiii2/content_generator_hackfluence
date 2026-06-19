def recommend_commission(influencer):

    followers = influencer["followers"]
    engagement = influencer["engagement"]

    if followers < 50000:
        commission = 10

    elif followers < 200000:
        commission = 15

    else:
        commission = 20

    if engagement > 6:
        commission += 2

    return commission


if __name__ == "__main__":

    influencer = {
        "followers": 120000,
        "engagement": 4.8
    }

    print(
        recommend_commission(
            influencer
        )
    )