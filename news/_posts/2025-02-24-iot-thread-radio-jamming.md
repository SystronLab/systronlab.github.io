---
layout: post
title: "Presenting a Countermeasure for IoT Thread Network Radio Jamming"
date: 2025-02-24 12:00:00 +0000
subtitle: "Poonam, Anthony and Peter share their work on Thread IoT security at NDSS"
background: '/img/posts/iot-testbed.jpg'
---

Dr Poonam Yadav, Anthony Moulds and Peter Gillingham have had their poster, which focuses on the vulnerability of the widely-used Thread standard, accepted by the [Network and Distributed System Security (NDSS) Symposium](https://www.ndss-symposium.org/ndss2025/).

Their work, which focuses on identifying the active radio channels in the standard for IoT communication, demonstrates the vulnerability of existing IoT devices - such as smart bulbs and dishwashers - to attacks that are relatively simple to carry out. The countermeasure, which involves securely distributing random channel change information, hardens these devices against this style of attack. The artifacts for replicating the work in this poster are available through our GitHub repository, [SystronLab/thread-edge-testbed](https://github.com/SystronLab/thread-edge-testbed).

## Poster Abstract

The Thread mesh networking protocol, designed for IoT communication, ensures network layer interoperability but remains vulnerable to security threats. A major risk is Denial-of-Service (DoS) attacks, which can overwhelm networks, causing congestion and device failures. While Thread’s self-healing mesh mitigates some risks, devices must be robust against resource exhaustion attacks. This paper examines DoS attacks via radio jamming, implementing a jamming system on a bespoke Thread Testbed. A countermeasure using standard channel hopping is proposed and tested, demonstrating its effectiveness.

<div class="clearfix">
    <a class="btn btn-primary float-right" href="/publications/2025-evaluation-of-radio-jamming-countermeasures">Read the extended abstract and poster</a>
</div>