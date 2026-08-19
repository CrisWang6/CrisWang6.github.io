---
title: Head-Wrist Egocentric Full-Body Pose Recovery System
summary: An end-to-end platform for synchronized wearable capture, multi-view ground-truth reconstruction, and egocentric pose learning.
role: Summer Researcher, HKU MMLab
date: 2026-03-01
tags: [Kalibr, RTMPose, Fisheye Camera, Multi-view Triangulation, PyTorch, SolidWorks]
repo: https://github.com/CrisWang6/Head-Wrist-Full-Body-Pose-Recovery
featured: true
draft: false
---

## Overview

I built an end-to-end research platform for egocentric full-body pose recovery, spanning wearable hardware, synchronized multi-camera capture, external 3D human reconstruction, fisheye projection and optimization, and model training based on EgoRear and EgoPoseFormer.

## End-to-end pipeline

1. Design and calibrate the headband and wristband capture hardware.
2. Record synchronized six- and nine-camera fisheye video together with head and wrist IMU streams.
3. Recover high-quality external 2D and 3D human pose as ground truth from multi-view observations.
4. Transform and project the reconstructed pose into the head-mounted fisheye camera coordinate system.
5. Process aligned real-world sequences and train egocentric pose models in the EgoRear and EgoPoseFormer frameworks.

## Mechanical design

I iterated the headband and wristband through hardware generations. The mechanical interfaces constrain each camera, fiducial tag, and motion-capture rigid body in a stable geometric chain, making the wearable setup repeatable across calibration and recording sessions.

<figure class="project-media project-media--compact">
  <img src="/projects/full-body-pose/wristband-hardware.jpg" alt="Wearable wristband prototype with multiple fiducial markers and an inward-facing camera" />
  <figcaption>Wristband prototype with camera, electronics, and calibration tags.</figcaption>
</figure>

## My contribution

- Designed the mechanical wearable system and assembled the camera, trigger, tag, rigid-body, and IMU electronics.
- Iterated the headband and wristband through six hardware generations, making the camera-tag-rigid-body geometry repeatable and calibratable.
- Built the synchronized video and inertial capture stack, including external triggering, timestamp alignment, H.265 recording, and Kalibr intrinsic and extrinsic calibration with the omni fisheye model.
- Developed the multi-view ground-truth reconstruction pipeline and the projection from the external reference frame to each head-mounted camera.
- Collected, processed, and validated multiple real-world batches for model training and evaluation.
- Refactored the research code into a reproducible project and prepared the public GitHub repository.

## System design and synchronized capture

The acquisition system combines DepthAI/OAK cameras with head and wrist IMUs. An external trigger starts all streams from a shared event, while per-frame timestamps support fine-grained temporal alignment across six- and nine-camera configurations. Camera intrinsics and inter-camera extrinsics are calibrated in Kalibr using an omni-directional fisheye model.

The wearable hardware was designed around a stable geometric chain between each camera, fiducial tag, and motion-capture rigid body. This makes calibration repeatable across recording sessions and allows the complete capture rig to be reconstructed in a common coordinate system.

<figure class="project-media project-media--portrait">
  <img src="/projects/full-body-pose/capture-system.jpg" alt="Participant wearing the head-wrist capture system inside the external motion-capture volume" />
  <figcaption>Wearable system inside the external motion-capture setup.</figcaption>
</figure>

## 3D pose ground truth

External stereo and multi-view cameras run RTMPose/RTMW for 2D keypoint detection. Each keypoint is reconstructed through fisheye multi-ray triangulation, then transformed through the optical motion-capture rigid-body chain. The resulting 3D skeleton is projected into the head-mounted fisheye cameras to produce aligned 2D and 3D pose ground truth for egocentric learning.

This process connects external observations with the moving wearable coordinate frame, providing cleaner supervision than relying on a single reconstruction or projection stage.

<figure class="project-video">
  <video src="/projects/full-body-pose/multi-view-3d-ground-truth.mp4" aria-label="Three-dimensional pose ground truth reconstructed from external multi-camera observations" controls muted playsinline preload="metadata"></video>
  <figcaption>3D pose ground truth reconstructed by triangulating detections from the synchronized external multi-camera system.</figcaption>
</figure>

## Wrist-camera hand pose exploration

I also explored inward-facing wrist cameras for hand-pose perception during object manipulation. The experiments tested whether a compact wrist-mounted fisheye view could recover a stable 2D hand skeleton despite close-range distortion, self-occlusion, and rapid viewpoint changes.

<div class="project-media-pair">
  <img src="/projects/full-body-pose/hand-pose-1.jpg" alt="Hand skeleton detected from an inward-facing wrist camera while manipulating a tablet" />
  <img src="/projects/full-body-pose/hand-pose-2.jpg" alt="Hand skeleton detected from an inward-facing wrist camera with an open palm" />
</div>

## Real-world data and model training

Across multiple capture batches, I collected approximately two hours of synchronized and aligned real-world data. I built the batch-processing workflow used to generate training-ready sequences, then ran multiple rounds of staged training and evaluation within the EgoRear framework while adapting components from EgoPoseFormer.

<figure class="project-media project-media--wide">
  <img src="/projects/full-body-pose/model-predictions.jpg" alt="Egocentric fisheye pose predictions compared with projected ground truth across multiple camera views" />
  <figcaption>Predicted skeletons compared with projected ground truth on held-out fisheye views.</figcaption>
</figure>

<figure class="project-video">
  <video src="/projects/full-body-pose/pose-estimation-test-vs-ground-truth.mp4" aria-label="Pose estimation result on the internal test set shown beside its ground truth" controls muted playsinline preload="metadata"></video>
  <figcaption>Internal test-set evaluation: model prediction on the left and the corresponding ground truth on the right.</figcaption>
</figure>

### 3D Pose Estimation

| Method | Dataset and camera setup | MPJPE ↓ |
| --- | --- | ---: |
| **Our method** | Internally collected data, validation split | **50.5 mm** |
| [EgoPoseFormer](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/07241.pdf) | SceneEgo, real-world monocular | 93.0 mm |
| EgoPoseFormer | Ego4View-RW, two front cameras | 77.95 mm |
| EgoPoseFormer | Ego4View-RW, two front and two rear cameras | 63.38 mm |
| [EgoRear](https://arxiv.org/html/2503.11652v2) | Ego4View-RW, two front and two rear cameras | 56.94 mm |
| EgoPoseFormer | UnrealEgo, synthetic stereo | 33.4 mm |

Published results are included as literature references; datasets, camera configurations, skeleton definitions, and evaluation protocols differ.

## Simulation and supporting tools

In parallel, I developed a simulation and validation environment using Isaac Sim and BlenderProc. The tooling compares Mahony-filtered head and wrist IMU orientation against optical motion capture, provides skeleton playback for debugging, and generates randomized synthetic motion from AMASS sequences and SMPL-X bodies.

This environment supported geometry studies before hardware experiments and supplied large-scale pretraining data and simulation validation tools to a parallel project team.

## Technology

Kalibr, RTMPose, fisheye cameras calibration, multi-view triangulation, PyTorch, Isaac Sim, BlenderProc, SolidWorks, ArUco/AprilTag, SMPL-X.
