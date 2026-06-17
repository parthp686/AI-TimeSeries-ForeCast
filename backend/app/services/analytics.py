import pandas as pd

df = pd.read_csv("data/train.csv")


def get_dashboard_metrics():

    total_sales = df["Weekly_Sales"].sum()

    average_sales = df["Weekly_Sales"].mean()

    return {
        "total_sales": round(total_sales, 2),
        "average_sales": round(average_sales, 2),
        "mae": 1391,
        "r2": 0.9823
    }
def get_sales_trend():

    df = pd.read_csv("data/train.csv")

    df["Date"] = pd.to_datetime(df["Date"])

    df["Month"] = df["Date"].dt.to_period("M")

    trend = (
        df.groupby("Month")["Weekly_Sales"]
        .sum()
        .reset_index()
    )

    trend["Month"] = trend["Month"].astype(str)

    return trend.to_dict(orient="records")
# print(len(get_sales_trend()))
import pandas as pd

def get_top_stores():

    df = pd.read_csv("data/train.csv")

    top_stores = (
        df.groupby("Store")["Weekly_Sales"]
        .sum()
        .reset_index()
        .sort_values(
            by="Weekly_Sales",
            ascending=False
        )
        .head(10)
    )

    return top_stores.to_dict(
        orient="records"
    )
def get_top_departments():

    df = pd.read_csv("data/train.csv")

    top_departments = (
        df.groupby("Dept")["Weekly_Sales"]
        .sum()
        .reset_index()
        .sort_values(
            by="Weekly_Sales",
            ascending=False
        )
        .head(10)
    )

    return top_departments.to_dict(
        orient="records"
    )
def get_feature_importance():

    return [
        {"Feature": "Dept", "Importance": 0.294668},
        {"Feature": "Size", "Importance": 0.248414},
        {"Feature": "Store", "Importance": 0.087165},
        {"Feature": "MarkDown3", "Importance": 0.076365},
        {"Feature": "Type", "Importance": 0.068572},
        {"Feature": "CPI", "Importance": 0.051588},
        {"Feature": "Week", "Importance": 0.047155},
        {"Feature": "Month", "Importance": 0.041646}
    ]