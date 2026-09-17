---
layout: publication
title: "Dynamic Graph Neural Network for Real-Time Failure Prediction in Industrial IoT Networks"
date: 2026-01-01 00:00:00 +0000
date_format: "%Y"
authors:
  - Rehab Alawadh
  - Mostafa Rahmani Ghourtani
  - Hamed Ahmadi
  - Poonam Yadav
venue: "IEEE Open Journal of the Communications Society"
link: "https://doi.org/10.1109/OJCOMS.2026.3731681"
---

This work presents a Dynamic Graph Neural Network (DGNN) for proactive and real-time prediction of communication-link failures in Industrial Internet of Things (IIoT) networks. The framework combines a Gated Graph Convolution Unit for modelling dependencies and failure propagation across network topology with a Temporal Attention Module for identifying degradation patterns in sequential telemetry. A multi-task architecture jointly predicts link-failure probability and continuous link reliability, while MC Dropout provides uncertainty estimates to support risk-aware maintenance decisions. Evaluation shows an F1-score of 0.911, AUC-ROC of 0.950, and R² of 0.854 for reliability prediction, while maintaining an average inference latency of 5.66 ms, within the stated 10 ms IIoT real-time requirement. The model also remains robust under substantial telemetry noise and demonstrates transferable spatio-temporal learning performance on the real-world METR-LA benchmark.
