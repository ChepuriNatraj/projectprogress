# 🎓 Individual Preparation Guide: Robotic Arm Team

This guide breaks down exactly what each member should focus on for the presentation and the Q&A session.

---

## 🛠️ Person 1: Hardware & Simulation Expert
**Primary Responsibility:** The physical build and the virtual testbed.

### 📝 Key Talking Points:
*   **Component Specs:** Be ready to explain *why* MG996R. (Answer: High torque-to-cost ratio, 10kg/cm is enough for a metal arm frame).
*   **The Simulation Loop:** Explain how Gazebo Harmonic vs RViz. Gazebo is the "World" (physics), RViz is the "Camera" (visualization).
*   **Validation:** Emphasize that simulation allowed you to test code while waiting for parts to arrive.

### ❓ Possible Q&A Questions:
*   "How do you handle the current draw of 6 servos?" -> Mention the 10A dedicated PSU.
*   "Why Gazebo Harmonic?" -> It's the latest version for ROS2 Jazzy, providing better physics accuracy.

---

## 📐 Person 2: URDF, CAD & ROS2 Architect
**Primary Responsibility:** System design, URDF development, and ROS2 workspace.

### 📝 Key Talking Points:
*   **The URDF Challenge:** This is your "Hero Story." Explain that you couldn't find a model, so you reverse-engineered it using link measurements and Xacro.
*   **ROS2 Jazzy:** Mention that you are using the latest "LTS" (Long Term Support) version of ROS.
*   **Layered Architecture:** Explain how the system is modular—you can swap the hardware and the simulation still works.

### ❓ Possible Q&A Questions:
*   "What is Xacro?" -> It’s a macro language for URDF that makes it easier to define repeated parts like joints.
*   "What happens if the link length in URDF doesn't match the real arm?" -> The IK (Inverse Kinematics) will fail, and the arm will "miss" the target.

---

## 👁️ Person 3: Computer Vision Specialist
**Primary Responsibility:** YOLOv8 pipeline and Intelligence.

### 📝 Key Talking Points:
*   **YOLOv8 Efficiency:** Explain that you chose YOLOv8 for its speed. You're getting ~30 FPS, which is critical for real-time control.
*   **The Coordinate Mapping:** This is the hard part—converting "Pixels" in the camera to "Centimeters" in the robot's world.
*   **Integration:** Be honest about the current latency/debugging; it shows you understand the system's complexities.

### ❓ Possible Q&A Questions:
*   "Why not use MediaPipe instead of YOLO?" -> YOLO is more robust for object sorting (like detecting blocks), while MediaPipe is specialized for hands.
*   "How do you handle different lighting conditions?" -> Mention that YOLOv8 is robust, but you're working on calibrating the exposure.

---

## ⚡ Person 4: Motor Control & Embedded Engineer
**Primary Responsibility:** ESP8266 Firmware and low-level control.

### 📝 Key Talking Points:
*   **PWM Details:** 50Hz frequency, 500-2500μs pulse width.
*   **The Wi-Fi Bridge:** Explain that the ESP8266 allows the arm to be "headless" (no wires to the PC).
*   **Smooth Motion:** Talk about "easing" or "interpolation"—you aren't just jumping to 90 degrees; you're moving there smoothly to protect the gears.

### ❓ Possible Q&A Questions:
*   "Is the ESP8266 fast enough for 6 PWM channels?" -> Yes, using hardware timers or the `Servo` library, it handles 6 channels easily.
*   "How do you communicate from ROS2 to ESP8266?" -> We use a micro-ROS agent or a simple Serial-over-bridge protocol.

---

## 💡 Pro-Tip for the Whole Team:
When a question is asked, the person whose role it fits should take the lead, but others can add "One more thing..." to show team cohesion!
