---
layout: projects
title: "Securing the Internet of Things"
date: 2025-01-01 12:00:00 +0000
authors:
  - Anthony Moulds
  - Poonam Yadav
image: "/img/posts/iot-testbed.jpg"
desc: Developing defences to threats against IoT and Industrial IoT devices, exploring security challenges in the Thread protocol, and providing resilience with 5G RedCap connectivity.
tags: [IoT, Security, Thread Protocol, TinyEdge, eBPF]
---

The Internet of Things (IoT) has permeated every aspect of our lives, from our homes to public spaces like train stations and hospitals. Smart devices sitting at the edge of networks, known as TinyEdge, are often connected to the Internet and provide us with numerous conveniences. For instance, we can use voice assistants like Alexa to control our lights and TV without getting up from our seats.

However, users are increasingly concerned about the lack of four key features that are essential for trustworthy and reliable systems: security, privacy, robustness, and resilience. Achieving these features requires a fundamental base layer of seamless interoperability, which has been largely overlooked by communication and networking research communities. As a result, there are limited methodologies, testing, and integration tools available, creating a gap between the communication infrastructure and the software stack that supports the networking and application layer.


## Objectives

Our project seeks to address these challenges by:

- Examining the interoperability needs of TinyEdge networks and assessing various communication technologies such as Wi-Fi, Zigbee, Bluetooth, Thread, 6LoWPAN, Z-Wave, 5G, LTE, Sigfox, NB-IoT, and LoraWAN.
- Exploring diverse network topologies and TinyEdge architectures to enable efficient service and application management and orchestration.
- Developing an open-source communication framework that can be customised for different IoT applications, guaranteeing seamless connectivity, data rates, latency, security, energy efficiency, resilience, data privacy, and reliability.
- Assessing the effectiveness of our proposed architecture in meeting various quality-of-service (QoS), security, energy, resilience, and reliability requirements by conducting two small-scale use case studies.


> ## Research Spotlight: Building Resilience to Radio Jamming
> 
> Industrial IoT (IIoT) networks are deployed across sectors including healthcare, manufacturing and energy, but remain vulnerable to radio channel attacks.
> Even with more recent protocols like Thread, obscured IoT traffic can be identified, which allows for a precise and targetted Denial of Service (DoS) attack to be executed causing total communication failure across in otherwise resilient meshed networks.
> 
> ![Testing Thread's vulnerability to radio jamming](/img/projects/thread-jamming.jpg)
> 
> These attacks, which we have demonstrated can be executed using readily available off-the-shelf equipment, provide a low-cost approach for adversaries to disrupt both IoT and IIoT networks.
> In [our 2025 paper](https://systronlab.github.io/publications/2025-enhancing-iot-defenses-against-radio-jamming), we outlined practical steps to improve Thread network resilience using countermeasures against jamming attacks, implemented directly on Thread-enabled devices.
> 
> This work underscores how jamming and countermeasure systems can be developed and tested on real hardware, fostering further research in the field of network security. The experimental results provide valuable insights into the efficacy of these strategies in mitigating jamming threats.



## Publications

- [(Paper) Enhancing IoT Defenses Against Radio Jamming: Insights from a Thread Testbed Case Study](https://systronlab.github.io/publications/2025-enhancing-iot-defenses-against-radio-jamming)
- [(Abstract and Poster) Evaluation of Radio Jamming Countermeasures in IoT Thread Networks](https://systronlab.github.io/publications/2025-evaluation-of-radio-jamming-countermeasures)
- [(Paper) Mitigating IoT Botnet DDoS Attacks through MUD and eBPF based Traffic Filtering](https://dl.acm.org/doi/10.1145/3631461.3631549)


## Repositories

- [SystronLab/thread-edge-testbed (GitHub)](https://github.com/SystronLab/thread-edge-testbed): repository for the Thread Edge Testbed located in our lab.
- [SystronLab/osMUD-UI](https://github.com/SystronLab/osMUD-UI): a tool to manage and edit Manufacturer Usage Description (MUD) files from the browser.


## Funding

This research is supported in part by:

- **EPSRC**, under the project REMOTE: Resilient and Secure Multi-Access Interoperable Communication Fabric for TinyEdge (Grant reference: EP/Y019229/1).
- **EPSRC and DSIT TMF-uplift**, under the CHEDDAR Hub: Communications Hub For Empowering Distributed ClouD Computing Applications And Research (Grant references: EP/X040518/1, EP/Y037421/1).