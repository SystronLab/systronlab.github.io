---
layout: projects
title: "Securing the Internet of Things"
date: 2024-01-01 12:00:00 +0000
authors:
- Anthony Moulds
- Peter Gillingham
- Poonam Yadav
image: '/img/posts/iot-testbed.jpg'
desc: Developing defences to threats against Thread-protocol devices.
---

The Internet of Things (IoT) has permeated every aspect of our lives, from our homes to public spaces like train stations and hospitals. These smart devices, known as TinyEdge, are connected to the internet and provide us with numerous conveniences. For instance, we can use voice assistants like Alexa to control our lights and TV without getting up from our seats.

However, users are increasingly concerned about the lack of four key features that are essential for trustworthy and reliable systems: security, privacy, robustness, and resilience. Achieving these features requires a fundamental base layer of seamless interoperability, which has been largely overlooked by communication and networking research communities. As a result, there are limited methodologies, testing, and integration tools available, creating a gap between the communication infrastructure and the software stack that supports the networking and application layer.

## Objectives

Our project seeks to address these challenges by:

- Examining the interoperability needs of TinyEdge networks and assessing various communication technologies such as Wi-Fi, Zigbee, Bluetooth, Thread, 6LoWPAN, Z-Wave, 5G, LTE, Sigfox, NB-IoT, and LoraWAN.
- Exploring diverse network topologies and TinyEdge architectures to enable efficient service and application management and orchestration.
- Developing an open-source communication framework that can be customised for different IoT applications, guaranteeing seamless connectivity, data rates, latency, security, energy efficiency, resilience, data privacy, and reliability.
- Assessing the effectiveness of our proposed architecture in meeting various quality-of-service (QoS), security, energy, resilience, and reliability requirements by conducting two small-scale use case studies.

## Funding

This research is supported in part by:

- **EPSRC**, under the project REMOTE: Resilient and Secure Multi-Access Interoperable Communication Fabric for TinyEdge (Grant reference: EP/Y019229/1).
- **EPSRC and DSIT TMF-uplift**, under the CHEDDAR Hub: Communications Hub For Empowering Distributed ClouD Computing Applications And Research (Grant references: EP/X040518/1, EP/Y037421/1).

## Publications

- [(Paper) Enhancing IoT Defenses Against Radio Jamming: Insights from a Thread Testbed Case Study](https://systronlab.github.io/publications/2025-enhancing-iot-defenses-against-radio-jamming)
- [(Abstract and Poster) Evaluation of Radio Jamming Countermeasures in IoT Thread Networks](https://systronlab.github.io/publications/2025-evaluation-of-radio-jamming-countermeasures)
- [(Paper) Mitigating IoT Botnet DDoS Attacks through MUD and eBPF based Traffic Filtering](https://dl.acm.org/doi/10.1145/3631461.3631549)

## Repositories

- [SystronLab/thread-edge-testbed (GitHub)](https://github.com/SystronLab/thread-edge-testbed): repository for the Thread Edge Testbed located in our lab.
- [SystronLab/osMUD-UI](https://github.com/SystronLab/osMUD-UI): a tool to manage and edit Manufacturer Usage Description (MUD) files from the browser.