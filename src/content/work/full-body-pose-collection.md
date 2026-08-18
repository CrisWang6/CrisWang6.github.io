---
title: Head-Wrist Egocentric Full-Body Pose Recovery System
summary: An end-to-end platform for synchronized wearable capture, multi-view ground-truth reconstruction, and egocentric pose learning.
role: Summer Researcher, HKU MMLab
date: 2026-03-01
tags: [DepthAI/OAK, Kalibr, RTMPose/RTMW, Fisheye Camera, Multi-view Triangulation, PyTorch, Isaac Sim, SolidWorks, IMU AHRS, H.265]
repo: https://github.com/CrisWang6/Head-Wrist-Full-Body-Pose-Recovery
featured: true
draft: false
---

## Overview

I built an end-to-end research platform for egocentric full-body pose recovery, spanning wearable hardware, synchronized multi-camera capture, external 3D human reconstruction, fisheye projection and optimization, and model training based on EgoRear and EgoPoseFormer. I also engineered the codebase and organized the project for open-source release on GitHub.

## End-to-end pipeline

1. Design and calibrate the headband and wristband capture hardware.
2. Record synchronized six- and nine-camera fisheye video together with head and wrist IMU streams.
3. Recover high-quality external 2D and 3D human pose ground truth from multi-view observations.
4. Transform and project the reconstructed pose into the head-mounted fisheye camera coordinate system.
5. Process aligned real-world sequences and train egocentric pose models in the EgoRear and EgoPoseFormer frameworks.

## My contribution

- Designed the mechanical wearable system and assembled the camera, trigger, tag, rigid-body, and IMU electronics.
- Iterated the headband and wristband through six hardware generations, making the camera-tag-rigid-body geometry repeatable and calibratable.
- Built the synchronized video and inertial capture stack, including external triggering, timestamp alignment, H.265 recording, and Kalibr intrinsic and extrinsic calibration with the omni fisheye model.
- Developed the multi-view ground-truth reconstruction pipeline and the projection from the external reference frame to each head-mounted camera.
- Collected, processed, and validated multiple real-world batches for model training and evaluation.
- Refactored the research code into a reproducible project and prepared the public GitHub repository.

## Multi-camera capture and calibration

The acquisition system combines DepthAI/OAK cameras with head and wrist IMUs. An external trigger starts all streams from a shared event, while per-frame timestamps support fine-grained temporal alignment across six- and nine-camera configurations. Camera intrinsics and inter-camera extrinsics are calibrated in Kalibr using an omni-directional fisheye model.

The wearable hardware was designed around a stable geometric chain between each camera, fiducial tag, and motion-capture rigid body. This makes calibration repeatable across recording sessions and allows the complete capture rig to be reconstructed in a common coordinate system.

## 3D pose ground truth

External stereo and multi-view cameras run RTMPose/RTMW for 2D keypoint detection. Each keypoint is reconstructed through fisheye multi-ray triangulation, then transformed through the optical motion-capture rigid-body chain. The resulting 3D skeleton is projected into the head-mounted fisheye cameras to produce aligned 2D and 3D pose ground truth for egocentric learning.

This process connects external observations with the moving wearable coordinate frame, providing cleaner supervision than relying on a single reconstruction or projection stage.

## Real-world data and model training

Across multiple capture batches, I collected approximately two hours of synchronized and aligned real-world data. I built the batch-processing workflow used to generate training-ready sequences, then ran multiple rounds of staged training and evaluation within the EgoRear framework while adapting components from EgoPoseFormer.

## Simulation and supporting tools

In parallel, I developed a simulation and validation environment using Isaac Sim and BlenderProc. The tooling compares Mahony-filtered head and wrist IMU orientation against optical motion capture, provides skeleton playback for debugging, and generates randomized synthetic motion from AMASS sequences and SMPL-X bodies.

This environment supported geometry studies before hardware experiments and supplied large-scale pretraining data and simulation validation tools to a parallel project team.

## Technology

DepthAI/OAK, Kalibr, RTMPose/RTMW, omni-directional fisheye cameras, multi-view triangulation, optical motion-capture rigid bodies, PyTorch, EgoRear, EgoPoseFormer, Isaac Sim, BlenderProc, SolidWorks/STEP, ArUco/AprilTag, IMU AHRS with Mahony filtering, AMASS, SMPL-X, and synchronized H.265 video pipelines.
