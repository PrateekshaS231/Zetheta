from fastapi import FastAPI
import pandas as pd
from pyod.models.iforest import IForest

app = FastAPI(title="Anomaly Detection API")

@app.get("/")
def home():
    return {"message": "Anomaly Detection API is running"}

@app.get("/detect")
def detect_anomalies():
    # Load data
    df = pd.read_csv("data/raw_transactions.csv")

    # Feature engineering
    df["amount_feature"] = df["amount"]

    # Train model
    model = IForest(contamination=0.05)
    model.fit(df[["amount_feature"]])

    # Detect anomalies
    df["anomaly"] = model.predict(df[["amount_feature"]])
    df["score"] = model.decision_function(df[["amount_feature"]])

    # Return only anomalies
    anomalies = df[df["anomaly"] == 1]

    return anomalies.to_dict(orient="records")
