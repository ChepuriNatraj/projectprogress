# Robotic Arm Project: Presentation Scripts

This document contains the presentation scripts for each slide, distributed among the four team members according to their roles.

---

## 👥 Team Distribution

| Role | Responsibility | Slides |
| :--- | :--- | :--- |
| **Person 1** | **Hardware & Simulation** | 4, 5, 6, 8 |
| **Person 2** | **URDF, CAD & ROS2 Setup** | 1, 2, 3, 7 |
| **Person 3** | **Computer Vision** | 10 |
| **Person 4** | **Motor Control** | 9 |
| **General** | **Challenges & Future** | 11, 12 |

---

## 🎙️ Scripts by Slide

### **Slide 1: Title Slide (Person 2)**
"Good morning everyone. We are here to present our project: the **Dual Mode Vision-Guided Robotic Arm**. This project explores the intersection of computer vision, embedded systems, and robotic simulation to create a versatile 6-DOF manipulator. This report is submitted in partial fulfilment of our Bachelor of Technology in ECE. Our team consists of Maanas, Abhinav, Pardheev, and myself, Natraj. We have been working under the guidance of Prof. P. Rajesh Kumar."

### **Slide 2: Abstract (Person 2)**
"The core objective of our project is to develop a 6-degree-of-freedom robotic arm that can operate in two modes: autonomous object sorting using YOLOv8 vision and human-in-the-loop gesture control. We are following a dual-track development approach, where hardware assembly and software simulation happen in parallel. This ensures that every software algorithm is validated in a high-fidelity physics environment before being deployed to the physical metal arm."

### **Slide 3: System Architecture & Tools (Person 2)**
"Our architecture is divided into two main tracks. On the **Hardware side**, we are using a metal 6-DOF arm kit powered by MG996R servos and an ESP8266 microcontroller for Wi-Fi enabled control. On the **Software side**, we are leveraging the latest ROS2 Jazzy Jalisco distribution. We use Gazebo Harmonic for physics simulation and RViz for visualization. For intelligence, we use YOLOv8 for hand and object detection."

### **Slide 4: Phase 1 — Hardware Procurement (Person 1)**
"Moving to the implementation, Phase 1 was all about hardware procurement. We finalized our components based on torque requirements and compatibility. We selected MG996R servos which provide about 10kg-cm of torque, sufficient for our 6-axis movements. We also included an MPU6050 IMU for feedback and a dedicated 10-Amp power supply to ensure stable current for all six motors simultaneously."

### **Slide 5: Hardware Representation (Person 1)**
"Here you can see the unassembled components. We carefully inspected each servo and the metal frame. The use of an ESP8266 NodeMCU allows us to send commands wirelessly, which simplifies the wiring significantly compared to traditional wired serial connections."

### **Slide 6: Assembled Robotic Arm (Person 1)**
"This is the fully assembled hardware prototype. The metal construction provides the necessary rigidity for precise movements. Each joint has been manually tested for its range of motion. We are now in the process of final wiring and cable management to ensure smooth operation during high-speed movements."

### **Slide 7: Phase 2 — 3D Model & URDF Development (Person 2)**
"The biggest challenge in the software track was the URDF — the Unified Robot Description Format. Since our specific metal kit didn't have a pre-existing 3D model, we had to adapt an open-source reference. Through several iterations, we adjusted link lengths, corrected joint axes, and converted the model to the ROS2 Xacro format to include proper inertia and collision geometries for Gazebo."

### **Slide 8: Phase 3 — Simulation in Gazebo & RViz (Person 1)**
"With the URDF ready, we successfully spawned the arm in Gazebo Harmonic. This is our virtual testbed. As you can see in the image, we use RViz to visualize the kinematic state while Gazebo handles the physics. We've verified that our `joint_trajectory_controller` is active, allowing us to send smooth motion commands to the virtual arm before we ever move a real motor."

### **Slide 9: Phase 4 — Servo Motor Control (Person 4)**
"Now, let's talk about the motor control. The ESP8266 is the heart of our hardware control. It generates 50Hz PWM signals with pulse widths ranging from 500 to 2500 microseconds. We've written custom firmware to map target angles into these pulse widths. To prevent jerky movements, we've implemented smooth transitions which allow the arm to accelerate and decelerate naturally."

### **Slide 10: Phase 5 — Computer Vision Role (Person 3)**
"The 'Intelligence' of our robot comes from the Computer Vision pipeline. We are using YOLOv8, running on an NVIDIA GPU for real-time performance. The system detects a human hand or a specific object, calculates its coordinates in the camera frame, and passes that data to our Inverse Kinematics solver. While the detection is working perfectly at over 30 FPS, we are currently smoothing out the latency in the communication loop between the vision server and the ROS2 topics."

### **Slide 11: Challenges & Current Status (Shared)**
"**Person 2:** To summarize our status: we have validated both the hardware spec and the simulation environment. 
**Person 4:** The motor control firmware is ready but needs full integration.
**Person 1:** The most significant challenge was definitely the URDF reconstruction, which took multiple attempts to get the axes aligned correctly.
**Person 3:** Our next major milestone is bridging the YOLO detection directly into the servo movement loop."

### **Slide 12: Next Steps & Roadmap (Shared)**
"**Person 1:** Our roadmap starts with Phase 1: completing the final wiring and bench tests.
**Person 2:** Phase 2 will be the ROS2-to-Hardware bridge, using a serial-over-Wi-Fi node.
**Person 3:** Phase 3 involves calibrating the camera-to-workspace coordinates so the arm knows exactly where the detected hand is.
**Person 4:** Finally, we will integrate everything for full autonomous sorting and gesture control. Thank you!"
