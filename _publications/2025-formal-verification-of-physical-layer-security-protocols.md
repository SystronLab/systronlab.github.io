---
layout: publication
title: "Formal Verification of Physical Layer Security Protocols for Next-Generation Communication Networks"
date: 2025-11-11 12:00:00 +0000
authors:
- Kangfeng Ye
- Roberto Metere
- Jim Woodcock
- Poonam Yadav
venue: "Lecture Notes in Computer Science"
link: 'https://link.springer.com/chapter/10.1007/978-981-95-4213-0_1'
---

Formal verification is crucial for ensuring the robustness of security protocols against adversarial attacks. The Needham-Schroeder protocol, a foundational authentication mechanism, has been extensively studied, including its integration with Physical Layer Security (PLS) techniques such as watermarking and jamming. Recent research has used ProVerif to verify these mechanisms in terms of secrecy. However, the ProVerif-based approach limits the ability to improve understanding of security beyond verification results. To overcome these limitations, we re-model the same protocol using an Isabelle formalism that generates sound animation, enabling interactive and automated formal verification of security protocols. Our modelling and verification framework is generic and highly configurable, supporting both cryptography and PLS. For the same protocol, we have conducted a comprehensive analysis (secrecy and authenticity in four different eavesdropper locations under both passive and active attacks) using our new web interface. Our findings not only successfully reproduce and reinforce previous results on secrecy but also reveal an uncommon but expected outcome: authenticity is preserved across all examined scenarios, even in cases where secrecy is compromised. We have proposed a PLS-based Diffie-Hellman protocol that integrates watermarking and jamming, and our analysis shows that it is secure for deriving a session key with required authentication. These highlight the advantages of our novel approach, demonstrating its robustness in formally verifying security properties beyond conventional methods.