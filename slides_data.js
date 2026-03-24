const SLIDES = [
    // ─────────────────────────────────────────────
    // SLIDE 1 — TITLE
    // ─────────────────────────────────────────────
    {
        type: "title",
        projectTitle: "DUAL MODE VISION-GUIDED ROBOTIC ARM",
        reportLine: "A Project report submitted in partial fulfilment of the requirement for the degree of the",
        degree: "BACHELOR OF TECHNOLOGY",
        inWord: "IN",
        branch: "ELECTRONICS AND COMMUNICATION ENGINEERING",
        submittedByLabel: "SUBMITTED BY",
        team: [
            { name: "BORA VISHNU SAI ABHINAV", reg: "Reg No: 322106512004" },
            { name: "CHADARAM MAANAS", reg: "Reg No: 322106512005" },
            { name: "CHEPURI NATRAJ", reg: "Reg No: 322106512006" },
            { name: "MANNAVA SREE PARDHEEV KUMAR", reg: "Reg No: 322106512028" },
        ],
        guideLabel: "UNDER THE ESTEEMED GUIDANCE OF",
        guide: "Prof. P. RAJESH KUMAR M.E., Ph.D.",
        guideTitle: "Professor",
        logoImage: "Media/AULogo.png",
        dept: "DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING",
        college: "ANDHRA UNIVERSITY COLLEGE OF ENGINEERING",
        city: "VISAKHAPATNAM – 530003",
        year: "2022–2026",
    },

    // ─────────────────────────────────────────────
    // SLIDE 2 — ABSTRACT
    // ─────────────────────────────────────────────
    {
        type: "abstract",
        title: "Abstract",
        paragraphs: [
            {
                icon: "goal",
                label: "Objective",
                text: "This project aims to design and develop a six-degree-of-freedom (6-DOF) robotic arm system capable of operating in two parallel modes: autonomous object sorting driven by computer vision, and direct human-in-the-loop control via gesture recognition. The system is engineered to transition seamlessly between these two modes without physical intervention."
            },
            {
                icon: "architecture",
                label: "Architecture",
                text: "The hardware platform comprises a 6-DOF metal servo arm actuated by six MG996R servo motors, controlled by an ESP8266 microcontroller. An IMU sensor provides real-time orientation and motion feedback to improve control stability. On the software side, the system is built on ROS2 Jazzy with Gazebo Harmonic for physics-accurate simulation, RViz for visualisation, and a YOLO-based vision pipeline for hand and object detection."
            },
            {
                icon: "progress",
                label: "Progress",
                text: "Key milestones achieved to date include: (1) procurement of all primary hardware components; (2) development of a custom URDF/3D model after extensive iterative adaptation of an existing open-source reference; (3) successful simulation of the arm in both Gazebo and RViz environments; (4) initial implementation of servo motor control logic on the ESP8266; and (5) a preliminary integration attempt of a YOLO-based hand-detection module, which is currently under active debugging."
            },
            {
                icon: "significance",
                label: "Significance",
                text: "Development is progressing along two concurrent tracks — hardware implementation and software/simulation development — allowing each track to be validated independently before full-system integration. This structured approach reduces integration risk and provides a stable, testable prototype at each phase of the project lifecycle."
            },
        ]
    },

    // ─────────────────────────────────────────────
    // SLIDE 3 — SYSTEM OVERVIEW
    // ─────────────────────────────────────────────
    {
        type: "overview",
        title: "System Architecture & Tools",
        subtitle: "Two parallel development tracks converging into one unified system",
        tracks: [
            {
                name: "Hardware Track",
                color: "#f97316",
                items: ["6-DOF Metal Servo Arm Kit", "6× MG996R Servo Motors", "ESP8266 Microcontroller", "IMU Sensor (MPU6050)", "5V / 10A Dedicated PSU"],
            },
            {
                name: "Software Track",
                color: "#00d4ff",
                items: ["ROS2 Jazzy Jalisco", "Gazebo Harmonic (Simulation)", "RViz (Visualisation)", "YOLOv8 (Hand Detection)", "OpenCV + MediaPipe"],
            },
        ],
        flowSteps: ["IMU / Camera Feed", "→", "ESP8266 / ROS2", "→", "Servo Motor Commands", "→", "Arm Motion"],
    },

    // ─────────────────────────────────────────────
    // SLIDE 4 — SYSTEM DATA FLOW (Flowchart)
    // ─────────────────────────────────────────────
    {
        type: "flowchart",
        title: "System Data Flow & Architecture",
        subtitle: "End-to-end signal path — from sensor input through processing to arm actuation",
    },

    // ─────────────────────────────────────────────
    // SLIDE 5 — HARDWARE PROCUREMENT
    // ─────────────────────────────────────────────
    {
        type: "process",
        title: "Phase 1 — Hardware Procurement",
        status: "completed",
        statusLabel: "Completed",
        image: "Media/UNASSEMBLED ROBOTIC MODEL.jpeg",
        imageCaption: "Received hardware kit — arm brackets, 6× MG996R servos, claw gripper, servo horns",
        intro: "All primary hardware components required for the robotic arm build were ordered and received. Component selection was finalised based on torque requirements, availability, and compatibility with the ESP8266 control architecture.",
        steps: [
            {
                stepNum: "01",
                heading: "Component Selection",
                detail: "Specifications finalised: six MG996R servos (9–11 kg·cm stall torque at 4.8–6V), ESP8266 NodeMCU for Wi-Fi PWM control, MPU6050 IMU for 6-axis orientation feedback. Initial plan called for 4 servos — upgraded to 6 for full DOF."
            },
            {
                stepNum: "02",
                heading: "Procurement & Delivery",
                detail: "All key hardware — arm kit (black anodised aluminium brackets + claw gripper), servo motors, ESP8266 board, IMU module, and 5V/10A PSU — received and inspected."
            },
            {
                stepNum: "03",
                heading: "Inventory Verified",
                detail: "6× MG996R, 1× ESP8266 NodeMCU, 1× MPU6050 IMU, 1× 6-DOF frame + gripper, 1× 5V/10A PSU, connecting wiring — all confirmed complete."
            },
        ],
        outcome: "All hardware is on hand and ready for wiring and firmware integration.",
    },

    // ─────────────────────────────────────────────
    // SLIDE 6 — HARDWARE REPRESENTATION
    // ─────────────────────────────────────────────
    {
        type: "fullimage",
        image: "Media/HARWARE REPRESENTAION.png",
        alt: "Hardware representation of the robotic arm components"
    },

    // ─────────────────────────────────────────────
    // SLIDE 7 — HARDWARE GALLERY
    // ─────────────────────────────────────────────
    {
        type: "gallery",
        title: "Hardware Build Progress",
        subtitle: "From component kit to assembled prototype",
        images: [
            { src: "Media/ASSMEBLED.jpeg", caption: "Assembled 6-DOF robotic arm — mechanical build with servo motors mounted" },
            { src: "Media/WhatsApp Image 2026-03-04 at 4.24.13 PM.png", caption: "Simulation coordinate mapping diagram" },
        ]
    },

    // ─────────────────────────────────────────────
    // SLIDE 8 — 3D MODEL & URDF
    // ─────────────────────────────────────────────
    {
        type: "process",
        title: "Phase 2 — 3D Model & URDF Development",
        status: "completed",
        statusLabel: "Completed (Iterative Adaptation)",
        stl: "models/full_assembly.stl",
        stlCaption: "Interactive 3D representation of the assembled CAD model (Drag to rotate, Scroll to zoom)",
        intro: "A robot description file (URDF) is mandatory for simulation in Gazebo and visualisation in RViz. Because no pre-existing URDF matched our exact arm hardware, one had to be created from scratch using an adapted reference.",
        steps: [
            {
                stepNum: "01",
                heading: "Challenge: No Matching URDF Exists",
                detail: "The exact 6-DOF metal servo arm kit purchased does not have a freely available 3D model or URDF file online. Without a URDF, simulation in Gazebo or motion planning in MoveIt2 is not possible."
            },
            {
                stepNum: "02",
                heading: "Reference Model Located",
                detail: "A closely similar 5-DOF arm URDF was found in the open-source repository ferasboulala/five-dof-robot-arm on GitHub. This served as the base geometry. The mesh proportions and joint placements were studied against our physical hardware."
            },
            {
                stepNum: "03",
                heading: "Iterative Adaptation Process",
                detail: "Multiple adaptation attempts were made: adjusting link lengths to match physical measurements, correcting joint axis orientations, converting from ROS1-style URDF to ROS2-compatible Xacro format, adding a 6th joint and gripper link absent in the reference, and resolving mesh collision/inertia definition errors."
            },
            {
                stepNum: "04",
                heading: "Working Model Achieved",
                detail: "After several revision cycles, a stable Xacro-based URDF was produced. The model correctly defines all 6 joints with realistic axis orientations, link inertias, and collision geometry — sufficient for simulation and motion planning."
            },
        ],
        outcome: "A working URDF representation of the arm is ready and integrated into the ROS2 workspace package my_arm_description.",
    },

    // ─────────────────────────────────────────────
    // SLIDE 9 — SIMULATION
    // ─────────────────────────────────────────────
    {
        type: "process",
        title: "Phase 3 — Simulation in Gazebo & RViz",
        status: "completed",
        statusLabel: "Completed",
        image: "Media/RVIZ IMAGE OF MODEL.jpeg",
        imageCaption: "RViz visualisation — 6-DOF arm model rendered with colour-coded links and joint transforms confirmed",
        intro: "With a working URDF in place, the arm was loaded into both Gazebo Harmonic (physics simulation) and RViz (kinematic visualisation). This simulation environment is the primary testbed for validating motion logic before deploying to real hardware.",
        steps: [
            {
                stepNum: "01",
                heading: "RViz Visualisation",
                detail: "Arm loaded via display.launch.py. joint_state_publisher_gui sliders used to manually move all 6 joints. Link transforms and coordinate frames inspected and confirmed."
            },
            {
                stepNum: "02",
                heading: "Gazebo Harmonic Simulation",
                detail: "Arm spawned via gazebo.launch.py. gz-ros2-bridge configured to relay joint states. JointTrajectoryController from ros2_control activated for trajectory command input."
            },
            {
                stepNum: "03",
                heading: "Controller Verification",
                detail: "ros2 control list_controllers confirmed joint_trajectory_controller and joint_state_broadcaster active. Test commands published via ros2 topic pub."
            },
            {
                stepNum: "04",
                heading: "Motion Logic Testing",
                detail: "Pick-place trajectories and joint-level position commands prototyped in simulation before physical hardware assembly."
            },
        ],
        outcome: "The arm simulates correctly in Gazebo with physics-accurate joint motion. Trajectory commands execute reliably.",
    },

    // ─────────────────────────────────────────────
    // SLIDE 10 — SERVO MOTOR CONTROL
    // ─────────────────────────────────────────────
    {
        type: "process",
        title: "Phase 4 — Servo Motor Control (ESP8266)",
        status: "in-progress",
        statusLabel: "In Progress",
        intro: "Parallel to simulation work, initial development of the servo motor control firmware on the ESP8266 microcontroller has begun. This is the hardware-side counterpart to the simulated JointTrajectoryController.",
        steps: [
            {
                stepNum: "01",
                heading: "ESP8266 as the Control Node",
                detail: "The ESP8266 NodeMCU was selected for its built-in Wi-Fi, PWM output capability, and low cost. It will receive joint angle commands (via serial or Wi-Fi) and translate them into PWM signals for each of the 6 MG996R servo motors."
            },
            {
                stepNum: "02",
                heading: "PWM Signal Generation",
                detail: "MG996R servos require a 50 Hz PWM signal with pulse widths between 500 µs and 2500 µs to span their full range of motion. Initial firmware was written to generate these signals on the ESP8266's digital IO pins, with angle-to-pulse-width mapping implemented in software."
            },
            {
                stepNum: "03",
                heading: "Initial Control Tests",
                detail: "Preliminary control tests were conducted on individual servo motors. Command messages are parsed and converted to PWM duty cycles. Smooth angle transitions with configurable speed are being implemented to prevent jerky motion and mechanical stress."
            },
        ],
        outcome: "Initial servo control logic is functional for individual motors. Multi-servo coordinated control and ROS2-to-ESP8266 communication bridge are the next steps in this phase.",
    },

    // ─────────────────────────────────────────────
    // SLIDE 11 — COMPUTER VISION (YOLO)
    // ─────────────────────────────────────────────
    {
        type: "process",
        title: "Phase 5 — Computer Vision Integration (YOLO)",
        status: "in-progress",
        statusLabel: "Under Development",
        image: "Media/YOLO HAND DETECTION.jpg",
        imageCaption: "Live hand gesture recognition — 29.7 FPS, 21 landmark keypoints tracked in real time",
        intro: "A YOLO-based detection pipeline was developed and tested to detect a human hand in a camera feed and convert that detection into servo movement commands for the robotic arm. This module represents the core intelligence of the human-in-the-loop control mode.",
        steps: [
            {
                stepNum: "01",
                heading: "YOLOv8 Model Setup",
                detail: "A YOLOv8 detection model (Ultralytics) was configured to identify a human hand within a live webcam feed. The model was tested on a system with an NVIDIA RTX 3060 GPU with CUDA 12.1 for accelerated inference, targeting real-time performance at >30 FPS."
            },
            {
                stepNum: "02",
                heading: "Detection → Command Pipeline Design",
                detail: "The intended pipeline: camera frame → YOLOv8 detects hand bounding box → bounding box centroid mapped to 2D workspace coordinates → inverse kinematics convert to 6 joint angles → angles sent as commands to ESP8266/servo controller. This pipeline was partially implemented."
            },
            {
                stepNum: "03",
                heading: "Integration Attempt & Issues",
                detail: "During integration, technical issues were encountered: latency spikes in the detection-to-command loop, coordinate mapping calibration errors between camera space and robot workspace, and serialization issues when passing YOLO output into the ROS2 topic pipeline. These are actively being debugged."
            },
            {
                stepNum: "04",
                heading: "Current Status",
                detail: "The YOLO detection model itself runs and detects hands reliably in isolation. The full end-to-end integration from detection output to servo command remains under active development and is expected to be resolved in the next development cycle."
            },
        ],
        outcome: "Hand detection is functional in isolation. Full pipeline integration into the ROS2 + servo control chain is the current blocker under active development.",
    },

    // ─────────────────────────────────────────────
    // SLIDE 12 — CHALLENGES & STATUS
    // ─────────────────────────────────────────────
    {
        type: "challenges",
        title: "Challenges & Current Status",
        subtitle: "Dual-track development: each track independently validated, converging at integration",
        hardwareTrack: {
            label: "Hardware Track",
            color: "#f97316",
            done: [
                "All components procured and received",
                "Component specifications verified",
                "Initial ESP8266 PWM firmware written",
                "Individual servo motor response tested",
            ],
            pending: [
                "Full arm mechanical assembly & wiring",
                "Multi-servo coordinated control",
                "ROS2 ↔ ESP8266 serial bridge",
                "IMU integration for stability feedback",
            ],
        },
        softwareTrack: {
            label: "Software Track",
            color: "#00d4ff",
            done: [
                "URDF model created after iterative adaptation",
                "Arm visualised correctly in RViz",
                "Physics simulation running in Gazebo Harmonic",
                "ros2_control JointTrajectoryController active",
                "YOLOv8 hand detection working in isolation",
            ],
            pending: [
                "YOLO → ROS2 command pipeline integration",
                "Camera-to-workspace coordinate calibration",
                "MoveIt2 motion planning setup",
                "Full autonomous mode logic",
            ],
        },
        keyChallenge: "The most significant technical challenge encountered was the absence of any ready-made URDF for the purchased arm hardware, which required multiple iterative reconstruction attempts before a working simulation model was produced.",
    },

    // ─────────────────────────────────────────────
    // SLIDE 13 — NEXT STEPS
    // ─────────────────────────────────────────────
    {
        type: "roadmap",
        title: "Next Steps & Roadmap",
        subtitle: "Structured development path ensuring a testable artefact at every phase",
        phases: [
            {
                id: "P1", label: "Hardware Assembly", color: "#22c55e", status: "next",
                tasks: ["Wire all 6 servos to ESP8266", "Connect IMU sensor", "Power supply integration", "Bench test all joints"],
            },
            {
                id: "P2", label: "ROS2 ↔ Hardware Bridge", color: "#3b82f6", status: "upcoming",
                tasks: ["ESP8266 serial bridge node", "ROS2 JointTrajectory → servo", "Real hardware controller test", "ros2_control HW interface"],
            },
            {
                id: "P3", label: "Vision Pipeline Fix", color: "#a855f7", status: "upcoming",
                tasks: ["Debug YOLO → ROS2 pipeline", "Camera calibration", "Coordinate mapping validation", "Real-time command latency test"],
            },
            {
                id: "P4", label: "Full System Integration", color: "#f97316", status: "future",
                tasks: ["Autonomous sorting mode", "Gesture control mode (local)", "Mode switching logic", "50-cycle stress test"],
            },
        ],
        note: "Each phase produces a standalone demonstrable prototype — ensuring progress is always presentable regardless of final timeline.",
    },
    {
        type: "thankyou",
        title: "Questions & Discussion",
    },
];
