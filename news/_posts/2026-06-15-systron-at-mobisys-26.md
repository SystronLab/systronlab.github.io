---
layout: post
title: "See SYSTRON Lab's Demos at ACM MobiSys 2026"
date: 2026-06-15 09:00:00 +0000
background: "/img/projects/xapp-driven-ran-optimisation.jpeg"
---

The SYSTRON LAB is delighted to be presenting two demos at [the upcoming 24th ACM International Conference on Mobile Systems, Applications, and Services (ACM MobiSys 2026)](https://www.sigmobile.org/mobisys/2026/), hosted in Cambridge between the 21st and 26th June.
Our demonstrations, covering both the interactive network connectivity mapping of mobile network operators, in addition to work to mitigate radio resource exhaustion risks in private 5G networks, both represent notable contributions to the research (and industrial) telecommunications communities. 

In addition to our demos, presented in more detail below, Dr Poonam Yadav will also be co-chairing two workshops at the conference:
* [**N²Women**](https://www.sigmobile.org/mobisys/2026/n2women_program/), a workshop bringing together researchers in networking and communications, with a particular focus on supporting women and other under-represented researchers, as well as students and junior researchers in the field of telecommunications.
* [**EdgeSys**, the 9th International Workshop on Edge Systems, Analytics and Networking](https://edge-sys.github.io/2026/), which strives to bring the community together to open discussions and discuss the latest research ideas on edsge systes, analytics and networking, and especially those related to novel and emerging technologies and use-cases.


## Demo: Visualising Mobile Operator Connectivity

![Visualising Mobile Operator Connectivity](/img/projects/inetvisor.png)

Telecommunications operators route much of their traffic across IP backbones, exchanging both mobile traffic (for routing or roaming) and Internet-bound traffic, at Internet Exchange Points (some of which also offer GRX/IPX services) strategically located across the globe. Operating largely independently, both for regulatory compliance and security, inter-operator peering within the telecoms field remains mostly invisible to external parties, compromising both strategic peering decisions with other mobile operators and minimising resilience risk analysis for governments or regulators. This demonstration focuses on resolving this specific issue, providing an interactive graph-based tool through which to understand and analyse the resilience of telecommunications networks within a global context, and highlighting challenges of resilience posed both by the structure of IP backbones and underlying geopolitical risks.

[**Read the demo paper**](/publications/2026-visualising-mobile-operator-connectivity)

Some of this work has also been published in:

- [TERIS: A Tool for Emulated Routing at Internet Scale](https://systronlab.github.io/publications/2025-teris-a-tool-for-emulated-routing-at-internet-scale)
- [WHOactuallyIS? Finding the Companies Behind the Networks](https://systronlab.github.io/publications/2025-who-actually-is)
- [Unveiling Internet Censorship: Analysing the Impact of Nation States' Content Control Efforts on Internet Architecture and Routing Patterns](https://systronlab.github.io/publications/2024-unveiling-internet-censorship)

[**Learn more about our network connectivity research**](/projects/internet)


## Demo: Mitigating Radio Resource Exhaustion Risks for Critical UEs in Private 5G Networks using Open RAN xApp

![OpenRAN xApps for Resource Allocation](/img/projects/xapp-driven-ran-optimisation.jpeg)

Private 5G networks are increasingly used to support Operational Technology systems such as industrial robots and autonomous inspection platforms. These systems depend on stable, low latency wireless connectivity to maintain predictable behaviour. However, malicious or misconfigured devices can still degrade system performance by generating excessive traffic demand. While such devices cannot directly control radio resources, they can influence scheduler behaviour and consume a disproportionate share of Physical Resource Blocks (PRBs), reducing the reliability of other critical devices. This work presents an Open RAN xApp that enforces per-device radio resource prioritisation to preserve the stability of critical UE traffic in contested wireless environments.

[**Read the demo paper**](/publications/2026-mitigating-radio-resource-exhaustion-risks)

Some of the recent work we've published around 5G and 6G are:

- [URLLC Challenges in NTN: An Analysis of O-RAN Split-Function Architectures](https://systronlab.github.io/publications/2025-urllc-challenges-in-ntn)
- [Optimizing URLLC in Open RAN: A Deep Reinforcement Learning-Based Trade-Off Analysis](https://systronlab.github.io/publications/2025-optimizing-urllc-in-open-ran)
- [https://systronlab.github.io/publications/2025-semq-deepsense-6g](https://systronlab.github.io/publications/2025-semq-deepsense-6g)

[**Learn more about xApp-driven RAN optimisation**](/projects/xapp-driven-ran-optimisation)