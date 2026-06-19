from sentence_transformers import SentenceTransformer
from influencers import get_influencers
import numpy as np

model = SentenceTransformer("all-MiniLM-L6-v2")


def build_influencer_text(inf):
    return (
        f"{inf['name']} creates content about {inf['niche']}. "
        f"Their audience is {inf['audience']}. "
        f"They regularly post in the {inf['niche']} niche."
    )


texts = [
    build_influencer_text(i)
    for i in get_influencers()
]

embeddings = model.encode(texts)

np.save(
    "influencer_embeddings.npy",
    embeddings
)

print("Saved embeddings:", embeddings.shape)