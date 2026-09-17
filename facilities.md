---
layout: page
title: Lab Facilities
permalink: /facilities/
eyebrow: Where ideas meet experiments
description: Spaces and testbeds for exploring the next generation of connected systems.
wide: true
---

<nav class="page-jump-links" aria-label="Facilities sections"><a href="#locations">Our locations</a><a href="#thread">Thread edge testbed</a><a href="#5g">5G standalone testbeds</a></nav>

<section id="locations" aria-labelledby="locations-title">
  <div class="section-intro"><h2 id="locations-title">Our locations</h2><p>The SYSTRON Lab is based in the Ian Wand Building, Campus East, at the University of York. We also have a presence in the nearby Institute for Safe Autonomy (ISA) and in City College, Thessaloniki — the University of York’s Europe Campus.</p></div>
  <div class="location-grid">
    <img src="{{ '/img/uoy-cse-1.jpg' | relative_url }}" alt="University of York Computer Science building" class="location-photo" loading="lazy" {% include image-srcset.html src='/img/uoy-cse-1.jpg' sizes="(max-width: 767px) calc(100vw - 30px), 535px" %}>
    <div class="location-descriptions">
      <article><p class="eyebrow">Campus East · York</p><h3>The Ian Wand Building</h3><p>The home of the University of York’s Computer Science Department, with offices and a specialist research lab for our team.</p></article>
    </div>
  </div>
  <div class="location-grid">
    <figure class="facility-figure"><img src="{{ '/img/isa-building.jpg' | relative_url }}" alt="Institute for Safe Autonomy building at the University of York" class="location-photo" loading="lazy" width="1200" height="600" {% include image-srcset.html src='/img/isa-building.jpg' sizes="(max-width: 767px) calc(100vw - 30px), 535px" %}></figure>
    <div class="location-descriptions">
      <article><p class="eyebrow">Campus East · York</p><h3>Institute for Safe Autonomy</h3><p>A £15m purpose-built facility with experimental laboratories for robotics, advanced communications and quantum technologies, including separate networks for robotic and autonomous systems.</p><a class="section-link" href="https://www.york.ac.uk/safe-autonomy/facilities/laboratories-and-test-spaces/">Explore the test spaces <span aria-hidden="true">↗</span></a></article>
    </div>
  </div>
</section>

<section id="thread" class="testbed-section" aria-labelledby="thread-title">
  <div class="section-intro"><p class="eyebrow">Research testbeds</p><h2 id="thread-title">Thread edge testbed</h2><p>A dedicated platform for experiments with IoT radio networks and Thread-based (IEEE 802.15.4) networking.</p><a class="section-link" href="{{ '/publications/2025-evaluation-of-radio-jamming-countermeasures' | relative_url }}">Read our NDSS 2025 paper <span aria-hidden="true">&rarr;</span></a></div>
  <figure class="facility-figure"><img src="{{ '/img/posts/iot-testbed.jpg' | relative_url }}" alt="The lab’s Thread-based IoT radio network testbed" loading="lazy" {% include image-srcset.html src='/img/posts/iot-testbed.jpg' sizes="(max-width: 767px) calc(100vw - 30px), 1110px" %}><figcaption>Our experimental setup for investigating IoT radio networks.</figcaption></figure>
</section>

<section id="5g" class="testbed-section" aria-labelledby="5g-title">
  <div class="section-intro"><p class="eyebrow">Research testbeds</p><h2 id="5g-title">5G standalone networks</h2></div>
  <section class="facility-category" aria-labelledby="open-ran-title">
    <h3 id="open-ran-title">Open-RAN</h3>
    <p>A fully operational Open-RAN network supporting experiments in connectivity, xApps and robotic control.</p>
    <section class="facility-subcategory" aria-labelledby="split-8-title">
      <h4 id="split-8-title">Split 8</h4>

  <div class="testbed-specs"><div><span>gNB stack</span><strong>OCUDU</strong></div><div><span>Radio front end</span><strong>USRP X310</strong></div><div><span>Clock distribution</span><strong>OctoClock-G CDA-2990</strong></div></div>
  <div class="facility-story"><div><h5>From the network to the handset</h5></div>
    <div class="facility-gallery"><figure><img src="{{ '/img/5g-pixel.jpeg' | relative_url }}" alt="5G standalone network testbed connected to a Pixel handset" loading="lazy" {% include image-srcset.html src='/img/5g-pixel.jpeg' sizes="(max-width: 767px) calc(100vw - 30px), 1110px" %}><figcaption>The 5G SA network setup.</figcaption></figure><figure><img src="{{ '/img/pixel.jpeg' | relative_url }}" alt="Pixel handset used to validate the 5G connection" loading="lazy" {% include image-srcset.html src='/img/pixel.jpeg' sizes="(max-width: 767px) calc(100vw - 30px), 1110px" %}><figcaption>Commercial handset connectivity.</figcaption></figure></div>
  </div>
  <div class="facility-story"><div><h5>Connected robotic control</h5><p>We extended the testbed with a Quectel RMU500-EK 5G modem connected to a Jetson Nano–based mini robot. The robot is remotely operated over the 5G SA network, demonstrating real-time, network-driven robotic control.</p><p>The modular, programmable testbed enables experiments aligned with current and emerging 5G/6G use cases.</p></div>
    <div class="facility-gallery"><figure><img src="{{ '/img/5g-minirobot.jpeg' | relative_url }}" alt="5G network setup for remote operation of the mini robot" loading="lazy" {% include image-srcset.html src='/img/5g-minirobot.jpeg' sizes="(max-width: 767px) calc(100vw - 30px), 1110px" %}><figcaption>Integrating the robot with the 5G network.</figcaption></figure><figure><img src="{{ '/img/minirobot.png' | relative_url }}" alt="Jetson Nano–based mini robot" loading="lazy" {% include image-srcset.html src='/img/minirobot.png' sizes="(max-width: 767px) calc(100vw - 30px), 1110px" %}><figcaption>The connected mini robot.</figcaption></figure></div>
  </div>
    </section>
    <section class="facility-subcategory" aria-labelledby="split-7-2-title">
      <h4 id="split-7-2-title">Split 7.2</h4>
      <div class="testbed-specs"><div><span>gNB stack</span><strong>OCUDU</strong></div><div><span>Radio unit</span><strong>Benetel RAN650</strong></div><div><span>Clock distribution</span><strong>FibroLAN Falcon-RX/812/G</strong></div></div>
      <figure class="facility-figure"><img src="{{ '/img/5g-split72.jpg' | relative_url }}" alt="Open-RAN Split 7.2 testbed" loading="lazy" {% include image-srcset.html src='/img/5g-split72.jpg' sizes="(max-width: 767px) calc(100vw - 30px), 1110px" %}><figcaption>The Open-RAN Split 7.2 testbed.</figcaption></figure>
    </section>
  </section>
  <section class="facility-category" aria-labelledby="ai-ran-title">
    <h3 id="ai-ran-title">AI-RAN</h3>
    <p>Further details coming soon.</p>
  </section>
</section>
