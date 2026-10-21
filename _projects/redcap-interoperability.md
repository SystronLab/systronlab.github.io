---
layout: projects
title: "Building 5G RedCap Support in Collaboration with OCUDU"
date: 2026-09-23 19:30:15 +0000
authors:
  - Mohit Bidikar
  - Poonam Yadav
image: "/img/projects/redcap.jpg"
image_rotate: right
desc: Building 5G RedCap support in OCUDU through open-source code contributions, in close collaboration with the OCUDU team.
tags: [5G, RedCap, OCUDU]
---

## Project Overview

We are building 5G RedCap support in OCUDU through open-source code contributions, working closely with the OCUDU team on implementation, review and real-device validation.

Follow the collaboration and technical discussion in [OCUDU work item #812: Initial RedCap support and EM8695 interoperability testing](https://gitlab.com/ocudu/ocudu/-/work_items/812).

## Implemented So Far

Three contributions have been merged into OCUDU:

- **RedCap message decoding:** recognising RedCap initial-access messages at the MAC layer, with validation and regression tests.
- **Device identity propagation:** carrying the RedCap indication through the distributed unit (DU) and central unit (CU).
- **Broadcast and radio configuration:** an opt-in Release-17 RedCap profile with access controls and initial bandwidth parts up to 20 MHz.

We have also implemented capability-aware bearer limits and controlled RedCap access, which remains under review. This includes appropriate PDCP/RLC sequence-number settings, bearer-count limits and handling of capabilities during mobility procedures.

## Next Steps

Following the [discussion with OCUDU maintainers](https://gitlab.com/ocudu/ocudu/-/work_items/812#note_3978466701), we plan to:

- Add the **NGAP RedCap indication**, allowing the core network to identify RedCap devices.
- Extend **F1AP Served Cell Information** with RedCap broadcast information.
- Complete review of the access implementation and expand regression and mobility testing, including automatic key refresh.

Longer-term directions include bandwidth-part handling for RedCap in wider-bandwidth cells. We are also interested in exploring AI-RAN contributions involving ML-based RAN optimisation and GPU acceleration as the RedCap work progresses.
