---
title: Humanoid Teleoperation and Motion Retargeting
summary: A unified real-time pipeline that converts Xsens, PICO, and RGB-camera inputs into humanoid motion trajectories.
role: Motion Control Algorithm Engineering Intern, UBTECH
date: 2026-01-01
tags: [Humanoid Robotics, Teleoperation, GMR, TWIST2, MuJoCo]
heroVideo: /projects/humanoid-teleoperation/motion-retargeting-demo.mp4
heroAlt: Humanoid motion retargeting demonstration from captured human motion to a simulated robot
links:
  - label: TWIST2 project
    url: https://github.com/YanjieZe/TWIST2
  - label: GMR project
    url: https://github.com/YanjieZe/GMR
featured: true
draft: false
---

## Overview

This internship project connected heterogeneous human-motion inputs to a shared humanoid trajectory interface for imitation-learning data generation and real-time teleoperation.

## My contribution

- Extended the open-source General Motion Retargeting pipeline to generate large-scale robot motion trajectories for imitation learning.
- Built a unified real-time teleoperation framework on top of TWIST2.
- Integrated three input paths: Xsens inertial motion capture, PICO VR devices, and RGB-camera video streams.
- Assisted with simulation-to-real validation on UBTECH's Walker S2 humanoid robot.

## System structure

Each input device has its own coordinate conventions, skeletal representation, and update rate. Separate receiver modules normalize the streams into a shared human-motion representation. Retargeting modules then map that representation to robot joint trajectories and publish consistent observations for the downstream motion controller.

The implementation supports both live streaming and replay from recorded sessions. This lets the same pipeline drive online teleoperation experiments and produce offline trajectories for imitation-learning datasets, while keeping capture, retargeting, visualization, and robot deployment as separable modules.

## Public scope

This page publishes the project summary and a motion-retargeting demo. Raw motion-capture datasets, deployment source, robot configuration details, and internal experiment material are intentionally not included in the website repository.
