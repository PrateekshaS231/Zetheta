# Anomaly Detection System for Transaction Monitoring

## Project Overview
This project implements a simple anomaly detection system to identify unusual or potentially fraudulent transactions.
The system uses machine learning to learn normal transaction patterns and flag deviations as anomalies.

## Objectives
- Detect unusual transactions using anomaly detection techniques
- Assign anomaly scores to transactions
- Generate alerts for high-risk transactions
- Demonstrate a clean and modular project structure

## Technologies Used
- Python
- Pandas
- NumPy
- Scikit-learn
- PyOD (Isolation Forest)
- FastAPI (basic setup)
- GitHub for version control

## Project Structure
Project A/
├── README.md
├── requirements.txt
├── data/
│ └── raw_transactions.csv
├── src/
│ └── anomaly_detection_project.py
├── api/
└── notebooks/


## Methodology
1. Transaction data is loaded from a CSV file.
2. Basic feature engineering is applied to the transaction amount.
3. An Isolation Forest model is trained to learn normal transaction behavior.
4. The model assigns anomaly labels and scores to transactions.
5. Transactions marked as anomalies are treated as alerts.

## Anomaly Detection Model
Isolation Forest is an unsupervised machine learning algorithm used for anomaly detection.
It works by isolating outliers instead of profiling normal data points.
Transactions with unusually high amounts are detected as anomalies.

## Sample Output
The system successfully identifies abnormal transactions (for example, very high transaction amounts)
and flags them with an anomaly label and an anomaly score.

## How to Run the Project
1. Clone or download the repository.
2. Install the required dependencies:
      pip install -r requirements.txt
3. Run the anomaly detection script:
      python src/anomaly_detection_project.py


## Conclusion
This project demonstrates a beginner-friendly implementation of an anomaly detection system using machine learning.
It shows how unsupervised models can be applied to real-world transaction monitoring scenarios.
