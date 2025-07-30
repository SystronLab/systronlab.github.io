---
layout: page
title: Lab Facilities
permalink: /facilities/
background: "/img/uoy-cse-1.jpg"
---

The SYSTRON Lab is based in the Ian Wand Building, Campus East, at the University of York. We also have a presence in the nearby Institute for Safe Autonomy (ISA) and in City College, Thessaloniki - the University of York's Europe Campus.

## Locations

### The Ian Wand Building

Located on University of York Campus East, the Ian Wand Building is the home of the University of York's Computer Science Department. We have offices in this space, as well as a specialist research lab.

### Institute for Safe Autonomy (ISA)

Also located on Campus East, the ISA building is a new £15m purpose-built facility with experimental laboratories for robotics, advanced communications and quantum technologies, including separate networks for robotic and autonomous systems.

This also has a number of [test spaces](https://www.york.ac.uk/safe-autonomy/facilities/laboratories-and-test-spaces/).

## Research Testbeds

As part of our research, we have constructed a small number of testbeds.

### Thread Edge Testbed

As [presented earlier this year at the NDSS Symposium](/publications/2025-evaluation-of-radio-jamming-countermeasures), we have a dedicated testbed for IoT-based radio networks which we have used for experiments around Thread-based (IEEE 802.15.4) networking.

<div style="max-width: 100%; overflow: hidden;">
  <img src="https://systronlab.github.io/img/posts/iot-testbed.jpg" alt="Thread Testbed" style="width: 100%; height: auto;" />
</div>
<br>

### 5G Standalone (SA) Network Testbed

We host a fully operational 5G Standalone (SA) network testbed powered by the srsRAN stack. The setup follows a Split 8 architecture, with the complete gNB stack deployed locally. For the radio front end, we utilize a USRP X310 in conjunction with an OctoClock-G CDA-2990.

<div style="max-width: 100%; overflow: hidden;">
  <img src="/img/5g-pixel.jpeg" alt="5g pixel" style="width: 100%; height: auto;" />
</div>

The testbed has been successfully validated using commercial off-the-shelf (COTS) user equipment, specifically a Pixel 8 Pro, achieving full internet connectivity over the 5G SA link.

<div style="max-width: 100%; overflow: hidden; text-align: center;">
  <img src="/img/pixel.jpeg" alt="Pixel" style="width: 50%; height: auto;" />
</div>

Building on this architecture, we extended the testbed to integrate a Quectel RMU500-EK 5G modem connected to a Jetson Nano–based mini robot.

<div style="max-width: 100%; overflow: hidden;">
  <img src="/img/5g-minirobot.jpeg" alt="5g minirobot" style="width: 100%; height: auto;" />
</div>

The robot is remotely operated over the 5G SA network, showcasing real-time, network-driven robotic control over the 5G testbed.

<div style="max-width: 100%; overflow: hidden; text-align: center;">
  <img src="/img/minirobot.png" alt="Minirobot" style="width: 50%; height: auto;" />
</div>

The modular and programmable nature of this testbed is enabling researchers to design and evaluate experiments aligned with both current and emerging 5G/6G use cases.
