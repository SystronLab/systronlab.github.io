---
layout: publication
title: "SemQNet: Semantic-Aware Quantised Network for mmWave Beam Prediction"
date: 2025-01-21 12:00:00 +0000
authors:
- Ahsan Raza Khan
- Poonam Yadav 
venue: "IEEE Wireless Communications and Networking Conference (WCNC) 2025"
link: 'https://drive.google.com/file/d/1KJlI1Cu_dNV169JW1HxeQ3dNdf2WNNKZ/view?usp=sharing'
---

Millimeter-wave (mmWave) communication systems use large antenna arrays and narrow beams to achieve strong signal power. However, this approach requires extensive beam training, which leads to high overhead. Recently proposed vision-aided beam prediction methods show promising results, reducing this overhead. However, these techniques have considerable computational complexity, hindering practical deployment. To address this issue, we propose a Semantic-Aware Quantised Network (SemQNet) framework that leverages image compression and a lightweight computer vision model to extract semantic information used for training a fully connected neural network (FCNN). Additionally, the proposed SemQNet also uses quantisation-aware training (QAT), which enables low-precision arithmetic operation, reducing the model size in the training process. Our tests on the DeepSense 6G dataset show that SemQNet achieves almost the same top-1 accuracy as existing vision-based methods while reducing the model size by 74.21\%. This smaller model size reduces the communication overhead, making SemQNet a practical and efficient solution for energy-constrained mmWave communication systems.