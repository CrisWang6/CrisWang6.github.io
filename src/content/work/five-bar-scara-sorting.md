---
title: Parallel Five-Bar SCARA Robot for Expressage Sorting
summary: A direct-drive sorting robot redesigned with FEA, collision-aware linkage geometry, and a tendon-driven vacuum end effector.
role: Mechanical Designer, Course Project
date: 2022-12-01
tags: [SCARA, FEA, SolidWorks, Mechanism Design, Manipulation]
hero: /projects/five-bar-scara/sorting-demo.gif
heroAlt: Five-bar SCARA robot picking and moving a small green object with a vacuum end effector
links:
  - label: Course report (PDF)
    url: /projects/five-bar-scara/course-project-report.pdf
featured: false
draft: false
---

## Overview

The team developed a direct-drive, two-degree-of-freedom five-bar SCARA robot for vision-guided pick-and-place. The project combined mechanical redesign, kinematic modeling, singularity-aware path planning, computer vision, and embedded control.

## My contribution

As the mechanical designer, I focused on the structure and end effector:

- Redesigned the linkage using finite-element analysis and maintained a safety factor above 3 under the modeled peak load.
- Moved the four links onto offset height planes after the first design revealed self-collision in simulation.
- Integrated a tendon-driven vertical stroke and a vacuum suction cup for object pickup.
- Supported prototype integration and accurate object-moving tests with the rest of the control team.

## Mechanical system

The final geometry uses 180 mm between the two base joints and 135 mm links. Two DJI M6020 direct-drive motors provide actuation, while a Raspberry Pi 4B communicates with the motor controllers over CAN. The end effector uses a servo-driven tendon to compress a spring for vertical motion, with a vacuum pump supplying adhesion.

![Side view of the completed five-bar SCARA robot moving its end effector](/projects/five-bar-scara/robot-overview.gif)

## Team result

The full system detected colored objects from an overhead camera, mapped their coordinates into the robot workspace, and planned paths around singular configurations. In ten recorded pick-and-place trials, the team completed nine successfully; the remaining failure was caused by insufficient vacuum adhesion during a configuration change.
