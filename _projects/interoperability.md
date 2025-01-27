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

This project aims to enhance Radio Access Network (RAN) interoperability by bridging the gap between commercial and open-source E2 nodes and RAN Intelligent Controllers (RICs). Our in-house developed xApps are adapted to run on these platforms to fetch key performance metrics (KPMs) and perform RAN control.

## Configurations

#### 1. Commercial E2 Node (VIAVI Tester) with Open-Source RIC (OSC)

**GitHub**: [uoy-research/oran-sc-ric-uoy](https://github.com/uoy-research/oran-sc-ric-uoy)<br>  
**Status**: <span style="color: #609732;">Completed</span>

The source code of the OSC RIC was modified to address interoperability issues encountered during its integration with the VIAVI tester. The modified OSC RIC was successfully integrated, and currently our xApp is able to fetch KPMs from the VIAVI tester.

<video controls preload="auto" style="width: 100%; height: auto;">
  <source src="/vid/viavi-kpm.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Currently, testing actuations using the xApp is not feasible due to the underdeveloped state of the RIC's E2 interface. Actuations will be tested in the future as the RICs enhance their functionality for E2SM-RC and E2SM-CCC.

#### 2. Open-Source E2 Node (srsRAN) with Open-Source RICs (OSC, FlexRIC)

This segment explores the integration of the open-source E2 node srsRAN with open-source RICs like OSC and FlexRIC. There are three variations of this setup with different software and hardware requirements.

##### 2.1 srsRAN with ZMQ

**GitHub**: [uoy-research/srsRAN-ZMQ](https://github.com/uoy-research/srsRAN-ZMQ)<br>  
**Status**: <span style="color: #609732;">Completed</span>

srsRAN is a 4G and 5G software radio suite that includes a core network, gNB, and user equipment (UE) implementation. While gNB and UE typically use physical radios for over-the-air transmissions, srsRAN also features a virtual radio that uses the ZeroMQ networking library to transfer radio samples between applications. This software-based approach is advantageous for development, testing, debugging, and CI/CD, as it eliminates the need for hardware.

<img src="/img/zmq.png" alt="srsRAN with ZMQ" >
<p><em>Image credit: <a href="https://www.srsran.com/" target="_blank">srsRAN project</a></em></p>

Step-by-step instructions for setting up the project with various configurations (Dockerized 5G core, non-Dockerized 5G core, single UE, multiple UEs, single gNB, multiple gNBs, FlexRIC, OSC RIC) can be found in the GitHub repository.

##### 2.2 srsRAN Over-the-Air (OTA) Setup with USRP x310

**GitHub**: [uoy-research/srsRAN-USRPs-OTA](https://github.com/uoy-research/srsRAN-USRPs-OTA)<br>  
**Status**: <span style="color: #609732;">Completed</span>

<img src="/img/ota.png" alt="Over-the-Air (OTA) Setup" >
<p><em>Image credit: <a href="https://www.srsran.com/" target="_blank">srsRAN project</a></em></p>

The srsRAN project provides a 5G CU/DU solution but does not include a UE application. However, srsRAN 4G offers a prototype (srsUE) for testing.

<iframe width="560" height="315"
          src="https://www.youtube.com/embed/JqCKbfGFBr8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
</iframe>

We have successfully created a fully open-source, end-to-end 5G network leveraging srsUE, the gNB from the srsRAN project, and the Open5GS 5G core network. This setup is specifically designed to enable an Over-the-Air (OTA) configuration using USRP x310s

##### 2.3 USRPs with Commercial Off-The-Shelf (COTS) UEs

**GitHub**: [uoy-research/srsRAN-USRPs-COTS](https://github.com/uoy-research/srsRAN-USRPs-COTS)<br>  
**Status**: <span style="color: #A95938;">Ongoing</span>

<img src="/img/usrp.png" alt="USRPs with COTS" >

In this setup, we are utilizing srsRAN as our 5G core, along with two Ettus Research X310 USRPs equipped with an OctoClock-G. The configuration follows an 8-split architecture, featuring eight log-periodic antennas connected to two 2x2 MIMO base stations. Additionally, we have two commercial off-the-shelf (COTS) user equipment (UE) devices: one designed for enhanced mobile broadband (eMBB) and the other for ultra-reliable low-latency communications (URLLC).

---

## Conclusion

Through these initiatives, we are making significant strides in improving RAN interoperability, which is crucial for the advancement of next-generation wireless networks.
