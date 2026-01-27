---
layout: projects
title: "xApp Driven RAN Optimisation for Mission Critical Robots in a Multi UE Environment"
date: 2025-11-26 12:00:00 +0000
authors:
  - Mohit Bidikar, Anthony Moulds, Dr. Poonam Yadav
image: "/img/projects/xapp-driven-ran-optimisation.jpeg"
desc: A custom xApp on the Near-RT RIC that allocates PRBs to the mission-critical UEs
---

## Problem and Motivation

Modern industrial and healthcare environments are increasingly adopting mission-critical robotic systems such as robotic arms, AGVs, automated inspection units and surgical robots that exchange control commands and sensor data every few milliseconds. These critical systems require predictable throughput, ultra-low latency, and highly stable wireless links. Even brief jitter or delay can disrupt the control loop and lead to unsafe or unstable behaviour.

While network slicing provides isolation and QoS differentiation, it does not control how PRBs are assigned to individual UEs inside the gNB. The final decision on resource allocation still depends on the RAN scheduler’s generic algorithms, which cannot guarantee deterministic, per-UE behaviour. As a result, even devices
assigned to a high-priority slice may still experience jitter or throughput variation when competing for resources with other devices.

This reveals a gap for robotic systems that require strict, predictable performance. These time-sensitive systems need fine-grained, real-time control at the RAN level to maintain stable operation. To address this limitation, we built a custom xApp on the Near-RT RIC that allocates PRBs to the mission-critical UEs. This enables fine-grained, per-UE, real-time prioritisation of radio resources.

## System Design

<b>RAN:</b> srsRAN Split 8 + USRP x310 + OctoClock-G CDA-2990

<b>Core:</b> Open5GS

<b>RIC:</b> OSC Near-RT RIC + PRB Allocation xApp

<b>UE 1 (Critical):</b> Jetson Nano + Robot + Quectel RMU500-EK + SysmoISIM

<b>UE 2 (Non-critical):</b> Pixel 8 pro + SysmoISIM

<img src="/img/xappdesign.png" alt="xApp system design" >

<b>UDP Interface:</b> Server on Robot + Client on Workstation

<img src="/img/xappudp.png" alt="xApp system design" >

## Implementation

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/aPBsFGrEsEk"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

## Results

Our xApp successfully delivered the PRB allocation commands to the gNB
via the E2SM-RC interface, and the scheduler applied them immediately.
This enabled real-time prioritisation of the critical robot over the non-
critical UE.
UE-1 (Critical robot)
• Higher and more stable throughput
• Noticeably smoother motion
• Significant reduction in jitter and micro-freezes
UE-2 (Non-critical)
• Controlled throughput reduction
• Connection remained fully stable
These observations confirm that PRB reallocation was applied correctly
and that RIC-driven co

## Further Work

Multi-robot coordination:
Scaling the setup to multiple critical UEs and evaluating how RAN control
behaves when several UEs require priority at the same time.
PRB control + network slicing:
Combining fine-grained PRB allocation with slice-level QoS to achieve
fully deterministic end-to-end behaviour.
Intent-based operation:
Automating PRB adjustments using high-level intents (e.g. “prioritise
robot movements”) instead of manually triggering the xApp.
