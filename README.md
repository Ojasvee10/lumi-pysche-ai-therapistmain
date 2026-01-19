# Lumipsyche – Mental Health Detection

## Problem
Early signs of anxiety and depression often go unnoticed in social media text, delaying mental health intervention.

## Solution
An NLP-based machine learning system that detects mental health conditions from text using fine-tuned transformer models.

## Key Features
- Multi-class classification for mental health conditions
- Automated NLP preprocessing pipeline
- Real-time inference via REST API

## Architecture
Text Input → NLP Preprocessing → BERT Model → Flask API → Prediction Output

## Why These Choices?
- **BERT** for contextual understanding of short, informal text
- **Flask** for lightweight and fast API deployment
- **SQLite** for quick inference result storage
- **Google Cloud** for scalable deployment

## Results
- Achieved **85% classification accuracy**
- Reduced false positives by **15%**
- Supported **50+ concurrent users** with <1s latency

## Tech Stack
Python, BERT, Scikit-learn, Flask, SQLite, Google Cloud

## Future Improvements
- Multilingual mental health detection
- Model explainability using attention visualization
- Integration with mental health support platforms
