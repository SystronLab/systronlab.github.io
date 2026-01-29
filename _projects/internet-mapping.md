---
layout: projects
title: "Internet Topology Mapping"
date: 2024-01-01 12:00:00 +0000
authors:
  - Joshua Levett
  - Vassilios Vassilakis
  - Poonam Yadav
image: "/img/projects/internet-topology-mapping.png"
desc: Exploring Internet architecture to improve Internet routing protocols.
tags: [Internet, Security, Networks, Routing]
---

Heightened interest from nation states to perform content censorship make it evermore critical to identify the impact of censorship efforts on the Internet. We undertake a study of Internet architecture, capturing the state of Internet topology with greater completeness than existing state-of-the-art.

There are a small number of nation states that do not follow this trend, for which we provide an analysis and explanation, demonstrating a relationship between geographical factors in addition to geopolitics. In summary, our work provides a deeper understanding of how these censorship measures impact the overall functioning and dynamics of the Internet.

## Objectives

- Develop a tool to collect routing table data and traceroute measurements, constructing a graph-based representation of Internet topology.
- Compare Internet topology measurements from different periods in time to identify emerging trends in Internet routing.
- Implement some of the collected data in emulation, replicating specific identified trends and measuring alternative scenarios.

## Publications

- [(Preprint) Unveiling Internet Censorship: Analysing the Impact of Nation States' Content Control Efforts on Internet Architecture and Routing Patterns](https://systronlab.github.io/publications/2024-unveiling-internet-censorship)
- [(Abstract) From Internet to Emulator: A Virtual Testbed for Internet Routing Protocols](https://systronlab.github.io/publications/2024-from-internet-to-emulator)

## Blog Posts

- [A Geopolitical Internet: What do geopolitical characteristics have in common with the Internet?](https://levett.org.uk/2024/06/07/a-geopolitical-internet/)

## Codebase

- [LevettJ/internet-topology-mapping (GitHub)](https://github.com/LevettJ/internet-topology-mapping): initial version using BGP data without Atlas traceroute probes.
