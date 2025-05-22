---
layout: post
title: "Ahsan presents at IEEE Wireless Communications and Networking Conference"
date: 2025-03-24 12:00:00 +0000
subtitle: "Using lightweight computer vision to optimise wireless connectivity"
background: '/img/wireless-network.jpg'
---

Ahsan Raza Khan recently presented his work on **SemQNet**, a computer vision based approach to predict and improve millimeter-wave wireless communication to the IEEE Wireless Communications and Networking Conference workshop on the [Sustainable and Intelligent Green Internet of Things for 6G and Beyond](https://wcnc2025.ieee-wcnc.org/program/workshops) in Milan, Italy.

## Abstract

Millimeter-wave (mmWave) communication systems use large antenna arrays and narrow beams to achieve strong signal power. However, this approach requires extensive beam training, which leads to high overhead. Recently proposed vision-aided beam prediction methods show promising results, reducing this overhead. However, these techniques have considerable computational complexity, hindering practical deployment. To address this issue, we propose a Semantic-Aware Quantised Network (SemQNet) framework that leverages image compression and a lightweight computer vision model to extract semantic information used for training a fully connected neural network (FCNN). Additionally, the proposed SemQNet also uses quantisation-aware training (QAT), which enables low-precision arithmetic operation, reducing the model size in the training process. Our tests on the DeepSense 6G dataset show that SemQNet achieves almost the same top-1 accuracy as existing vision-based methods while reducing the model size by 74.21%. This smaller model size reduces the communication overhead, making SemQNet a practical and efficient solution for energy-constrained mmWave communication systems.

<div class="clearfix">
    <a class="btn btn-primary float-right" href="/publications/2025-semq-deepsense-6g">Read the paper</a>
</div>