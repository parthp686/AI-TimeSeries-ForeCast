# import joblib
# import pandas as pd

# # Load model
# model = joblib.load(
#     "models/walmart_forecasting_v3.pkl"
# )

# print(type(model))
# print("Model Loaded Successfully")

# # Sample input
# sample = pd.DataFrame([{
#     "Store": 1,
#     "Dept": 1,
#     "Temperature": 50,
#     "Fuel_Price": 3,
#     "MarkDown1": 0,
#     "MarkDown2": 0,
#     "MarkDown3": 0,
#     "MarkDown4": 0,
#     "MarkDown5": 0,
#     "CPI": 210,
#     "Unemployment": 8,
#     "Type": 0,
#     "Size": 151315,
#     "Year": 2012,
#     "Month": 1,
#     "Week": 1,
#     "Quarter": 1,
#     "Lag_1": 20000,
#     "Lag_2": 21000,
#     "Lag_4": 19000,
#     "Lag_8": 18000,
#     "Lag_12": 17000,
#     "Rolling_4_Week": 19500,
#     "Rolling_8_Week": 19000,
#     "Rolling_12_Week": 18500
# }])

# prediction = model.predict(sample)

# print("=" * 50)
# print(f"Predicted Sales : {prediction[0]:.2f}")
# print("=" * 50)
# import joblib
# from sklearn.metrics import mean_absolute_error, r2_score

# model = joblib.load("models/walmart_forecasting_v3.pkl")

# X_test = joblib.load("models/X_test.pkl")
# y_test = joblib.load("models/y_test.pkl")

# y_pred = model.predict(X_test)

# mae = mean_absolute_error(y_test, y_pred)
# r2 = r2_score(y_test, y_pred)

# avg_sales = y_test.mean()
# error_percent = (mae / avg_sales) * 100

# print("=" * 50)
# print(f"MAE            : {mae:.2f}")
# print(f"R2 Score       : {r2:.4f}")
# print(f"Performance    : {r2*100:.2f}%")
# print(f"Error Percent  : {error_percent:.2f}%")
# print("=" * 50)

import joblib
from sklearn.metrics import (
    mean_absolute_error,
    r2_score
)

# Load model
model = joblib.load(
    "models/walmart_forecasting_v3.pkl"
)

# Load saved test data
X_test = joblib.load(
    "models/X_test.pkl"
)

y_test = joblib.load(
    "models/y_test.pkl"
)

# Predict on test set
y_pred = model.predict(X_test)

# Calculate metrics
mae = mean_absolute_error(
    y_test,
    y_pred
)

r2 = r2_score(
    y_test,
    y_pred
)

avg_sales = y_test.mean()

error_percent = (
    mae / avg_sales
) * 100

print("=" * 50)
print(f"MAE            : {mae:.2f}")
print(f"R2 Score       : {r2:.4f}")
print(f"Performance    : {r2 * 100:.2f}%")
print(f"Error Percent  : {error_percent:.2f}%")
print("=" * 50)