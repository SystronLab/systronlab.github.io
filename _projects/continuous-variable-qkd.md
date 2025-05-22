---
layout: projects
title: "Continuous-Variable QKD for Constrained Devices"
date: 2024-01-01 12:00:00 +0000
authors:
- Panos Papanastasiou
- Carlo Ottaviani
- Stefano Pirandola
- Poonam Yadav
- Marco Lucamarini
image: '/img/silicon-chip.jpg'
desc: Addressing the challenge of implementing secure quantum communication in resource-constrained environments.
---

This project addresses the challenge of implementing secure quantum communication in **resource-constrained environments** such as IoT nodes, wearable devices, and smart sensors. These systems increasingly require **high-performance cryptography** that is compatible with **limited memory and processing power**. We propose and analyze a **continuous-variable quantum key distribution (CV-QKD)** framework that delivers **composable security** while tightly characterizing the **error correction (EC) leakage and storage demands** of such devices.

By focusing on **Gaussian-modulated coherent-state (GMCS) protocols** and enhancing the post-processing stage with **non-binary LDPC codes**, our work achieves secret key rates close to the theoretical optimum. We develop **tight finite-size bounds** for the one-way EC stage and connect them to **memory predictions** needed for encoding parity-check matrices, enabling practical deployments of CV-QKD on constrained transmitters communicating with more capable receivers.

## Objectives

- Develop a **composable security framework** for CV-QKD suitable for constrained devices.
- Apply **tight finite-size bounds** to model realistic EC leakage using **non-binary LDPC codes**.
- Analyze **memory and performance trade-offs** in encoding procedures.
- Offer theoretical predictions and simulations for **storage-efficient EC encoding**.
- Evaluate practical viability through **rate vs resource consumption plots** under real-world constraints.

## Funding

This research is supported in part by:
- **EPSRC and DSIT TMF-uplift**, under the CHEDDAR Hub: Communications Hub For Empowering Distributed ClouD Computing Applications And Research (Grant references: EP/X040518/1, EP/Y037421/1).

## Publications

- [(Preprint) Continuous-Variable Quantum Key Distribution with Composable Security and Tight Error Correction Bound for Constrained Devices](https://systronlab.github.io/publications/2025-continuous-variable-quantum-key-distribution-with-composable-security)

## Codebase

- [SystronLab/tight_bound_leakage (GitHub)](https://github.com/SystronLab/tight_bound_leakage): Code and simulation library publicly available.