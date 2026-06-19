from fastapi import FastAPI
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services.analytics import get_dashboard_metrics
from pydantic import BaseModel


from app.services.analytics import (
    get_dashboard_metrics,
    get_sales_trend,
    get_top_stores,
    get_top_departments,
    get_feature_importance
)

from app.services.prediction import predict_sales

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class PredictionRequest(BaseModel):

    Store: int
    Dept: int
    Temperature: float
    Fuel_Price: float

    MarkDown1: float
    MarkDown2: float
    MarkDown3: float
    MarkDown4: float
    MarkDown5: float

    CPI: float
    Unemployment: float

    Type: int
    Size: int

    Year: int
    Month: int
    Week: int
    Quarter: int

    Lag_1: float
    Lag_2: float
    Lag_4: float
    Lag_8: float
    Lag_12: float

    Rolling_4_Week: float
    Rolling_8_Week: float
    Rolling_12_Week: float


@app.get("/")
def home():

    return {
        "message": "AI Demand Forecasting API Running"
    }


@app.get("/metrics")
def metrics():

    return get_dashboard_metrics()

@app.get("/sales-trend")
def sales_trend():

    return get_sales_trend()
@app.get("/top-stores")
def top_stores():
    return get_top_stores()


@app.get("/top-departments")
def top_departments():
    return get_top_departments()


@app.get("/feature-importance")
def feature_importance():
    return get_feature_importance()

@app.post("/predict")
def predict(request: PredictionRequest):

    prediction = predict_sales(
        request.model_dump()
    )

    return {
        "predicted_sales": prediction
    }