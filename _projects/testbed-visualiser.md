---
layout: projects
title: "IoT Device Testbed Dashboard: Real-Time Monitoring and Visualisation"
date: 2026-10-27 19:30:15 +0000
authors:
  - Dema Williams
  - Anthony Moulds
image: "/img/projects/testbed-visualiser/DashboardCoverPic.jpg"
desc: An interactive, near real-time monitoring and visualisation dashboard for the SYSTRON Lab's physical IoT testbed."
tags: [Thread, Testbed, Dashboard]
---

## Project Overview

To support experimental research on low-power mesh networking and distributed edge computing, an interactive management dashboard was developed for the physical IoT testbed in the SYSTRON Lab.

## Key Features

- **Live Topology and Hardware Discovery**: Aggregates near real-time connection status across the host Intel NUC and distributed Raspberry Pi edge nodes.
- **Embedded Interactive Terminals**: Integrates ttyd and picocom console sessions directly inside web iframes, allowing researchers to interact directly with embedded devices.
- **Synchronised Command Broadcasting**: Features a multi-node command dispatch engine with persistent device grouping. Researchers can target specific network roles (e.g., all Thread Children, Routers, or specific subnets) and execute single or multi-line commands concurrently across all selected nodes.

## UI in Detail

Below is a screenshot of the full UI of the dashboard:

![Image of full UI, showcasing the full set of visual features](/img/projects/testbed-visualiser/fullUI.png)

In it, we have a terminal connected to the rpi5-1. Next door is a terminal connected to dev/ttyACM0, which in other words is the usb device connected to the rPi5-2. 

The larger terminal near the bottom is the NUC's terminal embedded into the dashboard. 

The dashboard is fully dynamic, where devices will be shown or hidden depending on if they are plugged in or not. The dashboard updates itself every ~0.5 seconds.

In what we call the NUC-Node viewport, we have a page to view the info about USB devices plugged into the NUC:

![Image of the NUC's USB devices page](/img/projects/testbed-visualiser/USBdevices.png)

A page to broadcast commands to a number of devices at the same time:

![Image of the NUC's broadcast command page](/img/projects/testbed-visualiser/Broadcast.png)

This 'Broadcast Commands' page also allows for the user to save commands and groups of devices, that is stored persistently in .json files so the dashboard can be rebooted while still saving the commands.

The next page is the Thread Topology Monitor application, embedded as a VNC session (so it can be full screened too):

![Image of the NUC's TTM VNC session](/img/projects/testbed-visualiser/TTM.png)

And finally is the wireshark page (also as a VNC page):

![Image of the NUC's Wireshark VNC session](/img/projects/testbed-visualiser/Wireshark.png)

The dashboard relies on custom SVG images to showcase the USB devices. Below are some examples of what devices are supported by the dashboard:

**Nordic Semiconductor nRF52840 Dongle (Runtime & Bootloader States):**

<img src="/img/projects/testbed-visualiser/1915-0000.svg" alt="Flashed Nordic Semiconductor nRF52840 Dongle" style="max-height: 90px; margin-right: 16px;" />
<img src="/img/projects/testbed-visualiser/1915-521f.svg" alt="Unflashed Nordic Semiconductor nRF52840 Dongle" style="max-height: 90px;" />

**Nordic Semiconductor nRF52840 DK Board:**

<img src="/img/projects/testbed-visualiser/1366-1051.svg" alt="Nordic Semiconductor nRF52840 DK Board" style="max-height: 120px;" />

**Semtech EM8695 RedCap Device:**

<img src="/img/projects/testbed-visualiser/1199-90e5.svg" alt="Semtech EM8695 RedCap Device" style="max-height: 90px;" />

## Research Impact

By eliminating the overhead of manual UART terminal management and multi-window SSH sessions, the dashboard streamlines experiment setup for the testbed. It serves as an instant visual debugging environment, enabling researchers to immediately detect node dropouts, verify link states, and monitor network reconfigurations during active experiments related to Thread.