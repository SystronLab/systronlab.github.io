---
layout: projects
title: "Advancing RAN Interoperability"
date: 2024-10-10 12:00:00 +0000
authors:
  - Mohit Bidikar
  - Dr Yifan Liu
  - Dr Rana Muhammad Sohaib
  - Dr Poonam Yadav

image: "/img/5g-split72.jpg"
desc: Advancing RAN interoperability by bridging the gap between commercial and open-source E2 nodes and RAN Intelligent Controllers (RICs).
tags: [6G, 5G, Networks, Open RAN, OCUDU, RIC]
---

## Project Overview

This project aims to improve interoperability in the Radio Access Network (RAN) by enabling seamless communication between commercial and open-source E2 nodes and RAN Intelligent Controllers (RICs). We developed and integrated custom xApps to collect Key Performance Metrics (KPMs) and perform RAN control actions. Starting with controlled setups using commercial software, we progressively advanced toward fully open-source, over-the-air 5G deployments — including support for commercial UEs and cloud-hosted 5G core services. This end-to-end testbed demonstrates practical paths to building open, flexible, and interoperable 5G networks.

## Configurations

#### 1. Commercial E2 Node (VIAVI Tester) with Open-Source RIC (OSC)

**GitHub**: [uoy-research/oran-sc-ric-uoy](https://github.com/uoy-research/oran-sc-ric-uoy)<br>

We began with the integration of a commercial E2 node (VIAVI tester) with an open-source RIC (OSC). This required significant modifications to the OSC RIC (Github repo attached above) to resolve compatibility issues. After successful adaptation, our xApp was able to fetch KPMs directly from the VIAVI node.

Although current E2 interfaces limit actuation capabilities, we have laid the groundwork to test E2SM-RC and E2SM-CCC functionalities in future RIC updates.

#### 2. Open-Source E2 Node (OCUDU) with Open-Source RICs (OSC, FlexRIC)

Building on the initial milestone, we transitioned to an entirely open-source setup, experimenting with multiple configurations of the OCUDU E2 node and RIC implementations.

##### 2.1 OCUDU with ZMQ

**GitHub**: [SystronLab/OCUDU-ZMQ](https://github.com/SystronLab/srsRAN-ZMQ)<br>

We first deployed OCUDU using its ZeroMQ-based virtual radio interface. This software-centric setup allowed us to simulate RF behavior without hardware, accelerating development and continuous integration testing. It provided an efficient base for integrating our xApps with both FlexRIC and OSC RICs.

<img src="{{ '/img/zmq.png' | relative_url }}" alt="OCUDU with ZMQ" loading="lazy" {% include image-srcset.html src='/img/zmq.png' sizes="(max-width: 767px) calc(100vw - 30px), 820px" %}>
<p><em>Image credit: <a href="https://www.srsran.com/" target="_blank">OCUDU project</a></em></p>

The GitHub repository includes comprehensive guides for various deployment scenarios (Docker/non-Docker, single/multiple UEs/gNBs, different RICs).

##### 2.2 OCUDU Over-the-Air (OTA) Setup with USRP x310

**GitHub**: [SystronLab/OCUDU-USRPs-OTA](https://github.com/SystronLab/srsRAN-USRPs-OTA)<br>

<img src="{{ '/img/ota.png' | relative_url }}" alt="Over-the-Air (OTA) Setup" loading="lazy" {% include image-srcset.html src='/img/ota.png' sizes="(max-width: 767px) calc(100vw - 30px), 820px" %}>
<p><em>Image credit: <a href="https://www.srsran.com/" target="_blank">OCUDU project</a></em></p>
{% include youtube.html id='xW7LMHVnIJk' title='OCUDU over-the-air setup with USRP X310' poster='/img/videos/xW7LMHVnIJk.jpg' %}
With the foundation set in ZMQ-based virtual testing, we progressed to over-the-air deployments using USRP x310 hardware. This enabled a realistic 5G setup using srsUE, OCUDU gNB, and the Open5GS core network, resulting in a fully open-source end-to-end OTA 5G network.

##### 2.3 OCUDU split 8 Setup with USRP x310 and COTS UEs / Quectel Modem

**GitHub**: [SystronLab/OCUDU-USRPs-COTS](https://github.com/SystronLab/srsRAN-USRPs-COTS)<br>

{% include youtube.html id='aPBsFGrEsEk' title='5G standalone network with COTS UEs and robotic control' poster='/img/responsive/5g-minirobot-jpeg-480.jpeg' %}

In this phase, we implemented a fully functional 5G standalone (SA) network using OCUDU integrated with USRP X310 and commercial off-the-shelf (COTS) UEs. This setup employs a Split 8 architecture, where the entire gNB stack is deployed locally. Coupled with Open5GS core services and programmable SIMs (sysmoISIM), the system enables full internet connectivity for COTS devices.

##### 2.4 OCUDU split 7.2 Setup with Benetel RU and COTS UEs

We implemented an Open-RAN Split 7.2 setup using OCUDU, a Benetel RAN650 Radio Unit (RU), and commercial off-the-shelf (COTS) UEs. The completed testbed uses a FibroLAN Falcon-RX/812/G for switching and clock distribution. This architecture further disaggregates the RAN stack, with the RU handling the lower physical layer functions and the DU/CU components operating separately.

<figure class="facility-figure">
  <img src="{{ '/img/5g-split72.jpg' | relative_url }}" alt="Completed Open-RAN Split 7.2 testbed with the Benetel RAN650 radio unit and switching hardware" loading="lazy" {% include image-srcset.html src='/img/5g-split72.jpg' sizes="(max-width: 767px) calc(100vw - 30px), 800px" %}>
  <figcaption>The completed OCUDU Split 7.2 testbed.</figcaption>
</figure>
<div class="facility-gallery">
  <figure>
    <img src="{{ '/img/5g-split72-ru.jpg' | relative_url }}" alt="Benetel RAN650 radio unit and antennas in the Split 7.2 testbed" loading="lazy" {% include image-srcset.html src='/img/5g-split72-ru.jpg' sizes="(max-width: 767px) calc(100vw - 30px), 520px" %}>
    <figcaption>The Benetel RAN650 radio unit.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/img/5g-split72-switch.jpg' | relative_url }}" alt="Switching and clock-distribution hardware in the Split 7.2 testbed" loading="lazy" {% include image-srcset.html src='/img/5g-split72-switch.jpg' sizes="(max-width: 767px) calc(100vw - 30px), 260px" %}>
    <figcaption>Switching and clock-distribution hardware.</figcaption>
  </figure>
</div>

---

## Conclusion

Step by step, we have built a progressively complex testbed to evaluate and enhance RAN interoperability. Starting from controlled virtual environments to real world over-the-air deployments with commercial UEs.
