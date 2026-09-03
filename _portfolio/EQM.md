---
layout: distill
title: DIY Environment Quality Monitor
description: "An ECE project using perfboard as final product"
img: 
importance: 2
category: ECE
date: 2026-9-3
youtube_id: V0r1eCcYkjg
tags: [ECE]
---

## Why DIY EQM?
One issue that has long concerned me is that spending extended periods in a closed room often leads to drowsiness, and by the time I become aware of this condition, the indoor air is already stale.
Hence, I designed and built an Environmental Quality Monitor (EQM) to address this problem.

## Project Details
The EQM is a microcontroller-based system designed to measure temperature, humidity, atmospheric pressure, and carbon dioxide (CO₂) concentration, as well as to provide warnings and alerts when environmental conditions become uncomfortable, or even potentially harmful, to residents.

A TFT display module was used to present sensor readings as well as warning and alert messages, in combination with green, yellow, and red LEDs to provide a clearer visual feedback.

Based on several days of experimentation, I observed that when the carbon dioxide concentration exceeds 2000 ppm, I begin to feel sleepy. Therefore, the warning threshold for carbon dioxide concentration was set at 2000 ppm, at which the yellow LED is activated and a warning message recommending ventilation is displayed.

Additional environmental warnings were also configured, including alerts for high temperature and high humidity.

Now, I can ventilate the room before feeling sleepy!

## Project Video

{% if page.youtube_id %}
<div class="video-container" style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; margin: 2rem 0;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 10px;"
    src="https://www.youtube.com/embed/{{ page.youtube_id }}?rel=0&showinfo=0&autoplay=0"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>
{% endif %}