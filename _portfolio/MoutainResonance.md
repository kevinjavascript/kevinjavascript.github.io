---
layout: distill
title: Mountain Resonance
description: "An Exploration to Human-Computer-Interaction Music"
img: 
importance: 1
category: Music Technology
date: 2026-9-3
youtube_id: FUnQUOHNB10
tags: [music tech, sensor based]
---
## Performance Video
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


## Introduction
This is a **sensor based** experimental music piece. 
Sounds originate from Logic Pro using Electone keyboard as MIDI in and are lively processed by Max/MSP through motion. The motion is captured by self-made hardware: ADXL345 accelerometer with Arduino Nano ESP 32 Board.
Work structure: acoustic instrument with ambient sound effects, sound processing, and experimental timbre treatment. 
All sounds and controls are improvised.
The aim of this work is to connect acoustic instrument into experimental genre.



## Hardware Development
A small and light hardware capable of recording motion is needed. Accelerometer is chosen to record rotation and large movements of arms and hands. In order not to influence performing, 4 accelerometers are attached to wrists and elbows. The Arduino Nano Esp 32 board is chosen due to its capacity of transforming data through WIFI and it’s compactness. 

Components include: PCB, jumper wire, pin, header pin, Arduino Nano ESP-32, ADXL-345
Tools include: Soldering iron, solder wire, desoldering braid, multimeter, bench vise, super glue, diagonal pliers, wire cutter.

- Step 1: Preparing pin
ADXL: GND, VCC, SDA, SCL for data transmission, while the middle two pin for support
Arduino Nano ESP-32: 5v, A4, A5, GND for data transmission, while the rest for support
- Step 2: Solder pin
Solder the pin to board and sensor according to the figure above.
- Step 3: Solder sensor and board to PCB
- Step 4: Connect sensor and board using jumper wire
- Step 5: Use another PCB and pin headers to protect wire connection
- Step 6: Connect the sensor and board to Wristband, with battery

I prepared 4 of these: two for wrist, two for elbow.
Then, I used program to read and send OSC data for Max/MSP process.


## Software Workflow
Electone has 3 keyboards: Upper, Lower, and Pedal. These 3 keyboards can send MIDI signal with different channels. So I prepared 3 Kontakt instruments, opened their input monitor, mapped 3 keyboards to each instruments. Now I can perform Electone, and the sound is generated using each keyboard’s MIDI signal.

Next, Blackhole is used to send these sounds to Max/MSP. Upper, Lower, and Pedal keyboards have 6 audio channels (3 stereo channel). 

The Accelerometer data is sent through WIFI, so I used udpreceive in Max to receive sensor data for live control. Now the sounds can be processed in Max/MSP.

## Summary
In this project, my music gradually transformed from tonal to atonal, from ambient to experimental. This project is thus an exploration of the experimental, atonal, and sound design fields in music. The hardware design incorporates little engineering techniques and Computer Science skills since the data transmission needs C++ programming. Overall, this project is an interdisciplinary exploration of contemporary music and sound.