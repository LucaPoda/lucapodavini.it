export const config = {
    hero: {
        profilePicture: "assets/profile-picture.jpeg",
        name: "LUCA PODAVINI",
        title: "Artificial Intelligence Systems",
        subtitle: "Intelligent Robots Path",
        university: "University of Trento",
        socials: {
            github: "https://github.com/LucaPoda",
            linkedin: "https://www.linkedin.com/in/luca-podavini-090ab92aa",
            email: "mailto:info@lucapodavini.it",
            cv: "assets/cv-podavini-luca.pdf"
        }
    },
    about: [
        "AI Engineering student at the University of Trento, specialized in Intelligent Robots. My expertise spans from Reinforcement Learning and Motion Planning to Real-time Computer Vision and Embedded Systems. I bridge the gap between high-level AI algorithms and low-level control, with a strong focus on C++, Rust, and ROS/ROS2. Currently developing custom controllers for robotic manipulation and exploring the intersection of AI, music and visual arts.",
        "When I'm not coding or programming robots, I'm deeply involved in the music scene as a DJ and event organizer. This passion has sharpened my skills in project management, leadership, and creative problem-solving under pressure."
    ],
    projects: [
        {
            id: "robot-planning",
            title: "ROBOT PLANNING & ITS APPLICATIONS",
            subtitle: "", 
            topics: "PRM, Approx. Cell Decomposition, Multipoint Dubins, Orienteering, Polygon Inflation, Shortcutting",
            description: "Motion planning project on an Agile X LIMO. Explored both Combinatorial and Sampling Based planning to solve the Victim Rescue problem in a controlled environment. Explored different techniques to design the full planning pipeline that includes reading the map and applying obstacle inflation, building the roadmap with a sampling-based or combinatorial approach, computing shortest paths, the orienteering problem and generating the final Dubins trajectory.",
            preview: "assets/project-previews/preview-robot-planning.png",
            report: "assets/projet-reports/report-robot-planning.pdf",
            github: "https://github.com/LucaPoda/loco_nav",
            demo: ""
        },
        {
            id: "unicycle-rl",
            title: "REINFORCEMENT LEARNING for UNICYCLE ROBOT",
            subtitle: "OPTIMIZATION & LEARNING FOR ROBOT CONTROL",
            topics: "Reinforcement Learning, PPO Algorithm, Unicycle Kinematics",
            description: "Final and most important assignment of the Optimization and Learning for Robot Control course. Explored different reinforcement learning techniques applied to an unicycle robot. Implemented trajectory tracking using the REINFORCE algorithm and a the the PPO (Proximal Policy Optimization) algorithm to solve a full navigation problem in an obstacle-filled environment (shown in the preview).",
            preview: "assets/project-previews/preview-orc.mp4",
            report: "assets/projet-reports/report-orc.pdf",
            github: "https://github.com/orgs/orc-podavini-grisenti/repositories",
            demo: ""
        },
        {
            id: "humanoid-tsid",
            title: "REACTIVE CONTROL (TSID) on HUMANOID ROBOT",
            subtitle: "OPTIMIZATION & LEARNING FOR ROBOT CONTROL",
            topics: "Reactive Control, Task Space Inverse Dynamics (TSID), Humanoid Robotics",
            description: "First assignment Optimization and Learning for Robot Control course.. Developed a reactive control framework using Task Space Inverse Dynamics (TSID) to enable a humanoid robot to track complex trajectories and perform walking motions while maintaining dynamic balance.",
            preview: "assets/project-previews/preview-reactive-control.png", // Inserisci qui il tuo media
            report: "assets/projet-reports/report-reactive-control.pdf", // Inserisci il pdf corretto
            github: "https://github.com/orgs/orc-podavini-grisenti/repositories",
            demo: ""
        },
        {
            id: "ur5-optimal-control",
            title: "OPTIMAL CONTROL for UR5 MANIPULATOR",
            subtitle: "OPTIMIZATION & LEARNING FOR ROBOT CONTROL",
            topics: "Optimal Control, UR5 Manipulator, Trajectory Optimization",
            description: "Second assignment of the Optimization and Learning for Robot Control course, focused on Optimal Control. Applied both trajectory tracking and path tracking techniques optimization techniques to a UR5 industrial robotic arm.",
            preview: "assets/project-previews/preview-optimal-control.jpeg", // Inserisci qui il tuo media
            report: "assets/projet-reports/report-optimal-control.pdf", // Inserisci il pdf corretto
            github: "https://github.com/orgs/orc-podavini-grisenti/repositories",
            demo: ""
        },
        {
            id: "automated-planning",
            title: "INTERPLANETARY MUSEUM VAULT",
            subtitle: "AUTOMATED PLANNING, THEORY AND PRACTICE",
            topics: "Classical Planning, Temporal Planning, Hierarchical Task Networks, PDDL, HDDL",
            description: "Task planning project set in an Interplanetary Museum Vault, implemented different planning techniques such as classical planning, temporal planning, or hierarchical task networks. Compared the performance of different solvers to discover their peculiarities.",
            preview: "assets/project-previews/preview-automated-planning.png",
            report: "assets/projet-reports/report-automated-planning.pdf",
            github: "https://github.com/Frasor2002/AP_Project",
            demo: ""
        },
        {
            id: "deep-learning",
            title: "Parameter Efficient Fine Tuning for CLIP",
            subtitle: "DEEP LEARNING",
            topics: "Zero-Shot CLIP, CoCoOp, CLIP-LoRA, DISEFT, Few-Shot Learning, PyTorch",
            description: "This project explores Parameter Efficient Fine Tuning (PEFT) techniques applied to the CLIP model for image classification tasks. We implemented and compared several PEFT methods, including CoCoOp, CLIP-LoRA, and DISEFT, to evaluate their performance in few-shot learning scenarios. The project demonstrates how PEFT can significantly reduce the number of trainable parameters while maintaining competitive accuracy, making it a promising approach for adapting large pre-trained models to specific tasks with limited data.",
            preview: "assets/project-previews/preview-deep-learning.png",
            report: "assets/projet-reports/notebook.html",
            github: "https://github.com/Frasor2002/DL_Project",
            demo: ""
        },
        {
            id: "nlu",
            title: "NATURAL LANGUAGE UNDERSTANDING",
            subtitle: "",
            topics: "LSTM, Dropout Layers, AdamW, NT-AvSGD, Weight Tying, Variational Dropouts, Transformer, BERT, Intent Classification, Slot Filling, PyTorch",
            description: "This project focuses on Language Modelling and Natural Language Understanding (NLU). Various architectures have been compared, including LSTM-based models with dropout layers and advanced optimization techniques like AdamW and NT-AvSGD, as well as transformer-based models such as BERT. The project addresses both intent classification and slot filling tasks, demonstrating the effectiveness of different approaches in understanding user queries and extracting relevant information for dialogue management.",
            preview: "assets/project-previews/preview-nlu.png",
            report: "assets/projet-reports/report-lm-nlu.pdf",
            github: "https://github.com/LucaPoda/NLU_PROJECT",
            demo: ""
        },
        {
            id: "claw-machine",
            title: "CLAW MACHINE",
            subtitle: "EMBEDDED SOFTWARE FOR THE INTERNET OF THINGS",
            topics: "Embedded C, MSP-432 (ARM Cortex M4), Bluetooth Control, LCD Display, Stepper Motors, Servo, Finite State Machine, 3D Printing, 3D Modelling",
            description: "Embedded software project consisting of the creation and programming of a claw machine. We built everything from scratch, starting with designing the aluminum frame, 3D printing some components, designing the electronics, and finally programming the entire software in C. This project was presented at Fablab Trento during ICT Days 2024.",
            preview: "assets/project-previews/preview-embedded-software-iot.png",
            report: "https://github.com/Clown-Machine/ClawMachine/blob/main/README.md",
            github: "https://github.com/Clown-Machine/ClawMachine",
            demo: "https://youtu.be/jCsASMP_P0s?si=dVV_ODnANKmjaA7-"
        },
        {
            id: "visual-hive",
            title: "VISUAL-HIVE",
            subtitle: "PERSONAL PROJECT",
            topics: "C++, Open CV, MIDI Protocol, Ableton Link, Multithreading, Real-time Data Processing, Low-latency Visualization",
            description: "This custom VJ software was developed to meet the specific needs of live events, prioritizing simplicity and real-time performance. It enables seamless overlaying of foreground logos onto dynamic background loops, with integrated effects like strobe and beat-synced motion. By leveraging Ableton Link, Visual-Hive synchronizes with DJ software to extract BPM and song structure, ensuring perfectly timed visual transitions. While currently CLI-based, development is ongoing to integrate full MIDI mapping and a dedicated GUI.",
            preview: "assets/project-previews/preview-visual-hive.png",
            report: "",
            github: "https://github.com/LucaPoda/visual-hive",
            demo: ""
        }
    ],
    education: [
        {
            level: "Master",
            title: "MASTER'S DEGREE:",
            course: "Artificial Intelligence Systems",
            logo: "assets/logos/logo-unitn.jpg",
            period: "2024 - PRESENT",
            graduationDate: "03/2027 (EXPECTED)",
            finalGrade: "/",
            thesisTitle: "/",
            skills: "Motion Planning | Task Planning | Deep Learning | Reinforcement Learning | Robotic Perception | Computer Vision | Natural Language Understanding",
            thesisPdf: "",
            github: ""
        },
        {
            level: "Bachelor",
            title: "BACHELOR'S DEGREE:",
            course: "Computer Science",
            logo: "assets/logos/logo-unitn.jpg",
            period: "2021 - 2024",
            graduationDate: "17/09/2024",
            finalGrade: "98/110",
            thesisTitle: "MOVE FUZZER",
            skills: "C | C++ | Python | Rust | Embedded C | Embedded Applications | Linux Shell | Git | Algorithms & Data Structures | Operating Systems | 3D Printing | Basic 3D Design | Basic Electronic",
            thesisPdf: "assets/projet-reports/thesis-bacherold.pdf",
            github: "https://github.com/LucaPoda/move-fuzzer/"
        },
        {
            level: "Diploma",
            title: "DIPLOMA:",
            course: "Information and Communication Technologies",
            logo: "assets/logos/logo-iis-cerebotani.jpeg",
            period: "2016 - 2021",
            graduationDate: "26/06/2021",
            finalGrade: "100/100",
            thesisTitle: "FULL STACK WEB APP",
            skills: "C | C++ | Java | C# | Full Stack Web Development | SQL | JavaScript | Games Development | Networking | Git",
            thesisPdf: "",
            github: "https://github.com/LucaPoda/try_my_challenge"
        }
    ],
    jobs: [
        {
            role: "SOFTWARE DEVELOPER",
            companyLogo: "assets/logos/logo-cualeva.png",
            company: "CUALEVA S.R.L",
            location: "Puegnago del Garda, BS",
            period: "2019 - 2022",
            jobKind: "PART TIME AFTER SCHOOL*",
            stack: ".NET",
            note: "*Started as school intership (12/2019), continued part time during school and full time during summer",
            tech: "C# | .NET Framework | ASP .NET MVC | Entity Framework | AWS | MS Graph | API Google | FTP"
        },
        {
            role: "WEB DEVELOPER",
            companyLogo: "assets/logos/logo-thinkeasy.png",
            company: "THINK EASY S.R.O",
            location: "Prague, Czechia",
            period: "09/2019",
            jobKind: "SCHOOL INTERNSHIP*",
            stack: "DJANGO, REACT, REDUX",
            note: "*A one-month internship abroad initiative, organized by the school through the PON program.",
            tech: "Python | JavaScript | Django | React | Redux"
        }
    ]
};