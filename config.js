export const config = {
    hero: {
        profilePicture: "assets/profile-picture.jpeg",
        name: "PODAVINI LUCA",
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
            subtitle: "PRM, Approx. Cell Decomposition, Multipoint Dubins, Orienteering, Polygon Inflation, Shortcutting",
            description: "Motion planning project on an Agile X LIMO. Explored both Combinatorial and Sampling Based planning to solve the Victim Rescue problem in a controlled environment.",
            preview: "assets/project-previews/preview-robot-planning.png",
            report: "assets/projet-reports/report-robot-planning.pdf",
            github: "https://github.com/LucaPoda/loco_nav",
            demo: ""
        },
        {
            id: "robot-control",
            title: "OPTIMIZATION & LEARNING FOR ROBOT CONTROL",
            subtitle: "Reactive Control, Optimal Control, Reinforcement Learning",
            description: "The project was divided into three assignments: reactive control, optimal control, and reinforcement learning. For the final assignment, the PPO algorithm was implemented to solve a navigation problem for a unicycle in a complex obstacle-filled environment.",
            preview: "assets/project-previews/preview-orc.mp4",
            report: "assets/projet-reports/report-orc.pdf",
            github: "https://github.com/orgs/orc-podavini-grisenti/repositories",
            demo: ""
        },
        {
            id: "automated-planning",
            title: "AUTOMATED PLANNING, THEORY AND PRACTICE",
            subtitle: "Classical Planning, Temporal Planning, Hierarchical Task Networks, PDDL, HDDL",
            description: "Task planning project set in an Interplanetary Museum Vault, implemented different planning techniques such as classical planning, temporal planning, or hierarchical task networks. Compared the performance of different solvers to discover their peculiarities.",
            preview: "assets/project-previews/preview-automated-planning.png",
            report: "assets/projet-reports/report-automated-planning.pdf",
            github: "https://github.com/Frasor2002/AP_Project",
            demo: ""
        },
        {
            id: "claw-machine",
            title: "EMBEDDED SOFTWARE FOR THE INTERNET OF THINGS",
            subtitle: "Embedded C, MSP-432 (ARM Cortex M4), Bluetooth Control, LCD Display, Stepper Motors, Servo, Finite State Machine, 3D Printing, 3D Modelling",
            description: "Embedded software project consisting of the creation and programming of a claw machine. We built everything from scratch, starting with designing the aluminum frame, 3D printing some components, designing the electronics, and finally programming the entire software in C.",
            preview: "assets/project-previews/preview-embedded-software-iot.png",
            report: "https://github.com/tuo-profilo/claw-machine#readme",
            github: "a",
            demo: "a"
        },
        {
            id: "visual-hive",
            title: "VISUAL-HIVE",
            subtitle: "C++, Open CV, MIDI Protocol, Ableton Link, Multithreading, Real-time Data Processing, Low-latency Visualization",
            description: "This VJ program was custom-developed for my needs during events, aiming to be as simple and intuitive as possible. It allows you to overlay a background graphic (video loop) onto a foreground logo, allowing you to create multiple combinations in real time by applying effects such as strobe or a logo that bounces in time with the music. Visual Hive synchronizes with DJ software via Ableton Link, which allows you to read BPM and song structure, allowing you to apply effects at the right time.",
            preview: "assets/project-previews/preview-visual-hive.png",
            report: "a",
            github: "",
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