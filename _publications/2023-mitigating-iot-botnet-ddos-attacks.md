---
layout: publication
title: "Mitigating IoT Botnet DDos Attacks through MUD and eBPF based Traffic Filtering"
venue: "IEEE/ACM ICDCN 2023"
date: 2023-05-03 12:09:27
file: "/files/publications/2023-mitigating-iot-botnet-ddos-attacks.pdf"
link: "https://dl.acm.org/doi/10.1145/3631461.3631549"
authors:
- Angelo Feraudo
- Diana Andreea Popescu
- Poonam Yadav
- Richard Mortier
- Paolo Bellavista
---

As the prevalence of Internet-of-Things (IoT) devices becomes more and more dominant, so too do the associated management and security challenges. One such challenge is the exploitation of vulnerable devices for recruitment into botnets, which can be used to carry out Distributed Denial-of-Service (DDoS) attacks. The recent Manufacturer Usage Description (MUD) standard has been proposed as a way to mitigate this problem, by allowing manufacturers to define communication patterns that are permitted for their IoT devices, with enforcement at the gateway home router. In this paper, we present a novel integrated system implementation that uses a MUD manager (osMUD) to parse an extended set of MUD rules, which also allow for rate-limiting of traffic and for setting appropriate thresholds. Additionally, we present two new backends for MUD rule enforcement, one based on eBPF and the other based on the Linux standard iptables. The reported evaluation results show that these techniques are feasible and effective in protecting against attacks and in terms of their impact on legitimate traffic and on the home gateway.