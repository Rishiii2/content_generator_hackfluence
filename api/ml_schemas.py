from pydantic import BaseModel
from typing import List

class MatchRequest(BaseModel):
    product_name: str
    price: float
    description: str

class MatchResult(BaseModel):
    influencer_name: str
    match_score: int
    followers: int
    engagement: float
    confidence_score: int
    recommended_commission: float
    why_match: List[str]

class PredictionRequest(BaseModel):
    match_score: int
    followers: int
    engagement: float
    product_price: float

class PredictionResult(BaseModel):
    expected_reach: str
    predicted_ctr: float
    expected_orders: int
    revenue: float
    net_profit: float
    ai_confidence_score: int
