---
title: Self-Calibration for Resistive Insole Pressure Sensors
summary: An optimization-based offline method that reduces vertical ground-reaction-force error in wearable pressure sensing.
role: Undergraduate Researcher, HAR Lab; Co-first Author
date: 2025-06-01
tags: [Wearable Sensing, Optimization, Biomechanics, Python, MATLAB]
hero: /projects/insole-calibration/calibration-test.png
heroAlt: Insole calibration experiment on a force-measuring treadmill and force curves before and after calibration
heroSize: content
links:
  - label: RCAR 2025 paper (PDF)
    url: /projects/insole-calibration/rcar-2025-paper.pdf
  - label: IEEE record
    url: https://doi.org/10.1109/RCAR65431.2025.11139699
featured: true
draft: false
---

## Research question

Resistive pressure sensors are lightweight and practical for wearable insoles, but signal drift makes force estimates unreliable over time. This project asked whether the sensor system could recalibrate itself from a short offline procedure instead of requiring repeated laboratory calibration.

## My contribution

As an undergraduate researcher and co-first author, I worked on building the wearable sensing system, developing the optimization-based calibration method, and evaluating calibrated vertical ground reaction force against treadmill reference measurements.

## Method

The insole contains 18 resistive sensing regions. Each recorded stance phase is normalized to 100 time steps, then a nonlinear time-varying coefficient matrix maps the 18 sensor readings to vertical ground reaction force. The coefficients are optimized offline with RMSE as the loss function, using gait-phase constraints to make the calibration process lightweight and repeatable.

<figure class="project-media project-media--wide project-media--diagram">
  <img src="/projects/insole-calibration/system-pipeline.png" alt="Wearable insole sensing, reference-force acquisition, dataset processing, and model calibration pipeline" />
  <figcaption>System pipeline for wearable sensing, reference acquisition, and offline calibration.</figcaption>
</figure>

<figure class="project-media project-media--wide">
  <img src="/projects/insole-calibration/sensor-characteristics.png" alt="Physical behavior of the resistive insole sensors across the stance phase" />
  <figcaption>Sensor behavior and gait-phase constraints used by the calibration method.</figcaption>
</figure>

## Results

Three healthy participants completed the validation protocol at several treadmill walking speeds. After calibration, stance-phase vertical ground reaction force RMSE was reduced to 6.6% (+/- 3.3%) of body weight. This was 85.2% lower than the average error before calibration and about 75.3% lower than a scaling-and-translation baseline.

## Publication

The work was published as "An Off-line Self-calibration Method for Resistive Insole Pressure Sensors" at the 2025 IEEE International Conference on Real-time Computing and Robotics (RCAR), pages 539-544.
