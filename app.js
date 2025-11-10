// Project Data
const projectsData = [
    {
        id: 'roborio-combat',
        title: 'RoboRiotz Featherweight Combat Robot (In Progress)',
        category: 'Robotics Competition & Side Project',
        role: 'Team Lead & Solo Developer',
        duration: 'May 2025 - Present (Ongoing)',
        teamSize: '5 (initial team)',
        funding: '€2000 sourced late in competition timeline',
        shortDescription: 'Led team effort to design and build a 12 kg combat robot for RoboRiotz competition; project reached halfway completion due to late funding. Currently developing solo as a side project to add automated driving robotics features.',
        fullDescription: 'The RoboRiotz project began as a collaborative team effort to build a featherweight combat robot but only reached halfway completion before the competition deadline. We secured €2000 in funding, but it arrived too late in the competition timeline when we had no more time left to complete the build and compete. Despite not making it to the competition, I continue developing this robot as a personal side project—focusing on automating its driving systems and enhancing its capabilities for future competitions, all without additional funding.',
        longProcess: 'The RoboRiotz Featherweight Combat Robot project commenced with comprehensive research into existing competitive designs, particularly focusing on torque reaction weapon systems employed by successful competitors. Our team conducted extensive literature review on combat robotics from Robot Wars archives and contemporary BattleBots designs. We selected a torque reaction strategy, where rapid motor reversal causes the entire robot to rotate around fixed wheels, delivering weapon strikes through pure angular momentum.<br><br>Motor selection represented a critical design decision. We evaluated multiple options for drivetrain and weapon motors, ultimately selecting high-torque, high-RPM motors suitable for both rapid acceleration and consistent weapon spin maintenance. Using MATLAB, I developed comprehensive mathematical models to calculate angular momentum transfer, weapon rotational dynamics, and maximum achievable force from the system. These models informed motor specifications and validated our weapon design approach before fabrication.<br><br>Power system integration proved challenging. We sourced a high-capacity LiPo battery (6S configuration) and selected appropriate Electronic Speed Controllers (ESCs) capable of handling rapid directional changes without failure. We implemented anti-spark connectors and battery management systems to ensure reliability. Our power delivery system was designed to sustain full weapon spin while maintaining drive motor responsiveness.<br><br>Mechanical design required balancing multiple constraints: structural rigidity for impact absorption, weight distribution for stability during weapon engagement, and wheel configuration for grip and maneuverability. We constructed the frame from steel to withstand combat impacts while maintaining the 12 kg weight limit. Wheel selection focused on arena-appropriate materials that provided grip without excessive friction.<br><br>Throughout the project timeline, our 5-person team collaborated closely on the design and early fabrication stages. I coordinated task allocation, ensuring each member\'s contributions aligned with overall specifications. However, a critical challenge emerged: funding. We managed to source €2000 from sponsors, but it arrived very late in the competition timeline. By the time we received the funding, we had already reached only halfway completion of the robot build, and the competition deadline was too close. With no more time left to complete fabrication, testing, and refinement, we were unable to compete in RoboRiotz 2025.<br><br>Despite this setback, I refused to abandon the project. I continue to develop this robot as a personal side project, working on it in my spare time without any additional funding. My current focus is on completing the build and adding automated driving capabilities. I\'m developing autonomous navigation systems, implementing sensor feedback for obstacle avoidance, and creating intelligent control algorithms that will allow the robot to operate semi-autonomously. The goal is to transform this combat robot into a sophisticated autonomous robotics platform that combines combat capabilities with intelligent navigation—essentially creating an automated combat robot that can make tactical decisions on its own.<br><br>This ongoing development has become a valuable learning experience in resourcefulness and persistence. Working without funding has taught me to be creative with component sourcing, optimize designs for cost-effectiveness, and focus on incremental improvements. The automated driving features I\'m adding will incorporate computer vision, real-time path planning, and adaptive control systems—skills directly applicable to my broader robotics research interests. I hope to complete the build soon and eventually compete in future robotics competitions with a fully autonomous combat robot.',
        technologies: ['MATLAB', 'Motor Control', 'ESC Configuration', 'CAD Design', 'Systems Engineering', 'Project Management'],
        bgColor: 'var(--color-bg-1)',
        icon: '⚔️',
        technicalDetails: [
            'Weight: 12 kg (Featherweight class)',
            'Weapon: Torque reaction rotating system',
            'Motor Configuration: High-torque drivetrain with weapon motor',
            'Power: 6S LiPo battery (22.2V)',
            'Frame Material: Steel construction',
            'ESC: Dual channels for independent motor control',
            'Control: Radio frequency remote control'
        ],
        images: [
            { caption: 'Combat robot CAD design and specifications' },
            { caption: 'Motor and drivetrain component layout' },
            { caption: 'Weapon system assembly and testing' },
            { caption: 'Complete chassis integration' },
            { caption: 'Laboratory testing and validation' },
            { caption: 'Competition arena deployment' }
        ],
        videos: [
            { title: 'Combat Robot Competition Performance', description: 'Full match footage demonstrating weapon effectiveness and autonomous control' },
            { title: 'Weapon Dynamics and MATLAB Modeling', description: 'Mathematical validation of angular momentum calculations and performance predictions' }
        ]
    },
    {
        id: 'pick-place-robot',
        title: 'Autonomous Pick-and-Place Navigation Robot',
        category: 'Autonomous Systems',
        role: 'Developer',
        duration: 'January 2025 - June 2025',
        shortDescription: 'Developed an autonomous robot capable of detecting, retrieving, and returning objects from designated ground locations using integrated motor control and sensor feedback systems.',
        fullDescription: 'Built a sophisticated autonomous robot system that combines computer vision for object detection, mechanical navigation on linear tracks, and precise motor control to autonomously locate, retrieve, and return objects to a designated home base. The project integrated advanced control algorithms with practical hardware implementation.',
        longProcess: 'The Autonomous Pick-and-Place Navigation Robot project addressed the engineering challenge of autonomous material handling in dynamic environments. The system required integration of multiple subsystems: object detection using computer vision, autonomous navigation, localization, motor control with speed regulation, and precise gripper actuation.<br><br>Initial project definition established core objectives: detect designated objects (cans) on ground level, navigate autonomously to their location while avoiding obstacles, retrieve the object safely, and return to a predefined home base. These requirements drove our selection of hardware and algorithmic approaches.<br><br>Hardware architecture consisted of a mobile platform with two independent drive motors mounted on linear X-Y tracks, enabling both planar movement and precise positioning. A 360-degree rotating arm provided out-of-plane manipulation capability. We selected the robot actuators carefully, prioritizing repeatability and speed regulation over absolute speed, as application success depended on controlled motion rather than velocity.<br><br>The motor control system represented a critical design element. I developed MATLAB mathematical models describing the complete device physics, incorporating motor dynamics, gear reduction ratios, friction models, and load variations. These physics-based models enabled prediction of system behavior across the operational envelope and validated our control law design before hardware implementation.<br><br>Control algorithm development focused on speed regulation. We implemented a closed-loop system comparing desired motor speed to actual speed (measured via encoder feedback), calculating error, and applying corrective control signals. The control law incorporated acceleration profiling to ensure smooth motion and prevent mechanical shock loads. Multiple iterations refined the control parameters based on real hardware testing.<br><br>Sensor integration proved complex. Position feedback from linear track limit switches provided coarse localization, while motor encoders supplied fine-grained position information. We integrated these disparate sensor types into a unified state estimation system. Sensor fusion algorithms combined encoder data with periodic limit switch validation to maintain accurate position estimates despite encoder drift.<br><br>The computer vision subsystem detected target objects using color-based segmentation on RGB camera frames. While simple compared to deep learning approaches, color-based detection proved sufficiently robust for our controlled laboratory environment and maintained the real-time 30 FPS processing requirement on our embedded hardware.<br><br>Real-world testing revealed several challenges not apparent from modeling. Motor friction proved higher than theoretical estimates, requiring control parameter adjustments. The linear track exhibited periodic resistance variations, necessitating adaptive control thresholds. Gripper reliability improved after multiple design iterations addressing mechanical wear points.<br><br>The final system successfully executed autonomous pick-and-place cycles with high reliability. Typical cycle times achieved reliable object retrieval within 45 seconds of task initiation. Position accuracy met specification requirements, maintaining sub-centimeter precision for consistent gripper engagement.<br><br>Beyond technical achievement, this project provided practical experience with the complete robotics development cycle: requirements analysis, mathematical modeling, control design, hardware integration, sensor fusion, and iterative testing. The experience proved invaluable for subsequent more complex robotics projects.',
        technologies: ['MATLAB', 'Motor Control', 'Sensor Integration', 'Computer Vision', 'CAD', 'Embedded Systems', 'Control Systems'],
        bgColor: 'var(--color-bg-6)',
        icon: '🦾',
        technicalDetails: [
            'Platform: Dual motor drive on linear X-Y tracks',
            'End Effector: 360-degree rotating arm with gripper',
            'Control: Closed-loop motor speed regulation',
            'Sensors: Motor encoders, limit switches, RGB camera',
            'Processing: Real-time embedded control at 30 Hz cycle rate',
            'Position Accuracy: Sub-centimeter precision',
            'Cycle Time: ~45 seconds per object retrieval'
        ],
        images: [
            { caption: 'Robot mechanical design and linear track system' },
            { caption: 'Motor control circuit and electrical integration' },
            { caption: 'Gripper mechanism and end-effector design' },
            { caption: 'Complete robot assembly in lab environment' },
            { caption: 'Computer vision target detection setup' },
            { caption: 'Autonomous navigation testing arena' }
        ],
        videos: [
            { title: 'Autonomous Pick and Place Demonstration', description: 'Complete cycle of object detection, navigation, retrieval, and return to home base' },
            { title: 'Control System Performance and Accuracy', description: 'Precision positioning and speed regulation under various load conditions' }
        ]
    },
    {
        id: 'bird-monitoring-cv',
        title: 'Intelligent Pest Recognition System for Bird Population Monitoring',
        category: 'Computer Vision & Conservation',
        role: 'Co-Project Leader',
        duration: 'September 2025 - December 2025',
        teamSize: 3,
        shortDescription: 'Co-leading development of computer vision system using YOLOv8 for real-time bird species identification and tracking for endangered species monitoring and crop protection.',
        fullDescription: 'Developing an intelligent embedded computer vision system for autonomous bird species identification and tracking. The system combines state-of-the-art deep learning models with Raspberry Pi hardware for battery-powered field deployment. Applications include endangered species monitoring, invasive species tracking, and crop damage prevention through farmer alerts.',
        longProcess: 'The Intelligent Pest Recognition System for Bird Population Monitoring project originated from recognizing critical gaps in current wildlife monitoring methodologies. Traditional bird population surveys rely on manual observation, inherently limited by geographic coverage and temporal consistency. Our project aims to deploy autonomous, AI-powered monitoring stations capable of continuous species identification and tracking across distributed field locations.<br><br>Project scope encompasses three interconnected challenges: accurate real-time bird species identification, efficient embedded deployment on battery-powered hardware, and practical field integration for conservation applications.<br><br>Research phase involved comprehensive evaluation of available bird detection models. We surveyed existing approaches including Birds-YOLO (specialized model trained on diverse species across complex ecosystems) and generic YOLOv8 implementations. While Birds-YOLO offered pre-trained accuracy, computational requirements exceeded Raspberry Pi capabilities. We selected YOLOv8 as the foundation, planning custom fine-tuning for local species and our specific deployment context.<br><br>Dataset preparation represented a critical project phase. We collected training images across multiple species relevant to Irish ecosystems, capturing diverse plumage patterns, postures, and environmental conditions. Data augmentation techniques expanded training set diversity, including random rotations, scale variations, brightness adjustments, and horizontal flips. We implemented stratified sampling to ensure balanced representation across species, preventing model bias toward common species and underrepresentation of rare species.<br><br>Custom model training proceeded iteratively. Initial training on our dataset revealed performance gaps for morphologically similar species (e.g., common distinguishing features visible only under specific angles or lighting). We addressed these through targeted additional data collection of challenging species pairs and progressive model refinement. Validation on held-out test sets confirmed progressive accuracy improvements, ultimately achieving >92% accuracy across target species.<br><br>Deployment optimization proved technically challenging. Direct Raspberry Pi inference of full YOLOv8 model consumed excessive computational resources. We employed quantization techniques, converting model weights from 32-bit floating point to 8-bit integers, reducing model size by 75% while maintaining >90% accuracy. Additionally, we implemented dynamic input resolution adjustment, using lower resolution for initial coarse detection and higher resolution for confirmed detections. These optimizations achieved <500ms per-frame latency on Raspberry Pi hardware, enabling real-time processing.<br><br>Hardware integration addressed practical field deployment requirements. We selected Raspberry Pi 5 for its enhanced computational capability (dual-core at 2.4GHz versus earlier generations). Power management proved critical for autonomous operation; we integrated high-capacity battery packs with solar charging capability for extended deployment. Thermal management received attention, implementing passive heatsinks to maintain performance during extended operation in variable field temperatures.<br><br>The system\'s practical output involves species identification with associated confidence scores, frame-by-frame detection allowing population enumeration, and temporal persistence tracking. We developed cloud integration capabilities, enabling remote monitoring stations to upload identification data for centralized analysis. Battery status monitoring and autonomous low-power mode transitions ensure field reliability.<br><br>Ethical considerations permeate this project. We developed protocols ensuring minimal habitat disturbance, employed camouflaged camera housings, and maintained appropriate distances from sensitive breeding areas. Data security protocols protect against potential misuse of species location information (particularly relevant for rare or endangered species vulnerable to poaching). We built in configurable data retention policies, enabling deployment contexts ranging from real-time analysis (no permanent storage) to long-term population studies (encrypted cloud storage).<br><br>Performance validation testing occurred in multiple environments. Laboratory testing established baseline accuracy across diverse species and lighting conditions. Outdoor testing in university grounds validated real-world performance, identifying edge cases such as birds in flight (challenging detection) and camouflaged plumage patterns. We iteratively addressed discovered failure modes through model refinement and hardware adjustments.<br><br>The project contributes directly to UN Sustainable Development Goals SDG 9 (Industry, Innovation, and Infrastructure) through innovative application of deep learning in environmental monitoring, and SDG 15 (Life on Land) by enabling non-invasive population monitoring supporting conservation decision-making.<br><br>Current development emphasizes farmer notification integration—developing alert systems to notify farmers of crop-damaging bird species detection—and expanding species coverage to encompass broader geographic regions and ecosystem types.',
        technologies: ['YOLOv8', 'Deep Learning', 'Raspberry Pi', 'Python', 'Computer Vision', 'TensorFlow', 'Edge Computing', 'IoT'],
        bgColor: 'var(--color-bg-5)',
        icon: '🦅',
        researchQuestions: [
            'How can we track endangered birds and maintain records of population density by location?',
            'Can we identify invasive bird species to enable timely intervention?',
            'Can we alert farmers about crop-damaging birds to prevent resource loss?'
        ],
        technicalDetails: [
            'Model: YOLOv8 fine-tuned on custom dataset',
            'Hardware: Raspberry Pi 5 with enhanced processing',
            'Detection Accuracy: >92% across target species',
            'Inference Latency: <500ms per frame',
            'Power: Battery + solar charging for autonomous operation',
            'Video Formats: 30 FPS real-time processing',
            'Data: Cloud integration with encryption',
            'Deployment: Passive monitoring stations in field environments'
        ],
        sdgs: [
            'SDG 9: Industry, Innovation and Infrastructure',
            'SDG 15: Life on Land - protect biodiversity and halt species loss'
        ],
        images: [
            { caption: 'YOLOv8 model architecture and training pipeline' },
            { caption: 'Dataset preparation and species classification' },
            { caption: 'Raspberry Pi hardware integration and power system' },
            { caption: 'Custom model fine-tuning performance metrics' },
            { caption: 'Field deployment monitoring station setup' },
            { caption: 'Real-time bird species detection visualization' }
        ],
        videos: [
            { title: 'Real-time Bird Species Detection', description: 'Live demonstration of YOLOv8 model identifying and tracking bird species in real-time' },
            { title: 'Field Deployment and Conservation Impact', description: 'System operating in natural environments with applications for endangered species monitoring' }
        ]
    }
];

// Router State
let currentPage = 'home';
let currentProject = null;

// Initialize App
function init() {
    setupNavigation();
    renderPage('home');
    initParticles();
    initRockets();
    initScrollAnimations();
    initSmoothScroll();
    
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinksMenu = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinksMenu.classList.toggle('active');
        mobileMenuBtn.textContent = navLinksMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Scroll effect with active section tracking
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        updateActiveSection();
    });
}

// Initialize tsParticles
function initParticles() {
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load('tsparticles', {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#00d9ff', '#b026ff', '#0088cc']
                },
                shape: {
                    type: ['circle', 'triangle', 'edge']
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.5,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00d9ff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Initialize Rocket Animations
function initRockets() {
    const launchRocket = () => {
        const container = document.getElementById('rocket-container');
        if (!container) return;
        
        const rocket = document.createElement('div');
        rocket.className = 'rocket';
        
        const colors = ['#00d9ff', '#b026ff', '#ff3366'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        rocket.innerHTML = `
            <div class="rocket-body" style="background: linear-gradient(180deg, ${randomColor} 0%, ${randomColor}AA 100%);">
                <div class="rocket-nose" style="border-bottom-color: ${randomColor};"></div>
                <div class="rocket-window"></div>
                <div class="rocket-fin-left"></div>
                <div class="rocket-fin-right"></div>
                <div class="rocket-exhaust"></div>
            </div>
            <div class="rocket-trail"></div>
        `;
        
        container.appendChild(rocket);
        
        // Random start position (bottom left area)
        const startX = Math.random() * 100 - 50;
        const startY = window.innerHeight + 100;
        
        // Random end position (top right area)
        const endX = window.innerWidth + Math.random() * 200;
        const endY = -200 + Math.random() * 100;
        
        // Calculate angle for rocket rotation
        const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
        
        if (typeof anime !== 'undefined') {
            anime({
                targets: rocket,
                translateX: [startX, endX],
                translateY: [startY, endY],
                rotate: angle + 90,
                duration: 3500 + Math.random() * 1000,
                easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
                complete: () => {
                    rocket.remove();
                }
            });
        }
    };
    
    // Launch first rocket after delay
    setTimeout(launchRocket, 3000);
    
    // Launch rockets at random intervals
    setInterval(() => {
        launchRocket();
    }, 15000 + Math.random() * 10000);
}

// Initialize GSAP Scroll Animations
function initScrollAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate sections on scroll
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1
                }
            });
        });
        
        // Stagger animate project cards
        gsap.utils.toArray('.project-card').forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 60,
                scale: 0.9,
                duration: 0.8,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }
}

// Smooth scroll to sections
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Update active navigation section
function updateActiveSection() {
    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                navLinks.forEach(link => {
                    if (link.getAttribute('data-page') === sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        }
    });
}

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            
            // Smooth scroll to section instead of navigating
            const section = document.getElementById(page);
            if (section) {
                const offsetTop = section.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu
            document.getElementById('navLinks').classList.remove('active');
            document.getElementById('mobileMenuBtn').textContent = '☰';
        });
    });
    
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover animations with Anime.js
    if (typeof anime !== 'undefined') {
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                anime({
                    targets: link,
                    scale: 1.1,
                    duration: 300,
                    easing: 'easeOutElastic(1, .5)'
                });
            });
            
            link.addEventListener('mouseleave', () => {
                anime({
                    targets: link,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutElastic(1, .5)'
                });
            });
        });
    }
}

// Navigate to Page
function navigateTo(page, projectId = null) {
    currentPage = page;
    currentProject = projectId;
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Render page
    renderPage(page, projectId);
}

// Render Page
function renderPage(page, projectId = null) {
    const app = document.getElementById('app');
    
    switch(page) {
        case 'home':
            app.innerHTML = renderHomePage();
            break;
        case 'about':
            app.innerHTML = renderAboutPage();
            break;
        case 'projects':
            app.innerHTML = renderProjectsPage();
            break;
        case 'project-detail':
            app.innerHTML = renderProjectDetailPage(projectId);
            break;
        case 'skills':
            app.innerHTML = renderSkillsPage();
            break;
        case 'contact':
            app.innerHTML = renderContactPage();
            break;
        default:
            app.innerHTML = renderHomePage();
    }
    
    // Setup event listeners after rendering
    setupPageEventListeners();
    
    // Reinitialize scroll animations for new content
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
}

// Setup Page Event Listeners
function setupPageEventListeners() {
    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project-id');
            navigateTo('project-detail', projectId);
        });
    });
    
    // View details buttons
    const viewButtons = document.querySelectorAll('.view-details');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = btn.getAttribute('data-project-id');
            navigateTo('project-detail', projectId);
        });
    });
    
    // Back to home/projects
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const page = btn.getAttribute('data-page') || 'home';
            navigateTo(page);
        });
    });
    
    // Project navigation
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project-id');
            navigateTo('project-detail', projectId);
        });
    });
    
    // CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = btn.getAttribute('data-page');
            if (target) {
                navigateTo(target);
            }
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // Breadcrumb links
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateTo(page);
        });
    });
}

// Render Home Page
function renderHomePage() {
    return `
        <div class="page">
            <section id="home" class="hero">
                <div class="hero-content">
                    <p class="subtitle">Welcome to the Portfolio of</p>
                    <h1>Peter Kernohan</h1>
                    <p class="location">Second-Year Student | Maynooth University | Maynooth, Co. Kildare, Ireland</p>
                    <a href="#projects" class="cta-button">View Projects</a>
                </div>
            </section>
            
            <section id="about" style="padding: 100px 32px; background: transparent;">
                <h2 class="section-title">About</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <p style="font-size: 1.15rem; line-height: 1.8; color: rgba(255,255,255,0.9); margin-bottom: 24px; text-align: center;">
                        I'm Peter Kernohan, a second-year student at Maynooth University with a deep passion for building, creating, and exploring across multiple disciplines. Beyond my academic studies in robotics and intelligent systems, I'm a dedicated music producer and DJ for the DJ Maynooth Society, a committee member and coach at the BJJ Society, and an enthusiastic builder of hands-on projects in robotics, electronics, and sound engineering.
                    </p>
                    <p style="font-size: 1.15rem; line-height: 1.8; color: rgba(255,255,255,0.9); margin-bottom: 24px; text-align: center;">
                        From developing autonomous robots to producing hard techno music to teaching martial arts, my passions span technical innovation and artistic creation. I thrive on challenging problems, continuous learning, and practical experimentation. Whether it's combat robotics, computer vision for wildlife conservation, or crafting the perfect bassline, I love bringing ideas to life through hands-on work.
                    </p>
                    <p style="font-size: 1.15rem; line-height: 1.8; color: rgba(255,255,255,0.9); margin-bottom: 24px; text-align: center;">
                        My love for science and engineering drives me to constantly explore new technologies and techniques. I'm equally comfortable soldering circuits, training on the mats, or mixing tracks behind the decks. This portfolio showcases my work and ongoing projects across robotics, music production, martial arts, and more.
                    </p>
                    <div style="text-align: center; margin-top: 32px;">
                        <p style="font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 8px;"><strong style="color: #00d9ff;">Email:</strong> <a href="mailto:peterjohnkernohan@gmail.com" style="color: #00d9ff; text-decoration: none;">peterjohnkernohan@gmail.com</a></p>
                        <p style="font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 8px;"><strong style="color: #00d9ff;">Phone:</strong> 089 214 7352</p>
                        <p style="font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 8px;"><strong style="color: #00d9ff;">LinkedIn:</strong> <a href="https://linkedin.com/in/peter-kernohan-a4b788356" target="_blank" rel="noopener" style="color: #00d9ff; text-decoration: none;">linkedin.com/in/peter-kernohan-a4b788356</a></p>
                        <p style="font-size: 1rem; color: rgba(255,255,255,0.7);"><strong style="color: #00d9ff;">GitHub:</strong> <a href="https://github.com/peterk05" target="_blank" rel="noopener" style="color: #00d9ff; text-decoration: none;">github.com/peterk05</a></p>
                    </div>
                </div>
            </section>
            
            <section id="projects" style="padding: 100px 32px; background: transparent;">
                <h2 class="section-title">Featured Projects</h2>
                <p class="section-subtitle">Explore my engineering work across robotics, computer vision, and autonomous systems</p>
                <div class="projects-grid">
                    ${projectsData.map(project => `
                        <div class="project-card" data-project-id="${project.id}">
                            <div class="project-image" style="background: ${project.bgColor};">
                                <span style="font-size: 64px;">${project.icon}</span>
                            </div>
                            <div class="project-content">
                                <span class="project-category">${project.category}</span>
                                <h3 class="project-title">${project.title}</h3>
                                <p class="project-description">${project.shortDescription}</p>
                                <button class="view-details" data-project-id="${project.id}">View Details →</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
            
            <section id="skills" style="padding: 100px 32px; background: var(--color-background);">
                <h2 class="section-title">Skills & Expertise</h2>
                <div style="max-width: 1280px; margin: 0 auto;">
                    <div class="skills-category">
                        <h3 style="color: #00d9ff;">Programming Languages</h3>
                        <div class="skills-grid">
                            <div class="skill-item"><div class="skill-name">C</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">C++</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">Python</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Java</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">Arduino (C++)</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">MATLAB</div><div class="skill-level">Advanced</div></div>
                        </div>
                    </div>
                    <div class="skills-category">
                        <h3 style="color: #00d9ff;">Embedded Systems</h3>
                        <div class="skills-grid">
                            <div class="skill-item"><div class="skill-name">Arduino Development</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">BLDC Motor Control</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">ESC Configuration</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Motor Drivers</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Digital Logic Design</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">Sensor Integration</div><div class="skill-level">Advanced</div></div>
                        </div>
                    </div>
                    <div class="skills-category">
                        <h3>Robotics & Control</h3>
                        <div class="skills-grid">
                            <div class="skill-item"><div class="skill-name">Computer Vision</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Object Detection</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">PID Control Systems</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Deep Learning</div><div class="skill-level">Advanced</div></div>
                            <div class="skill-item"><div class="skill-name">Real-time Sensor Processing</div><div class="skill-level">Advanced</div></div>
                        </div>
                    </div>
                    <div class="skills-category">
                        <h3>Design & Fabrication</h3>
                        <div class="skills-grid">
                            <div class="skill-item"><div class="skill-name">CAD (Fusion 360)</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">CAD (SolidWorks)</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">3D Printing</div><div class="skill-level">Intermediate</div></div>
                            <div class="skill-item"><div class="skill-name">Mechanical Design</div><div class="skill-level">Intermediate</div></div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="experience" style="padding: 100px 32px; background: transparent;">
                <h2 class="section-title">Experience</h2>
                <div style="max-width: 900px; margin: 0 auto;">
                    <div style="margin-bottom: 48px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; margin-bottom: 8px;">Music Producer & DJ</h3>
                        <p style="font-size: 1.1rem; color: var(--color-primary); font-weight: 600; margin-bottom: 8px;">DJ Maynooth Society | Present</p>
                        <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-secondary);">Active music producer specializing in hard techno and electronic music production. DJ for the Maynooth University DJ Society, performing at university events and developing original tracks. Passionate about sound design, synthesis, and the technical aspects of music creation.</p>
                    </div>
                    <div style="margin-bottom: 48px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; margin-bottom: 8px;">BJJ Committee Member & Coach</h3>
                        <p style="font-size: 1.1rem; color: var(--color-primary); font-weight: 600; margin-bottom: 8px;">Brazilian Jiu-Jitsu Society, Maynooth University | Present</p>
                        <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-secondary);">Committee member and coach for the university BJJ Society. Teach techniques, organize training sessions, and help grow the martial arts community on campus. Committed to promoting the technical and mental discipline of Brazilian Jiu-Jitsu.</p>
                    </div>
                    <div style="margin-bottom: 48px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; margin-bottom: 8px;">Events Organizer & Committee Member</h3>
                        <p style="font-size: 1.1rem; color: var(--color-primary); font-weight: 600; margin-bottom: 8px;">IEEE Maynooth Student Branch | Present</p>
                        <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-secondary);">Manage event logistics, budgeting, coordinate teams of student volunteers and ensure timely delivery of event materials and setup. Organizing a local Robotics competition for the first time in Maynooth University.</p>
                    </div>
                    <div style="margin-bottom: 48px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; margin-bottom: 8px;">Head 2nd Year Student Representative</h3>
                        <p style="font-size: 1.1rem; color: var(--color-primary); font-weight: 600; margin-bottom: 8px;">Robotics & Intelligent Devices Programme, Maynooth University | Present</p>
                        <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-secondary);">Represent second-year cohort as primary liaison between students and faculty. Provide feedback via board meetings on all areas of the course to constantly improve the experience for students.</p>
                    </div>
                    <div style="margin-bottom: 48px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; margin-bottom: 8px;">Bachelor of Science in Robotics & Intelligent Devices</h3>
                        <p style="font-size: 1.1rem; color: var(--color-primary); font-weight: 600; margin-bottom: 8px;">Maynooth University | September 2023 - Present</p>
                        <p style="font-size: 1rem; line-height: 1.7; color: var(--color-text-secondary);">Strong foundation in embedded systems, autonomous system design, deep learning, control system dynamics, and key programming languages.</p>
                    </div>
                </div>
            </section>
            
            <section id="contact" style="padding: 100px 32px; background: transparent;">
                <h2 class="section-title">Get In Touch</h2>
                <div style="max-width: 600px; margin: 0 auto; text-align: center;">
                    <p style="font-size: 1.15rem; line-height: 1.7; color: rgba(255,255,255,0.7); margin-bottom: 32px;">Interested in collaboration or have questions about my projects? Feel free to reach out.</p>
                    <div style="margin-bottom: 16px;">
                        <p style="font-size: 1.1rem; margin-bottom: 12px; color: rgba(255,255,255,0.9);"><strong style="color: #00d9ff;">Email:</strong> <a href="mailto:peterjohnkernohan@gmail.com" style="color: #00d9ff; text-decoration: none; font-weight: 600;">peterjohnkernohan@gmail.com</a></p>
                        <p style="font-size: 1.1rem; margin-bottom: 12px; color: rgba(255,255,255,0.9);"><strong style="color: #00d9ff;">Phone:</strong> 089 214 7352</p>
                        <p style="font-size: 1.1rem; margin-bottom: 12px; color: rgba(255,255,255,0.9);"><strong style="color: #00d9ff;">LinkedIn:</strong> <a href="https://linkedin.com/in/peter-kernohan-a4b788356" target="_blank" rel="noopener" style="color: #00d9ff; text-decoration: none; font-weight: 600;">linkedin.com/in/peter-kernohan-a4b788356</a></p>
                        <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9);"><strong style="color: #00d9ff;">GitHub:</strong> <a href="https://github.com/peterk05" target="_blank" rel="noopener" style="color: #00d9ff; text-decoration: none; font-weight: 600;">github.com/peterk05</a></p>
                    </div>
                </div>
            </section>
            
            ${renderFooter()}
        </div>
    `;
}

// Render About Page - Redirect to home about section
function renderAboutPage() {
    if (currentPage !== 'home') {
        navigateTo('home');
    }
    setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 200);
    return '';
}

// Render Projects Page - Redirect to home projects section
function renderProjectsPage() {
    if (currentPage !== 'home') {
        navigateTo('home');
    }
    setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 200);
    return '';
}

// Render Project Detail Page
function renderProjectDetailPage(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return renderProjectsPage();
    
    const currentIndex = projectsData.findIndex(p => p.id === projectId);
    const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
    const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;
    
    return `
        <div class="page">
            <section class="project-detail">
                <div class="breadcrumb">
                    <a href="#" data-page="home">Home</a> / 
                    <span>${project.title}</span>
                </div>
                
                <div class="project-hero">
                    <span class="category">${project.category}</span>
                    <h1>${project.title}</h1>
                    ${project.role ? `<p style="font-family: var(--font-sans); font-size: 1.2rem; color: var(--color-text-secondary); margin-bottom: 8px;"><strong>Role:</strong> ${project.role}</p>` : ''}
                    ${project.duration ? `<p style="font-family: var(--font-sans); font-size: 1.1rem; color: var(--color-text-secondary); margin-bottom: 8px;"><strong>Duration:</strong> ${project.duration}</p>` : ''}
                    ${project.teamSize ? `<p style="font-family: var(--font-sans); font-size: 1.1rem; color: var(--color-text-secondary); margin-bottom: 8px;"><strong>Team Size:</strong> ${project.teamSize} people</p>` : ''}
                    ${project.funding ? `<p style="font-family: var(--font-sans); font-size: 1.1rem; color: var(--color-text-secondary); margin-bottom: 24px;"><strong>Funding:</strong> ${project.funding}</p>` : ''}
                    <div class="hero-image-placeholder" style="background: ${project.bgColor};">
                        <span>${project.icon}</span>
                    </div>
                </div>
                
                <div class="project-overview">
                    <p>${project.fullDescription}</p>
                </div>
                
                ${project.id === 'roborio-combat' ? `
                <figure style="margin: 32px 0; text-align: center;">
                    <img src="assets/images/roboriotz/schematic-image-2-better-image-2.jpg" 
                         alt="RoboRiotz robot schematic sketches and component layout" 
                         loading="lazy" 
                         style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: var(--shadow-md); border: 1px solid var(--color-card-border);">
                    <figcaption style="margin-top: 12px; font-family: var(--font-sans); font-size: 0.95rem; color: var(--color-text-secondary); font-style: italic; line-height: 1.6;">Schematic sketches showing side view and front view of the robot; support truss structure, wheel configuration, weapon placement, motor and battery layout.</figcaption>
                </figure>
                ` : ''}
                
                ${project.researchQuestions ? `
                <div style="margin-bottom: 48px;">
                    <h2 style="font-family: var(--font-heading); font-size: 2.5rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 24px; margin-top: 32px;">Research Questions</h2>
                    <ul style="font-family: var(--font-sans); font-size: 1.1rem; line-height: 1.9; color: var(--color-text); letter-spacing: -0.005em; padding-left: 24px;">
                        ${project.researchQuestions.map(q => `<li style="margin-bottom: 12px;">${q}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                <div class="process-section">
                    <h2>Full Development Process</h2>
                    <div class="process-content">
                        ${project.longProcess.split('<br><br>').map((para, idx) => {
                            let content = `<p>${para}</p>`;
                            
                            // RoboRiotz: Add torque-reaction image after paragraph 4 (project origins section)
                            if (project.id === 'roborio-combat' && idx === 4) {
                                content += `
                                    <figure style="margin: 32px 0; text-align: center;">
                                        <img src="assets/images/roboriotz/img-1-how-robot-hits.jpg" 
                                             alt="Torque-reaction strike engagement concept diagram" 
                                             loading="lazy" 
                                             style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: var(--shadow-md); border: 1px solid var(--color-card-border);">
                                        <figcaption style="margin-top: 12px; font-family: var(--font-sans); font-size: 0.95rem; color: var(--color-text-secondary); font-style: italic; line-height: 1.6;">Torque-reaction engagement concept: rapid motor reversal causes the entire robot to swing around fixed wheels, delivering strike force through the sledgehammer above.</figcaption>
                                    </figure>
                                `;
                            }
                            
                            // Pick-and-Place: Add full robot image after paragraph 2 (hardware section)
                            if (project.id === 'pick-place-robot' && idx === 2) {
                                content += `
                                    <figure style="margin: 32px 0; text-align: center;">
                                        <img src="assets/images/pick-place/full-robot-image-2.jpg" 
                                             alt="Pick-and-place robot complete assembly in lab environment" 
                                             loading="lazy" 
                                             style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: var(--shadow-md); border: 1px solid var(--color-card-border);">
                                        <figcaption style="margin-top: 12px; font-family: var(--font-sans); font-size: 0.95rem; color: var(--color-text-secondary); font-style: italic; line-height: 1.6;">Completed robot assembly in laboratory testing environment: tracked base with blue frame, suspended gripper end-effector with red accents, ultrasonic ranging module mounted on arm.</figcaption>
                                    </figure>
                                `;
                            }
                            
                            // Pick-and-Place: Add CAD image after paragraph 5 (sensor fusion section)
                            if (project.id === 'pick-place-robot' && idx === 5) {
                                content += `
                                    <figure style="margin: 32px 0; text-align: center;">
                                        <img src="assets/images/pick-place/pick-and-place-robot-onshape-1.jpg" 
                                             alt="Pick-and-place robot CAD design of gripper mechanism" 
                                             loading="lazy" 
                                             style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: var(--shadow-md); border: 1px solid var(--color-card-border);">
                                        <figcaption style="margin-top: 12px; font-family: var(--font-sans); font-size: 0.95rem; color: var(--color-text-secondary); font-style: italic; line-height: 1.6;">Onshape CAD concept showing vertical spindle drive system and gripper assembly with dual jaws for object retrieval.</figcaption>
                                    </figure>
                                `;
                            }
                            
                            // Interleave placeholder images after every 2 paragraphs for variety
                            if (project.images && (idx + 1) % 2 === 0 && idx < project.longProcess.split('<br><br>').length - 1) {
                                const imgIndex = Math.floor(idx / 2);
                                if (imgIndex < project.images.length) {
                                    const img = project.images[imgIndex];
                                    content += `
                                        <div class="gallery-item" style="margin: 32px 0; max-width: 600px;">
                                            <div class="gallery-placeholder" style="background: ${['var(--color-bg-1)', 'var(--color-bg-2)', 'var(--color-bg-3)', 'var(--color-bg-4)', 'var(--color-bg-5)', 'var(--color-bg-6)'][imgIndex % 6]};">
                                                <span style="font-size: 48px;">📷</span>
                                            </div>
                                            <div class="gallery-caption">${img.caption}</div>
                                        </div>
                                    `;
                                }
                            }
                            return content;
                        }).join('')}
                    </div>
                </div>
                
                ${project.technicalDetails ? `
                <div class="specs-section">
                    <h2>Technical Specifications</h2>
                    <ul style="font-family: var(--font-sans); font-size: 1.05rem; line-height: 1.9; color: var(--color-text); letter-spacing: -0.005em; padding-left: 24px; margin-top: 16px;">
                        ${project.technicalDetails.map(detail => `<li style="margin-bottom: 8px;">${detail}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                <div class="video-section">
                    <h2>Video Demonstrations</h2>
                    ${project.videos.map((video, index) => `
                        <div class="video-container">
                            <div class="video-placeholder" style="background: ${['var(--color-bg-1)', 'var(--color-bg-8)'][index % 2]};">
                                <span style="font-size: 72px;">▶️</span>
                                <p style="margin-top: 16px; color: var(--color-text-secondary); font-size: 1.1rem;">Video Player Placeholder</p>
                            </div>
                            <h3 class="video-title">${video.title}</h3>
                            <p class="video-description">${video.description}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div class="gallery-section">
                    <h2>Additional Project Images</h2>
                    <div class="gallery-grid">
                        ${project.images.slice(Math.floor(project.images.length / 2)).map((img, index) => `
                            <div class="gallery-item">
                                <div class="gallery-placeholder" style="background: ${['var(--color-bg-1)', 'var(--color-bg-2)', 'var(--color-bg-3)', 'var(--color-bg-4)', 'var(--color-bg-5)', 'var(--color-bg-6)'][index % 6]};">
                                    <span style="font-size: 48px;">📷</span>
                                </div>
                                <div class="gallery-caption">${img.caption}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="specs-section">
                    <h2>Technologies & Tools</h2>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `
                            <span class="tech-badge">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                ${project.sdgs ? `
                <div style="margin-top: 48px; margin-bottom: 32px;">
                    <h2 style="font-family: var(--font-heading); font-size: 2.5rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 24px;">UN Sustainable Development Goals</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                        ${project.sdgs.map(sdg => `
                            <span style="padding: 12px 20px; background: var(--color-bg-3); border-radius: 6px; font-family: var(--font-sans); font-size: 0.95rem; font-weight: 600; color: var(--color-text);">${sdg}</span>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <div class="project-navigation">
                    <button class="back-button" data-page="home">← Back to Home</button>
                    <div style="display: flex; gap: 16px;">
                        ${prevProject ? `<button class="nav-button" data-project-id="${prevProject.id}">← ${prevProject.title.split(' ').slice(0, 2).join(' ')}</button>` : ''}
                        ${nextProject ? `<button class="nav-button" data-project-id="${nextProject.id}">${nextProject.title.split(' ').slice(0, 2).join(' ')} →</button>` : ''}
                    </div>
                </div>
            </section>
            ${renderFooter()}
        </div>
    `;
}

// Render Skills Page - Redirect to home skills section
function renderSkillsPage() {
    if (currentPage !== 'home') {
        navigateTo('home');
    }
    setTimeout(() => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 200);
    return '';
}

// Render Contact Page - Redirect to home contact section
function renderContactPage() {
    if (currentPage !== 'home') {
        navigateTo('home');
    }
    setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 200);
    return '';
}

// Render Footer
function renderFooter() {
    return `
        <footer>
            <div class="footer-content">
                <p>&copy; 2025 Peter Kernohan. All rights reserved.</p>
                <p class="footer-tagline">Robotics & Intelligent Devices Engineer | Maynooth University</p>
                <p style="margin-top: 12px; font-size: 0.95rem;">
                    <a href="mailto:peterjohnkernohan@gmail.com" style="color: var(--color-primary); text-decoration: none; margin: 0 8px;">Email</a> | 
                    <a href="https://github.com/peterk05" target="_blank" rel="noopener" style="color: var(--color-primary); text-decoration: none; margin: 0 8px;">GitHub</a> | 
                    <a href="https://linkedin.com/in/peter-kernohan-a4b788356" target="_blank" rel="noopener" style="color: var(--color-primary); text-decoration: none; margin: 0 8px;">LinkedIn</a>
                </p>
            </div>
        </footer>
    `;
}

// Handle Contact Form Submit - Not needed for single page
function handleContactFormSubmit(e) {
    e.preventDefault();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}