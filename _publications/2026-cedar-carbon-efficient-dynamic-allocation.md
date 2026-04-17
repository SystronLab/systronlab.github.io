---
layout: publication
title: "CEDAR: Carbon Efficient Dynamic Allocation and Routing for Agentic LLM Inference"
date: 2026-04-17 01:00:00 +0000
authors:
  - Amit More
  - Tarique Anwar (RMIT University, Melbourne, Australia)
  - Poonam Yadav
venue: "Systems and Methods for Sustainable Large-Scale AI (GreenSys '26), April 27–30, 2026, Edinburgh, Scotland UK. ACM, New York, NY, USA, 6 pages."
link: "https://doi.org/10.1145/3802973.3804457"
---

### Abstract

LLM inference now dominates operational AI compute, yet production serving stacks typically optimise for performance alone, leaving cost and carbon unmanaged. We present CEDAR, a queue-level multi-objective control framework for agentic LLM inference that jointly optimises tail latency, cloud cost, and marginal carbon emissions. CEDAR observes backlog depth, waiting time percentiles, and service level objective (SLO) slack to route mixed-criticality requests across heterogeneous, geo-distributed fleets. In trace-driven evaluation, CEDAR reduces cost by up to 26% and carbon by up to 27% relative to a _Performance-Only_ baseline, while maintaining competitive p95 latency (0.88 s) and low SLO violation (4.3%). These results indicate queue-level control as a practical path to sustainable agentic inference without unacceptable QoS degradation.

### The Problem We're Solving

Global data centre electricity consumption reached 415 TWh in 2024, growing at 12% per year, and is projected to reach 945 TWh by 2030, nearly 3% of global electricity consumption. A single LLM query consumes 10× more electricity than a traditional web search. Yet despite this scale, no production LLM serving system jointly considers monetary cost, carbon intensity, and request priority in its routing decisions.

The challenge is amplified by the rise of **agentic AI workloads** systems like GitHub Copilot, Cursor, and Devin that autonomously generate, refactor, and debug production code. A single agentic coding task generates 10+ sequential LLM calls across mixed-criticality stages: some steps require sub-second interactive response, while others (code analysis, batch test generation, offline document processing) can tolerate delays of seconds to minutes. This creates substantial temporal slack that current systems fail to exploit.

**Keywords:** LLM inference · carbon-aware scheduling · multi-objective optimisation · agentic AI · queue management · sustainable computing · energy-efficient systems · workload scheduling.
