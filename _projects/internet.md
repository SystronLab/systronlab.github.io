---
layout: projects
title: "Measuring Internet Resilience"
date: 2025-12-01 12:00:00 +0000
authors:
  - Joshua Levett
  - Vassilios Vassilakis
  - Poonam Yadav
image: "/img/projects/internet-topology-mapping.png"
desc: Exploring the resilience of the Internet topology in a geopolitical context, including network sovereignty and the real-world network impact of regulation and censorship.
tags: [Internet, Security, Networks, Routing]
---

Heightened interest from nation states to perform content censorship make it evermore critical to identify the impact of censorship efforts on the Internet. We undertake a study of Internet architecture, capturing the state of Internet topology with greater completeness than existing state-of-the-art.

There are a small number of nation states that do not follow this trend, for which we provide an analysis and explanation, demonstrating a relationship between geographical factors in addition to geopolitics. In summary, our work provides a deeper understanding of how these censorship measures impact the overall functioning and dynamics of the Internet.

## Objectives

- Develop a tool to collect routing table data and traceroute measurements, constructing a graph-based representation of Internet topology.
- Provide a mechanism for retrieving more complex network relationship characteristics, such as shared corporate ownership.
- Compare Internet topology measurements from different periods in time to identify emerging trends in Internet routing.
- Implement some of the collected data in emulation, replicating specific identified trends and measuring alternative scenarios.

> ## Research Spotlight: iNetVisor
>
> iNetVisor, a tool for exposing real-world connectivity between networks, can interactively explore the Internet network connectivity graph, both domestically and internationally. We can use our enhanced view of the world's Internet topology to assess the vulnerability of countries and regions to geopolitical threats, analyse the consequences of provider consolidation, and identify early signs of risks to domestic resilience.
>
> ![iNetVisor: UK Domestic Networking](/img/projects/inetvisor.png)
>
> Acquiring data from a wide range of sources, iNetVisor also exposes information about where networks are peering and theoretical link speeds, meaning we can also analyse the importance of different Internet Exchange Points (IXPs).
> You can read more about this [in our research preprint](https://systronlab.github.io/publications/2024-unveiling-internet-censorship).


## Publications

- [(Paper) TERIS: A Tool for Emulated Routing at Internet Scale](https://systronlab.github.io/publications/2025-teris-a-tool-for-emulated-routing-at-internet-scale)
- [(Short Paper) WHOactuallyIS? Finding the Companies Behind the Networks](https://systronlab.github.io/publications/2025-who-actually-is)
- [(Short Paper) Building Block for the Internet Digital Twin: Scalable and Automated Internetwork Emulator](https://systronlab.github.io/publications/2025-building-block-for-the-internet-digital-twin)
- [(Preprint) Unveiling Internet Censorship: Analysing the Impact of Nation States' Content Control Efforts on Internet Architecture and Routing Patterns](https://systronlab.github.io/publications/2024-unveiling-internet-censorship)

## Blog Posts

- [A Geopolitical Internet: What do geopolitical characteristics have in common with the Internet?](https://levett.org.uk/2024/a-geopolitical-internet/)

## Codebase

- [LevettJ/internet-topology-mapping (GitHub)](https://github.com/LevettJ/internet-topology-mapping): initial version using BGP data without Atlas traceroute probes.
- [LevettJ/who-actually-is (GitHub)](https://github.com/LevettJ/who-actually-is): infer the 'true' owner of Internet resources by assessing linked information like websites, IP addresses and ASNs.
- [SystronLab/TERIS (GitHub)](https://github.com/SystronLab/TERIS): generate Docker and Kubernetes emulations of the Internet topology based on real-world routing data.