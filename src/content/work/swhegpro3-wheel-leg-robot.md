---
title: SWhegPro3 Wheel-Leg Transformable Robot
summary: A four-module mobile robot with transformable three-impeller wheels for robust stair climbing across varied dimensions.
role: Lead Student Researcher, ROMA Lab
date: 2024-10-24
tags: [Wheel-Leg Robot, Mechanical Design, Locomotion, ROS, MATLAB]
hero: /projects/swhegpro3/platforms.png
heroAlt: SWhegPro and SWhegPro3 robots shown in wheel and leg configurations
heroSize: content
links:
  - label: Field transportation paper (PDF)
    url: /projects/swhegpro3/field-transportation-paper.pdf
  - label: ROBIO 2023 paper (PDF)
    url: /projects/swhegpro3/robio-2023-paper.pdf
  - label: arXiv record
    url: https://arxiv.org/abs/2410.18507
featured: true
draft: false
---

## Research question

Wheeled robots are efficient on flat ground but struggle on discontinuous terrain, while legged robots gain mobility at the cost of complexity and efficiency. SWhegPro3 explores a compact middle ground: each wheel can expand into a three-impeller leg for indoor stair climbing and retract for normal rolling.

## My contribution

I independently developed the SWhegPro3 platform as an undergraduate researcher and first author. My work covered:

- Mechanical design, assembly, and iteration of the four-module robot.
- Selection and optimization of wheel geometry and wheelbase for common stair dimensions.
- MATLAB modeling and simulation of stair-climbing kinematics and front-rear wheel phase behavior.
- ROS-based system integration, gait-control experiments, and performance analysis.
- Preparation of the ROBIO 2023 paper and the broader field-transportation study.

## Design and control

The transformable modules use self-locking electric push rods instead of a gear or tendon transmission. The resulting triangular support structure holds its geometry under load, while slip rings provide power and signals to actuators mounted on the rotating wheels.

![Detailed mechanism design of the SWhegPro and SWhegPro3 transformable modules](/projects/swhegpro3/mechanism.png)

Kinematic optimization produced a 510 mm wheelbase for the target stair geometry. Simulation also showed that four modules avoided the redundant high-frequency motion observed in a six-wheel configuration. During stair climbing, the front wheels provide the main drive and the rear wheels assist under torque limits; the expandable rim geometry can be adjusted for different stair dimensions.

![Geometric constraints used to select the three-impeller wheel parameters for stairs](/projects/swhegpro3/stair-parameters.png)

## Results

The completed robot climbed stairs spanning approximately 15 to 32 degrees, reached a maximum climbing speed of 1.8 steps per second, and carried a 7 kg payload in testing. The work led to a first-author paper at IEEE ROBIO 2023 and a 2024 arXiv paper on robust wheel-leg field transportation robots.

## Publications

- H. Wang, S. Wang, C. Dai, and Z. Jia, "SWhegPro3: A Three-Impeller Wheel-Leg Transformable Robot with Variable Robust Adaptability to Stair Dimensions," IEEE ROBIO, 2023.
- H. Wang et al., "Ubiquitous Field Transportation Robots with Robust Wheel-Leg Transformable Modules," arXiv:2410.18507, 2024.
