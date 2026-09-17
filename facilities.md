---
layout: page
title: Lab Facilities
permalink: /facilities/
eyebrow: Where ideas meet experiments
description: Spaces and testbeds for exploring the next generation of connected systems.
wide: true
---
<nav class="page-jump-links" aria-label="Facilities sections"><a href="#locations">Our locations</a><a href="#thread">Thread edge testbed</a><a href="#5g">5G standalone testbed</a></nav>

<section id="locations" aria-labelledby="locations-title">
  <div class="section-intro"><h2 id="locations-title">Our locations</h2><p>The SYSTRON Lab is based in the Ian Wand Building, Campus East, at the University of York. We also have a presence in the nearby Institute for Safe Autonomy (ISA) and in City College, Thessaloniki — the University of York’s Europe Campus.</p></div>
  <div class="location-grid">
    <img src="{{ '/img/uoy-cse-1.jpg' | relative_url }}" alt="University of York Computer Science building" class="location-photo" loading="lazy">
    <div class="location-descriptions">
      <article><p class="eyebrow">Campus East · York</p><h3>The Ian Wand Building</h3><p>The home of the University of York’s Computer Science Department, with offices and a specialist research lab for our team.</p></article>
      <article><p class="eyebrow">Campus East · York</p><h3>Institute for Safe Autonomy</h3><p>A £15m purpose-built facility with experimental laboratories for robotics, advanced communications and quantum technologies, including separate networks for robotic and autonomous systems.</p><a class="section-link" href="https://www.york.ac.uk/safe-autonomy/facilities/laboratories-and-test-spaces/">Explore the test spaces <span aria-hidden="true">↗</span></a></article>
    </div>
  </div>
</section>

<section id="thread" class="testbed-section" aria-labelledby="thread-title">
  <div class="section-intro"><p class="eyebrow">Research testbeds</p><h2 id="thread-title">Thread edge testbed</h2><p>A dedicated platform for experiments with IoT radio networks and Thread-based (IEEE 802.15.4) networking.</p><a class="section-link" href="{{ '/publications/2025-evaluation-of-radio-jamming-countermeasures' | relative_url }}">Read our NDSS 2025 paper <span aria-hidden="true">&rarr;</span></a></div>
  <figure class="facility-figure"><img src="{{ '/img/posts/iot-testbed.jpg' | relative_url }}" alt="The lab’s Thread-based IoT radio network testbed" loading="lazy"><figcaption>Our experimental setup for investigating IoT radio networks.</figcaption></figure>
</section>

<section id="5g" class="testbed-section" aria-labelledby="5g-title">
  <div class="section-intro"><p class="eyebrow">Research testbeds</p><h2 id="5g-title">5G standalone network</h2><p>A fully operational 5G SA network powered by the srsRAN stack, supporting experiments in connectivity and robotic control.</p></div>
  <div class="testbed-specs"><div><span>Architecture</span><strong>Split 8 · Local gNB</strong></div><div><span>Radio front end</span><strong>USRP X310</strong></div><div><span>Clock distribution</span><strong>OctoClock-G CDA-2990</strong></div></div>
  <div class="facility-story"><div><h3>From the network to the handset</h3><p>The complete gNB stack is deployed locally. The testbed has been validated using commercial off-the-shelf user equipment, specifically a Pixel 8 Pro, achieving full internet connectivity over the 5G SA link.</p></div>
    <div class="facility-gallery"><figure><img src="{{ '/img/5g-pixel.jpeg' | relative_url }}" alt="5G standalone network testbed connected to a Pixel handset" loading="lazy"><figcaption>The 5G SA network setup.</figcaption></figure><figure><img src="{{ '/img/pixel.jpeg' | relative_url }}" alt="Pixel handset used to validate the 5G connection" loading="lazy"><figcaption>Commercial handset connectivity.</figcaption></figure></div>
  </div>
  <div class="facility-story"><div><h3>Connected robotic control</h3><p>We extended the testbed with a Quectel RMU500-EK 5G modem connected to a Jetson Nano–based mini robot. The robot is remotely operated over the 5G SA network, demonstrating real-time, network-driven robotic control.</p><p>The modular, programmable testbed enables experiments aligned with current and emerging 5G/6G use cases.</p></div>
    <div class="facility-gallery"><figure><img src="{{ '/img/5g-minirobot.jpeg' | relative_url }}" alt="5G network setup for remote operation of the mini robot" loading="lazy"><figcaption>Integrating the robot with the 5G network.</figcaption></figure><figure><img src="{{ '/img/minirobot.png' | relative_url }}" alt="Jetson Nano–based mini robot" loading="lazy"><figcaption>The connected mini robot.</figcaption></figure></div>
  </div>
</section>
