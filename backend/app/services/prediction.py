import joblib
import pandas as pd

model = joblib.load(
    "models/walmart_forecasting_v3.pkl"
)

def predict_sales(data):

    input_df = pd.DataFrame([data])

    prediction = model.predict(input_df)

    return round(
        float(prediction[0]),
        2
    )