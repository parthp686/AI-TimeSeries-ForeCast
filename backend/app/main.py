from fastapi import FastAPI
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services.analytics import get_dashboard_metrics

from app.services.analytics import (
    get_dashboard_metrics,
    get_sales_trend,
    get_top_stores,
    get_top_departments,
    get_feature_importance
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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