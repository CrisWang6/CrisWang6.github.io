---
title: Drawing Robot Based on the Gen3-lite Robot Arm
summary: A vision-guided drawing pipeline that converts input graphics into end-effector trajectories on tilted work surfaces.
role: Team Leader, Course Project
date: 2024-06-01
tags: [Robot Arm, ROS, Python, OpenCV, Trajectory Planning]
hero: /projects/drawing-arm/drawing-demo.png
heroAlt: Gen3-lite robot arm drawing text on paper with a custom pen adapter
links:
  - label: Project report (PDF)
    url: /projects/drawing-arm/project-report.pdf
featured: false
draft: false
---

## Overview

This course project turned a Kinova Gen3-lite arm into a drawing system that could interpret a source image, estimate the pose of a work surface, and execute the resulting path with a pen mounted to the end effector.

## My contribution

As team leader, I owned the integration from the physical tool to robot execution:

- Designed a circular adapter that securely mounted different pens to the gripper.
- Converted input graphics into ordered end-effector waypoints.
- Calibrated the depth camera and estimated the drawing-plane pose.
- Implemented the ROS and Python control pipeline used to execute the drawing.

## System pipeline

The image-processing stage applies Gaussian smoothing, grayscale conversion, and Canny-style edge extraction to produce drawable contours. A QR code defines the target work plane: its corner pixels are paired with depth measurements, and OpenCV `solvePnP` estimates the plane pose relative to the camera.

The extracted contours are converted into a graph of candidate strokes. Path ordering reduces unnecessary pen travel, after which the trajectory is rotated into the detected plane frame and sent to the arm. This lets the same pipeline draw on surfaces whose orientation is not fixed in advance.

## Outcome

The completed prototype connected mechanical design, computer vision, path planning, and manipulator control in one working system. The panoramic image above shows two drawing runs made with the custom pen adapter.
