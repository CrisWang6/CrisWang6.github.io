---
title: Humanoid Teleoperation and Motion Retargeting
summary: A modular pipeline unifying PICO, Xsens, and camera motion inputs for humanoid retargeting, replay, and robot deployment.
role: Motion Control Algorithm Engineering Intern, UBTECH
date: 2026-01-01
tags: [Humanoid Robotics, Teleoperation, GMR, Redis, ROS 2]
heroVideo: /projects/humanoid-teleoperation/motion-retargeting-demo.mp4
heroAlt: Humanoid motion retargeting demonstration from captured human motion to a simulated robot
repo: https://github.com/CrisWang6/MULTITELEOP
links:
  - label: TWIST2 project
    url: https://github.com/YanjieZe/TWIST2
  - label: GMR project
    url: https://github.com/YanjieZe/GMR
featured: true
draft: false
---

## Overview

MULTITELEOP is a modular teleoperation system that connects heterogeneous human-motion devices to one humanoid trajectory interface. I built the integration around three acquisition paths: PICO VR tracking, Xsens MVN inertial motion capture, and an experimental RGB-camera path based on PromptHMR.

The same downstream pipeline handles live inputs and recorded-session replay. This made it possible to debug device adapters without a human operator, compare retargeting changes on repeatable motion, and generate robot trajectories for imitation-learning experiments.

## My contribution

- Extended the open-source General Motion Retargeting pipeline to generate large-scale robot motion trajectories for imitation learning.
- Built a unified receiver, Redis transport, retargeting, replay, and ROS 2 publishing framework on top of TWIST2.
- Integrated PICO and Xsens as real-time inputs, including timestamp-aware JSONL recording and offline replay.
- Added Walker S2 joint mapping, optional ground-height correction, and shoulder-yaw offsets for robot-specific post-processing.
- Prototyped an RGB/OAK camera input that converts PromptHMR SMPL-X predictions into the same retargeting interface.
- Supported simulation-to-real validation on UBTECH's Walker S2 humanoid robot.

## Pipeline

<div class="teleop-flow" aria-label="MULTITELEOP processing pipeline">
  <div class="teleop-flow__stage">
    <span>01 / Capture</span>
    <strong>PICO, Xsens, Camera</strong>
    <small>Live devices or recorded replay</small>
  </div>
  <div class="teleop-flow__arrow" aria-hidden="true">→</div>
  <div class="teleop-flow__stage">
    <span>02 / Normalize</span>
    <strong>Unified Human Pose</strong>
    <small>Joint positions and quaternions in Redis</small>
  </div>
  <div class="teleop-flow__arrow" aria-hidden="true">→</div>
  <div class="teleop-flow__stage">
    <span>03 / Retarget</span>
    <strong>GMR + Post-process</strong>
    <small>Robot mapping, offsets, and smoothing</small>
  </div>
  <div class="teleop-flow__arrow" aria-hidden="true">→</div>
  <div class="teleop-flow__stage">
    <span>04 / Execute</span>
    <strong>ROS 2 / Simulation / Robot</strong>
    <small>Walker S2, G1, and dataset recording</small>
  </div>
</div>

## System structure

### Multi-source acquisition

Each device has different coordinates, skeleton definitions, update rates, and transport protocols. Source-specific receivers convert PICO tracking frames, Xsens UDP datagrams, or PromptHMR SMPL-X output into a shared representation of named joints with position and quaternion data.

### Shared pose bus

Redis separates acquisition from retargeting. Device receivers publish source-specific keys, while translators consume them independently. Offline senders replay recorded JSONL with original timing or a controlled playback rate, so the same processing path can be tested without reconnecting hardware.

### Robot-space retargeting

GMR maps the normalized human pose to the selected humanoid model. Post-processing applies optional ground alignment, Walker S2 shoulder corrections, hand/controller states, and temporal smoothing before publishing a consistent robot mimic observation.

### Simulation and deployment

A ROS 2 bridge converts the Redis output into the joint-state layout expected by downstream sim-to-sim or sim-to-real controllers. Recording utilities preserve processed trajectories and episode data for imitation-learning workflows. Physical-robot tests follow simulation checks and conservative safety limits.

## Implementation status

| Input path | Live stream | Offline replay | Status |
| --- | --- | --- | --- |
| PICO 4 Ultra | XRoboToolkit | JSONL | Integrated and used in teleoperation experiments |
| Xsens MVN | UDP, 9763 | JSONL | Integrated and used in teleoperation experiments |
| RGB / OAK camera | PromptHMR | Video | Experimental; not yet validated end to end |

## Engineering decisions

- **One interface, multiple sensors.** Normalization keeps device logic out of robot-specific translators.
- **Replay as a first-class input.** Timestamp-aware playback turns hardware sessions into repeatable regression tests.
- **Robot-specific corrections stay optional.** Walker S2 offsets are explicit flags rather than hidden assumptions in the common pipeline.
- **Experimental paths are isolated.** Camera inference can evolve independently without destabilizing the PICO and Xsens workflows.

## Open-source scope

The public repository includes the receiver, translator, replay, ROS 2 bridge, deployment utilities, architecture documentation, and short rendered demonstrations. Raw motion-capture sessions, model weights, vendor SDKs, SMPL-X assets, and internal deployment notes are excluded. The project builds on TWIST2 and GMR, with upstream authorship and licensing retained in the repository.
