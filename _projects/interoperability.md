---
layout: projects
title: "Advancing RAN Interoperability"
date: 2024-10-10 12:00:00 +0000
authors:
  - Poonam Yadav
  - Yifan Liu
  - Rana Muhammad Sohaib
  - Mohit Bidikar
image: "/img/projects/interoperability.png"
desc: Advancing RAN interoperability by bridging the gap between commercial and open-source E2 nodes and RAN Intelligent Controllers (RICs).
---

## Project Overview

This project aims to improve interoperability in the Radio Access Network (RAN) by enabling seamless communication between commercial and open-source E2 nodes and RAN Intelligent Controllers (RICs). We developed and integrated custom xApps to collect Key Performance Metrics (KPMs) and perform RAN control actions. Starting with controlled setups using commercial software, we progressively advanced toward fully open-source, over-the-air 5G deployments — including support for commercial UEs and cloud-hosted 5G core services. This end-to-end testbed demonstrates practical paths to building open, flexible, and interoperable 5G networks.

## Configurations

#### 1. Commercial E2 Node (VIAVI Tester) with Open-Source RIC (OSC)

**GitHub**: [uoy-research/oran-sc-ric-uoy](https://github.com/uoy-research/oran-sc-ric-uoy)<br>  
**Status**: <span style="color: #609732;">Completed</span>

We began with the integration of a commercial E2 node (VIAVI tester) with an open-source RIC (OSC). This required significant modifications to the OSC RIC (Github repo attached above) to resolve compatibility issues. After successful adaptation, our xApp was able to fetch KPMs directly from the VIAVI node.

<video controls preload="auto" style="width: 100%; height: auto;">
  <source src="/vid/viavi-kpm.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Although current E2 interfaces limit actuation capabilities, we have laid the groundwork to test E2SM-RC and E2SM-CCC functionalities in future RIC updates.

#### 2. Open-Source E2 Node (srsRAN) with Open-Source RICs (OSC, FlexRIC)

Building on the initial milestone, we transitioned to an entirely open-source setup, experimenting with multiple configurations of the srsRAN E2 node and RIC implementations.

##### 2.1 srsRAN with ZMQ

**GitHub**: [SystronLab/srsRAN-ZMQ](https://github.com/SystronLab/srsRAN-ZMQ)<br>  
**Status**: <span style="color: #609732;">Completed</span>

We first deployed srsRAN using its ZeroMQ-based virtual radio interface. This software-centric setup allowed us to simulate RF behavior without hardware, accelerating development and continuous integration testing. It provided an efficient base for integrating our xApps with both FlexRIC and OSC RICs.

<img src="/img/zmq.png" alt="srsRAN with ZMQ" >
<p><em>Image credit: <a href="https://www.srsran.com/" target="_blank">srsRAN project</a></em></p>

The GitHub repository includes comprehensive guides for various deployment scenarios (Docker/non-Docker, single/multiple UEs/gNBs, different RICs).

##### 2.2 srsRAN Over-the-Air (OTA) Setup with USRP x310

**GitHub**: [SystronLab/srsRAN-USRPs-OTA](https://github.com/SystronLab/srsRAN-USRPs-OTA)<br>  
**Status**: <span style="color: #609732;">Completed</span>

<img src="/img/ota.png" alt="Over-the-Air (OTA) Setup" >
<p><em>Image credit: <a href="https://www.srsran.com/" target="_blank">srsRAN project</a></em></p>

<iframe width="560" height="315"
          src="https://www.youtube.com/embed/JqCKbfGFBr8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
</iframe>
With the foundation set in ZMQ-based virtual testing, we progressed to over-the-air deployments using USRP x310 hardware. This enabled a realistic 5G setup using srsUE, srsRAN gNB, and the Open5GS core network, resulting in a fully open-source end-to-end OTA 5G network.

##### 2.3 srsRAN split 8 Setup with USRP x310 and COTS UEs

**GitHub**: [SystronLab/srsRAN-USRPs-COTS](https://github.com/SystronLab/srsRAN-USRPs-COTS)<br>  
**Status**: <span style="color: #609732;">Completed</span>

<img src="/img/usrp.png" alt="USRPs with COTS" >

In this phase, we implemented a fully functional 5G standalone (SA) network using srsRAN integrated with USRP X310 and commercial off-the-shelf (COTS) UEs. This setup employs a Split 8 architecture, where the entire gNB stack is deployed locally. Coupled with Open5GS core services and programmable SIMs (sysmoISIM), the system enables full internet connectivity for COTS devices.

##### 2.4 Cloud Deployment of 5G Core

**Status**: <span style="color: #f39c12;">In Progress</span>

The next step in our journey is to decouple the core from the local setup by migrating the Open5GS 5G core to an AWS edge location. This move will allow us to evaluate real-world performance characteristics such as latency, throughput, and reliability when operating across distributed infrastructure.

This transition is essential to assess the feasibility of deploying disaggregated RAN components in cloud-native environments, a key enabler for scalable and flexible 5G networks.

##### 2.5 srsRAN split 7.2 Setup with Benetel RU and COTS UEs

**Status**: <span style="color: #e67e22;">Planned</span>

Following the cloud deployment, we will advance to implementing a Split 7.2 architecture by integrating a Benetel Radio Unit (RU). This setup will allow us to disaggregate the RAN stack further, with the RU handling the lower physical layer functions and the DU/CU components operating separately.

---

## Conclusion

Step by step, we have built a progressively complex testbed to evaluate and enhance RAN interoperability. Starting from controlled virtual environments to real-world over-the-air deployments with commercial UEs, this work showcases tangible progress in aligning open-source and commercial RAN ecosystems.
