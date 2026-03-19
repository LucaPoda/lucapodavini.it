export const config = {
    ui: {
        aboutTitle: "About Me",
        projectsTitle: "Projects",
        educationTitle: "Education",
        jobsTitle: "Experience",
        linksTitle: "Useful Links",
        connect: "Let's build something great.",
        rights: "All rights reserved.",
        period: "PERIOD:",
        gradDate: "GRADUATION DATE:",
        grade: "FINAL GRADE:",
        thesis: "THESIS",
        jobKind: "JOB KIND:",
        role: "ROLE:",
        stack: "STACK:",
        previewAlt: "Preview:",
        githubTitle: "GitHub Page",
        linkedinTitle: "LinkedIn Profile",
        emailTitle: "Email",
        cvTitle: "Curriculum Vitae"
    },
    hero: {
        profilePicture: "/assets/profile-picture.jpeg",
        name: "LUCA PODAVINI",
        title: "Artificial Intelligence Systems",
        subtitle: "Intelligent Robots Path",
        university: "University of Trento",
        socials: {
            github: "https://github.com/LucaPoda",
            githubHandle: "github.com/LucaPoda",
            linkedin: "https://www.linkedin.com/in/luca-podavini-090ab92aa",
            linkedinHandle: "in/luca-podavini",
            email: "mailto:contact@lucapodavini.it",
            emailAddress: "contact@lucapodavini.it",
            uniEmail: "mailto:luca.podavini@studenti.unitn.it",
            uniEmailAddress: "luca.podavini@studenti.unitn.it",
            cv: "/documents/luca-podavini-cv-en.pdf"
        }
    },
    about: [
        "Master's student in Artificial Intelligence Systems at the University of Trento, specializing in Intelligent Robots. My expertise spans from Reinforcement Learning and Motion Planning to Computer Vision and Embedded Systems. I work on both high-level AI algorithms and low-level control, with a strong focus on C++, Rust, Python, PyThorch and ROS/ROS2. Currently, I am developing custom controllers for a manipulator in a collaborative environment. Outside of academia, I am dedicating my time to a personal project focused on visuals for small music events. My long-term goal is to discover how to merge these two passions, finding a way to integrate Artificial Intelligence and robotics into the world of live event installations in the future.",
        "When I'm not coding or programming robots, I'm deeply involved in the music scene as a DJ and event organizer. This passion has sharpened my skills in project management, leadership, and creative problem-solving under pressure."
    ],
    projects: [
        {
            id: "robot-planning",
            title: "ROBOT PLANNING & ITS APPLICATIONS",
            subtitle: "", 
            topics: "PRM, Approximate Cell Decomposition, Multipoint Dubins, Orienteering, Polygon Inflation, Shortcutting, ROS, RViz, Gazebo, Loco Nav, Simulation, Agile X LIMO, Victim Rescue",
            description: "Motion planning project on an AgileX LIMO. Exploration and application of both Combinatorial and Sampling-Based approaches to solve a 'Victim Rescue' problem in a controlled environment. Different techniques were explored to design the full planning pipeline, including map reading, obstacle inflation, roadmap construction with sampling-based or combinatorial approaches, shortest path calculation, the orienteering problem, and final Dubins trajectory generation.",
            preview: "/assets/project-previews/preview-robot-planning.png",
            report: "/assets/projet-reports/report-robot-planning.pdf",
            github: "https://github.com/LucaPoda/loco_nav",
            demo: ""
        },
        {
            id: "unicycle-rl",
            title: "REINFORCEMENT LEARNING for UNICYCLE ROBOT",
            subtitle: "OPTIMIZATION & LEARNING FOR ROBOT CONTROL",
            topics: "Reinforcement Learning, PPO Algorithm, REINFORCE algorithm, Unicycle Kinematics, Trajectory Tracking, Navigation, Obstacle Avoidance, LIDAR",
            description: "Final and most significant assignment of the Optimization and Learning for Robot Control course. Various reinforcement learning techniques applied to a unicycle robot were explored. Implemented trajectory tracking using the REINFORCE algorithm and the PPO (Proximal Policy Optimization) algorithm to solve a full autonomous navigation problem in an obstacle-dense environment (as shown in the preview).",
            preview: "/assets/project-previews/preview-orc.mp4",
            report: "/assets/projet-reports/report-orc.pdf",
            github: "https://github.com/orgs/orc-podavini-grisenti/repositories",
            demo: ""
        },
        {
            id: "humanoid-tsid",
            title: "REACTIVE CONTROL (TSID) on HUMANOID ROBOT",
            subtitle: "OPTIMIZATION & LEARNING FOR ROBOT CONTROL",
            topics: "Reactive Control, Task Space Inverse Dynamics (TSID), Humanoid Robotics",
            description: "First assignment of the Optimization and Learning for Robot Control course. Development of a reactive control framework based on Task Space Inverse Dynamics (TSID) to enable a humanoid robot to track complex trajectories and perform walking motions while maintaining dynamic balance.",
            preview: "/assets/project-previews/preview-reactive-control.png",
            report: "/assets/projet-reports/report-reactive-control.pdf",
            github: "https://github.com/orgs/orc-podavini-grisenti/repositories",
            demo: ""
        },
        {
            id: "ur5-optimal-control",
            title: "OPTIMAL CONTROL for UR5 MANIPULATOR",
            subtitle: "OPTIMIZATION & LEARNING FOR ROBOT CONTROL",
            topics: "Optimal Control, UR5 Manipulator, Trajectory Optimization",
            description: "Second assignment of the Optimization and Learning for Robot Control course, focused on Optimal Control. Application of optimization techniques for trajectory tracking and path tracking on a UR5 industrial robotic arm.",
            preview: "/assets/project-previews/preview-optimal-control.jpeg",
            report: "/assets/projet-reports/report-optimal-control.pdf", 
            github: "https://github.com/orgs/orc-podavini-grisenti/repositories",
            demo: ""
        },
        {
            id: "automated-planning",
            title: "INTERPLANETARY MUSEUM VAULT",
            subtitle: "AUTOMATED PLANNING, THEORY AND PRACTICE",
            topics: "Classical Planning, Temporal Planning, Hierarchical Task Networks, PDDL, HDDL",
            description: "Task planning project set in an 'Interplanetary Museum Vault'. Implementation and performance comparison of various planning techniques and multiple solvers (classical, temporal, and HTN networks) to discover their peculiarities and limitations.",
            preview: "/assets/project-previews/preview-automated-planning.png",
            report: "/assets/projet-reports/report-automated-planning.pdf",
            github: "https://github.com/Frasor2002/AP_Project",
            demo: ""
        },
        {
            id: "deep-learning",
            title: "Parameter Efficient Fine Tuning for CLIP",
            subtitle: "DEEP LEARNING",
            topics: "Zero-Shot CLIP, CoCoOp, CLIP-LoRA, DISEFT, Few-Shot Learning, PyTorch, Generative AI",
            description: "This project explores Parameter Efficient Fine Tuning (PEFT) techniques applied to the CLIP model for image classification tasks. We implemented and compared several PEFT methods, including CoCoOp, CLIP-LoRA, and DISEFT, to evaluate their performance in few-shot learning scenarios.",
            preview: "/assets/project-previews/preview-deep-learning.png",
            report: "/assets/projet-reports/notebook.html",
            github: "https://github.com/Frasor2002/DL_Project",
            demo: ""
        },
        {
            id: "nlu",
            title: "NATURAL LANGUAGE UNDERSTANDING",
            subtitle: "",
            topics: "LSTM, Dropout Layers, AdamW, NT-AvSGD, Weight Tying, Variational Dropouts, Transformer, BERT, Intent Classification, Slot Filling, PyTorch",
            description: "This project focuses on Language Modelling (LM) and Natural Language Understanding (NLU). Various architectures were compared, including LSTM-based models with dropout layers and advanced optimization techniques like AdamW and NT-AvSGD, as well as transformer-based models such as BERT.",
            preview: "/assets/project-previews/preview-nlu.png",
            report: "/assets/projet-reports/report-lm-nlu.pdf",
            github: "https://github.com/LucaPoda/NLU_PROJECT",
            demo: ""
        },
        {
            id: "claw-machine",
            title: "CLAW MACHINE",
            subtitle: "EMBEDDED SOFTWARE FOR THE INTERNET OF THINGS",
            topics: "Embedded C, MSP-432 (ARM Cortex M4), Bluetooth Control, LCD Display, Stepper Motors, Servo, Finite State Machines, 3D Printing",
            description: "IoT project focused on the hardware design and software development of an industrial gantry crane. For demonstration purposes, the system was equipped with a claw-style end-effector to simulate a claw machine. Built entirely from scratch: from the aluminum frame design and 3D printing of custom components to the electronics engineering and C software architecture. The project was showcased at Fablab Trento during ICT Days 2024, integrated into a railway logistics and loading scenario in collaboration with the Rusty Railways team.",
            preview: "/assets/project-previews/preview-embedded-software-iot.png",
            report: "https://github.com/Clown-Machine/ClawMachine/blob/main/README.md",
            github: "https://github.com/Clown-Machine/ClawMachine",
            demo: "https://youtu.be/jCsASMP_P0s?si=dVV_ODnANKmjaA7-"
        },
        {
            id: "visual-hive",
            title: "VISUAL-HIVE",
            subtitle: "PERSONAL PROJECT",
            topics: "C++, OpenCV, MIDI Protocol, Ableton Link, Multithreading, Real-time Data Processing",
            description: "Custom-developed VJ software for specific needs during live events, focusing on simplicity and ultra-low latency performance. It allows seamless overlaying of logos and text on background video loops, applying real-time effects like strobe and beat-synced motion. Leveraging Ableton Link, Visual-Hive synchronizes with DJ software by extracting BPM and track structure. Currently interfaced via CLI, with a dedicated GUI and full MIDI mapping under development.",
            preview: "/assets/project-previews/preview-visual-hive.png",
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
            logo: "/assets/logos/logo-unitn.jpg",
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
            logo: "/assets/logos/logo-unitn.jpg",
            period: "2021 - 2024",
            graduationDate: "17/09/2024",
            finalGrade: "98/110",
            thesisTitle: "MOVE FUZZER",
            skills: "C | C++ | Python | Rust | Embedded C | Embedded Applications | Linux Shell | Git | Algorithms & Data Structures | Operating Systems | 3D Printing | 3D Design",
            thesisPdf: "/assets/projet-reports/thesis-bacherold.pdf",
            github: "https://github.com/LucaPoda/move-fuzzer/"
        },
        {
            level: "Diploma",
            title: "HIGH SCHOOL DIPLOMA:",
            course: "Information and Communication Technologies",
            logo: "/assets/logos/logo-iis-cerebotani.jpeg",
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
            companyLogo: "/assets/logos/logo-cualeva.png",
            company: "CUALEVA S.R.L",
            location: "Puegnago del Garda, BS",
            period: "2019 - 2022",
            jobKind: "PART-TIME EXTRA-CURRICULAR*",
            stack: ".NET",
            note: "*Started as a school internship and quickly evolved into a part-time position alongside my final high school year. Transitioned to a full-time role during the 2021 and 2022 summer breaks, eventually stepping down to focus entirely on my academic path at the university.",
            tech: "C# | .NET Framework | ASP .NET MVC | Entity Framework | AWS | MS Graph | Google APIs | FTP"
        },
        {
            role: "WEB DEVELOPER",
            companyLogo: "/assets/logos/logo-thinkeasy.png",
            company: "THINK EASY S.R.O",
            location: "Prague, Czechia",
            period: "09/2019",
            jobKind: "SCHOOL INTERNSHIP*",
            stack: "DJANGO, REACT, REDUX",
            note: "*Practical experience in back-end and front-end web development during a one-month internship abroad through the PON program.",
            tech: "Python | JavaScript | Django | React | Redux"
        }
    ],
    links: {
        bio: "Computer Science | AI Systems & Robotics | Music | Sailing",
        sections: [
            {
                title: "SOCIAL & CONTACTS",
                items: [
                    { label: "Website", url: "/", icon: "fa-solid fa-globe", desktopClass: "md:col-span-6" },
                    { label: "GitHub", url: "https://github.com/LucaPoda", icon: "fa-brands fa-github", desktopClass: "md:col-span-3" },
                    { label: "LinkedIn", url: "https://www.linkedin.com/in/luca-podavini-090ab92aa", icon: "fa-brands fa-linkedin", desktopClass: "md:col-span-3" },
                    { label: "Instagram", url: "https://instagram.com/lucaapoda", icon: "fa-brands fa-instagram", desktopClass: "md:col-span-3" },
                    { label: "Telegram", url: "https://t.me/lucapoda", icon: "fa-solid fa-paper-plane", desktopClass: "md:col-span-3" },
                    
                    // Divisore email
                    { type: "subtitle", label: "Email" },
                    
                    // Label email accorciate
                    { label: "Personal", url: "mailto:lucapoda02@gmail.com", icon: "fa-solid fa-envelope", desktopClass: "md:col-span-2" },
                    { label: "University", url: "mailto:luca.podavini@studenti.unitn.it", icon: "fa-solid fa-graduation-cap", desktopClass: "md:col-span-2" },
                    { label: "Professional", url: "mailto:contact@lucapodavini.it", icon: "fa-solid fa-briefcase", desktopClass: "md:col-span-2" }
                ]
            },
            {
                title: "MUSIC",
                items: [
                    { label: "Poda DJ", url: "https://instagram.com/poda.dj", icon: "fa-solid fa-compact-disc", desktopClass: "md:col-span-3" },
                    { label: "Partyhive", url: "https://instagram.com/partyhive.tn", icon: "fa-solid fa-users", desktopClass: "md:col-span-3" },
                    { label: "SoundCloud", url: "https://soundcloud.com/poda-dj", icon: "fa-brands fa-soundcloud", desktopClass: "md:col-span-3" },
                    { label: "Spotify", url: "https://open.spotify.com/user/cdpayi46m5l6rlld440fc7asl?si=jA99BqIvShG1MseGh_q01w", icon: "fa-brands fa-spotify", desktopClass: "md:col-span-3" }
                ]
            },
            {
                title: "UNIVERSITY",
                items: [
                    // Nota: ho sistemato i link incrociati che c'erano nel file IT
                    { label: "Master's: AI Systems & Robotics", url: "https://corsi.unitn.it/en/artificial-intelligence-systems", icon: "fa-solid fa-robot", desktopClass: "md:col-span-3" },
                    { label: "Bachelor's: Computer Science", url: "https://corsi.unitn.it/it/informatica-laurea", icon: "fa-solid fa-code", desktopClass: "md:col-span-3" }
                ]
            },
            {
                title: "SELECTED PROJECTS",
                items: [
                    { label: "Visit my project portfolio", url: "/en/#projects", icon: "fa-solid fa-arrow-right", desktopClass: "md:col-span-4 md:col-start-2" }
                ]
            }
        ]
    }
};