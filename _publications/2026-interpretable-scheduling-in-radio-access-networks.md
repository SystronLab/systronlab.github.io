---
layout: publication
title: "Interpretable Scheduling in Radio Access Networks via Automata Learning"
date: 2026-01-01 00:00:00 +0000
date_format: "%Y"
authors:
  - Amir Sonee
  - Kavan Fatehi
  - Poonam Yadav
  - Radu Calinescu
  - Hamed Ahmadi
  - Alessandra Russo
venue: "Proceedings of the 2026 IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC 2026). IEEE"
---

This work proposes an automata-learning approach for interpretable radio-resource scheduling in Radio Access Networks (RANs). Rather than relying solely on black-box sequential models, the approach learns a compact automaton that represents how subsets of user service requests can be scheduled over available physical resource blocks (PRBs) while progressing towards successful request completion. The automaton is learned from successful, failed, and incomplete scheduling traces using inductive logic programming, with deterministic transitions expressed through logical conditions over service requests. Experiments in a 5G RAN setting show that the learned automata achieve accuracy comparable to, and in some cases better than, RNN, LSTM and Transformer baselines, while providing explicit temporal interpretations of scheduling progress. The resulting structure also provides a foundation for future interpretable reinforcement-learning-based RAN scheduling.
