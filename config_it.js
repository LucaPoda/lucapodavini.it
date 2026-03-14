export const config = {
    ui: {
        aboutTitle: "Su di me",
        projectsTitle: "Progetti",
        educationTitle: "Istruzione",
        jobsTitle: "Esperienza",
        connect: "Creiamo qualcosa di grande.",
        rights: "Tutti i diritti riservati.",
        period: "PERIODO:",
        gradDate: "DATA DI LAUREA:",
        grade: "VOTO FINALE:",
        thesis: "TESI",
        jobKind: "TIPO DI LAVORO:",
        role: "RUOLO:",
        stack: "STACK:",
        previewAlt: "Anteprima:",
        githubTitle: "Pagina GitHub",
        linkedinTitle: "Profilo LinkedIn",
        emailTitle: "Email",
        cvTitle: "Curriculum Vitae"
    },
    hero: {
        profilePicture: "/assets/profile-picture.jpeg",
        name: "LUCA PODAVINI",
        title: "Artificial Intelligence Systems",
        subtitle: "Percorso Intelligent Robots",
        university: "Università di Trento",
        socials: {
            github: "https://github.com/LucaPoda",
            githubHandle: "github.com/LucaPoda",
            linkedin: "https://www.linkedin.com/in/luca-podavini-090ab92aa",
            linkedinHandle: "in/luca-podavini",
            email: "mailto:info@lucapodavini.it",
            emailAddress: "info@lucapodavini.it",
            uniEmail: "mailto:luca.podavini@studenti.unitn.it",
            uniEmailAddress: "luca.podavini@studenti.unitn.it",
            cv: "/documents/luca-podavini-cv-it.pdf" 
        }
    },
    about: [
        "Studente magistrale in Artificial Intelligence Systems all'Università di Trento, che si sta specializzando in Intelligent Robots. Le mie competenze spaziano dal Reinforcement Learning al Motion Planning, fino alla Computer Vision e ai Sistemi Embedded. Lavoro sia sugli algoritmi AI ad alto livello che sul controllo a basso livello, con una forte specializzazione in C++, Rust, Python, PyTorch e ROS/ROS2. Attualmente sto sviluppando controller custom per un manipolatore in un ambiente collaborativo. Fuori dall'ambito accademico, mi sto invece dedicando a un progetto personale legato ai visual per piccoli eventi musicali. Il mio obiettivo a lungo termine sarebbe di scoprire come unire queste due anime, trovando il modo di integrare in futuro l'Intelligenza Artificiale e la robotica nel mondo delle installazioni per eventi dal vivo.",
        "Quando non scrivo codice o programmo robot, sono profondamente coinvolto nella scena musicale come DJ e organizzatore di eventi. Questa passione ha affinato le mie capacità di project management, leadership e problem-solving sotto pressione."
    ],
    projects: [
        {
            id: "robot-planning",
            title: "ROBOT PLANNING & ITS APPLICATIONS",
            subtitle: "", 
            topics: "PRM, Approximate Cell Decomposition, Multipoint Dubins, Orienteering, Polygon Inflation, Shortcutting, ROS, RViz, Gazebo, Loco Nav, Simulation, Agile X LIMO, Victim Rescue",
            description: "Progetto di motion planning su un AgileX LIMO. Esplorazione e applicazione di approcci sia Combinatorial che Sampling-Based per risolvere un problema di 'Victim Rescue' in ambiente controllato. Esplorate diverse tecniche per progettare l'intera pipeline di pianificazione, includendo la lettura della mappa e la 'obstacle-inflation', la costruzione della roadmap con approccio sampling-based o combinatorial, il calcolo dei percorsi minimi, il problema di orienteering e la generazione della traiettoria Dubins finale.",
            preview: "/assets/project-previews/preview-robot-planning.png",
            report: "/assets/projet-reports/report-robot-planning.pdf",
            github: "https://github.com/LucaPoda/loco_nav",
            demo: ""
        },
        {
            id: "unicycle-rl",
            title: "REINFORCEMENT LEARNING for UNICYCLE ROBOT",
            subtitle: "OPTIMIZATION & LEARNING FOR ROBOT CONTROL",
            topics: "Reinforcement Learning, Algoritmo PPO, Algoritmo REINFORCE, Unicycle Kinematics, Trajectory Tracking, Navigation, Obstacle Avoidance, LIDAR",
            description: "Assignment finale e più importante del corso di Optimization and Learning for Robot Control. Esplorate diverse tecniche di reinforcement learning applicate a un unicycle. Implementato il trajectory tracking tramite l'algoritmo REINFORCE e l'algoritmo PPO (Proximal Policy Optimization) per risolvere un problema completo di navigazione libera in un ambiente denso di ostacoli (come mostrato nella preview).",
            preview: "/assets/project-previews/preview-orc.mp4",
            report: "/assets/projet-reports/report-orc.pdf",
            github: "https://github.com/orgs/orc-podavini-grisenti/repositories",
            demo: ""
        },
        {
            id: "humanoid-tsid",
            title: "REACTIVE CONTROL (TSID) on HUMANOID ROBOT",
            subtitle: "OPTIMIZATION & LEARNING FOR ROBOT CONTROL",
            topics: "Controllo Reattivo, Task Space Inverse Dynamics (TSID), Robot Umanoide",
            description: "Primo assignment del corso di Optimization and Learning for Robot Control. Sviluppo di un framework di controllo reattivo basato su Task Space Inverse Dynamics (TSID) per permettere ad un robot umanoide di tracciare traiettorie complesse ed eseguire movimenti di camminata mantenendo l'equilibrio dinamico.",
            preview: "/assets/project-previews/preview-reactive-control.png",
            report: "/assets/projet-reports/report-reactive-control.pdf",
            github: "https://github.com/orgs/orc-podavini-grisenti/repositories",
            demo: ""
        },
        {
            id: "ur5-optimal-control",
            title: "OPTIMAL CONTROL for UR5 MANIPULATOR",
            subtitle: "OPTIMIZATION & LEARNING FOR ROBOT CONTROL",
            topics: "Controllo Ottimo, Manipolatore UR5, Ottimizzazione di Traiettorie",
            description: "Secondo assignment del corso di Optimization and Learning for Robot Control, incentrato sul Controllo Ottimo. Applicazione di tecniche di ottimizzazione per trajectory tracking e path tracking a un braccio robotico UR5.",
            preview: "/assets/project-previews/preview-optimal-control.jpeg",
            report: "/assets/projet-reports/report-optimal-control.pdf", 
            github: "https://github.com/orgs/orc-podavini-grisenti/repositories",
            demo: ""
        },
        {
            id: "automated-planning",
            title: "INTERPLANETARY MUSEUM VAULT",
            subtitle: "AUTOMATED PLANNING, THEORY AND PRACTICE",
            topics: "Pianificazione Classica, Pianificazione Temporale, Hierarchical Task Networks, PDDL, HDDL",
            description: "Progetto di Task Planning ambientato in un 'Interplanetary Museum Vault'. Implementazione e confronto delle performance di diverse tecniche di pianificazione e molteplici solver (classici, temporali e reti HTN) per scoprirne peculiarità e limiti.",
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
            description: "Questo progetto esplora le tecniche di Parameter Efficient Fine Tuning (PEFT) applicate al modello CLIP per risolvere problemi di classificazione di immagini. Abbiamo implementato e confrontato diversi metodi PEFT, tra cui CoCoOp, CLIP-LoRA e DISEFT, per valutarne le prestazioni in scenari di few-shot learning.",
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
            description: "Questo progetto si concentra sul Language Modelling (LM) e sul Natural Language Understanding (NLU). Sono state confrontate diverse architetture, includendo modelli basati su LSTM con layer di dropout e tecniche di ottimizzazione avanzate come AdamW e NT-AvSGD, oltre a modelli basati su transformer come BERT.",
            preview: "/assets/project-previews/preview-nlu.png",
            report: "/assets/projet-reports/report-lm-nlu.pdf",
            github: "https://github.com/LucaPoda/NLU_PROJECT",
            demo: ""
        },
        {
            id: "claw-machine",
            title: "CLAW MACHINE",
            subtitle: "EMBEDDED SOFTWARE FOR THE INTERNET OF THINGS",
            topics: "Embedded C, MSP-432 (ARM Cortex M4), Controllo Bluetooth, Display LCD, Motori Stepper, Servo, Macchine a Stati Finiti, Stampa 3D",
            description: "Progetto IoT focalizzato sulla progettazione hardware e lo sviluppo software di un carroponte industriale. Per fini dimostrativi, il sistema è stato equipaggiato con un modulo di presa a ragno (claw) per simulare una macchinetta pesca-peluche. Realizzato interamente da zero: dal design del telaio in alluminio alla stampa 3D di componenti custom, fino all'ingegnerizzazione dell'elettronica e dell'architettura software in C. Presentato agli ICT Days 2024 (Fablab Trento) all'interno di uno scenario di automazione logistica ferroviaria in collaborazione con il team di Rusty Railways.",
            preview: "/assets/project-previews/preview-embedded-software-iot.png",
            report: "https://github.com/Clown-Machine/ClawMachine/blob/main/README.md",
            github: "https://github.com/Clown-Machine/ClawMachine",
            demo: "https://youtu.be/jCsASMP_P0s?si=dVV_ODnANKmjaA7-"
        },
        {
            id: "visual-hive",
            title: "VISUAL-HIVE",
            subtitle: "PROGETTO PERSONALE",
            topics: "C++, Open CV, Protocollo MIDI, Ableton Link, Multithreading, Elaborazione Dati Real-time",
            description: "Software VJ sviluppato su misura per esigenze specifiche durante eventi live, con focus su semplicità e prestazioni a bassissima latenza. Consente la sovrapposizione fluida di loghi e scritte su loop video di background, applicando in tempo reale effetti come strobo e movimenti a tempo di musica. Sfruttando Ableton Link, Visual-Hive si sincronizza con i software da DJ estraendo BPM e struttura del brano. Attualmente interfacciato via CLI, è in sviluppo una GUI dedicata e una mappatura MIDI completa.",
            preview: "/assets/project-previews/preview-visual-hive.png",
            report: "",
            github: "https://github.com/LucaPoda/visual-hive",
            demo: ""
        }
    ],
    education: [
        {
            level: "Master",
            title: "LAUREA MAGISTRALE:",
            course: "Artificial Intelligence Systems",
            logo: "/assets/logos/logo-unitn.jpg",
            period: "2024 - IN CORSO",
            graduationDate: "03/2027 (PREVISTA)",
            finalGrade: "/",
            thesisTitle: "/",
            skills: "Motion Planning | Task Planning | Deep Learning | Reinforcement Learning | Robotic Perception | Computer Vision | Natural Language Understanding",
            thesisPdf: "",
            github: ""
        },
        {
            level: "Bachelor",
            title: "LAUREA TRIENNALE:",
            course: "Informatica",
            logo: "/assets/logos/logo-unitn.jpg",
            period: "2021 - 2024",
            graduationDate: "17/09/2024",
            finalGrade: "98/110",
            thesisTitle: "MOVE FUZZER",
            skills: "C | C++ | Python | Rust | Embedded C | Applicazioni Embedded | Linux Shell | Git | Algoritmi e Strutture Dati | Sistemi Operativi | Stampa 3D | Progettazione 3D",
            thesisPdf: "/assets/projet-reports/thesis-bacherold.pdf",
            github: "https://github.com/LucaPoda/move-fuzzer/"
        },
        {
            level: "Diploma",
            title: "DIPLOMA DI MATURITÀ:",
            course: "Informatica e Telecomunicazioni",
            logo: "/assets/logos/logo-iis-cerebotani.jpeg",
            period: "2016 - 2021",
            graduationDate: "26/06/2021",
            finalGrade: "100/100",
            thesisTitle: "FULL STACK WEB APP",
            skills: "C | C++ | Java | C# | Sviluppo Web Full Stack | SQL | JavaScript | Sviluppo Videogiochi | Reti e Networking | Git",
            thesisPdf: "",
            github: "https://github.com/LucaPoda/try_my_challenge"
        }
    ],
    jobs: [
        {
            role: "SVILUPPATORE SOFTWARE",
            companyLogo: "/assets/logos/logo-cualeva.png",
            company: "CUALEVA S.R.L",
            location: "Puegnago del Garda, BS",
            period: "2019 - 2022",
            jobKind: "PART-TIME EXTRA SCOLASTICO*",
            stack: ".NET",
            note: "*Iniziato come tirocinio e rapidamente evoluto in posizione part-time durante l'ultimo anno di superiori. Passato a ruolo full-time estivo nel 2021 e 2022, per poi dimettermi e concentrarmi sul percorso universitario.",
            tech: "C# | .NET Framework | ASP .NET MVC | Entity Framework | AWS | MS Graph | API Google | FTP"
        },
        {
            role: "SVILUPPATORE WEB",
            companyLogo: "/assets/logos/logo-thinkeasy.png",
            company: "THINK EASY S.R.O",
            location: "Praga, Cechia",
            period: "09/2019",
            jobKind: "TIROCINIO SCOLASTICO*",
            stack: "DJANGO, REACT, REDUX",
            note: "*Esperienza pratica nello sviluppo web back-end e front-end durante un tirocinio di un mese all'estero tramite programma PON.",
            tech: "Python | JavaScript | Django | React | Redux"
        }
    ]
};