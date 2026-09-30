export interface Project {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Web Development' | 'Internship Project';
  status: 'Completed' | 'Currently Building' | 'In Development' | 'Prototype';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  algorithms?: string[];
  workflow?: string[];
  whatILearned: string;
  highlights?: string[];
  isFeatured?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'AI / ML' | 'Development' | 'Data';
  usedIn: string[];
  notes?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: 'Internship' | 'Hackathon';
  location?: string;
  description: string;
  keyTakeaways: string[];
  projectsInvolved?: string[];
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  skillsLearned: string[];
}

export const PERSONAL_INFO = {
  name: "Kavya Sri E",
  role: "AI & Data Science Student",
  subtitles: [
    "Machine Learning Enthusiast",
    "Frontend / Full-Stack Learner"
  ],
  tagline: "I learn by building, explore AI, and turn ideas into working projects.",
  location: "Tamil Nadu, India",
  college: "J.N.N. Institute of Engineering",
  degree: "B.Tech Artificial Intelligence and Data Science",
  currentYear: "2nd Year",
  cgpa: "9.21",
  expectedGraduation: "2029",
  email: "ekavyasri36@gmail.com",
  profileImage: "/src/assets/images/kavya_profile_photo_1790777609526.jpg",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  bio: "I am a second-year B.Tech student in Artificial Intelligence and Data Science at J.N.N. Institute of Engineering with a 9.21 CGPA. I believe the strongest way to understand machine learning and software engineering is by getting my hands dirty with real datasets, algorithms, and practical code. I have trained and evaluated multiple ML models across domains like healthcare, agriculture, and water safety, participated in intensive hackathons, completed internships with InAmigos Foundation and NIT Puducherry, and am now expanding into modern frontend and full-stack development through projects like HomeHive."
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: "Python", category: "Programming", usedIn: ["Water Quality Prediction", "Student Performance", "Healthcare Disease Prediction", "Smart Traffic Management", "Crop Disease Detection", "Banknote Authentication"], notes: "Primary language for ML modeling, data wrangling, and algorithm development." },
  { name: "Java", category: "Programming", usedIn: ["Object-Oriented Programming Coursework", "Core Data Structures"], notes: "Used for core programming fundamentals and OOP logic." },
  
  // AI / ML
  { name: "Machine Learning", category: "AI / ML", usedIn: ["All ML Projects", "InAmigos Internship", "NIT Puducherry Internship"], notes: "Supervised classification, model pipelines, train-test splits, and validation." },
  { name: "scikit-learn", category: "AI / ML", usedIn: ["Water Quality Prediction", "Healthcare Disease Prediction", "Student Performance"], notes: "Model training, pipeline building, Random Forest, Logistic Regression, Decision Trees." },
  { name: "Basic data preprocessing", category: "AI / ML", usedIn: ["Water Quality Prediction", "Healthcare Disease Prediction"], notes: "Handling missing values, feature scaling, label encoding, and leakage prevention." },
  { name: "Model training", category: "AI / ML", usedIn: ["Crop Disease Detection", "Smart Traffic Management", "Hand Gesture Recognition"], notes: "Fitting models to training splits and tracking learning behavior." },
  { name: "Model evaluation", category: "AI / ML", usedIn: ["Water Quality Prediction", "Student Performance", "Hand Gesture Recognition"], notes: "Confusion matrix, classification reports, accuracy, precision, and recall metrics." },
  { name: "Classification", category: "AI / ML", usedIn: ["Banknote Authentication", "Healthcare Disease", "Smart Traffic"], notes: "Binary and multi-class target categorization." },
  { name: "Working with datasets", category: "AI / ML", usedIn: ["Student Performance Dataset", "Banknote Dataset", "Water Potability Data"], notes: "Cleaning, auditing distributions, identifying target variables." },
  
  // Development
  { name: "HTML5", category: "Development", usedIn: ["HomeHive Frontend", "Personal Portfolio", "Web Experiments"], notes: "Semantic document structure and accessible web markup." },
  { name: "CSS3", category: "Development", usedIn: ["HomeHive Frontend", "Personal Portfolio", "Responsive Layouts"], notes: "Modern flexbox, grid, glassmorphism, transitions, and mobile adaptations." },
  { name: "JavaScript", category: "Development", usedIn: ["HomeHive", "Personal Portfolio", "Interactive AI Lab"], notes: "ES6+, DOM interactions, async flows, and modular programming." },
  { name: "React", category: "Development", usedIn: ["HomeHive (In Progress)", "Personal Portfolio"], notes: "Functional components, custom hooks, reactive state, and modular architecture." },
  { name: "Frontend Development", category: "Development", usedIn: ["HomeHive UI", "Portfolio Site"], notes: "Building responsive, user-friendly digital interfaces." },
  { name: "Full-Stack Learning", category: "Development", usedIn: ["HomeHive Project"], notes: "Currently exploring Node.js, Express, REST APIs, and MongoDB for service workflows." },

  // Data
  { name: "Excel", category: "Data", usedIn: ["Water Quality Dataset", "Deloitte Job Simulation", "Forage Simulations"], notes: "Spreadsheet data organization, initial tabular inspection, and filtering." },
  { name: "Pandas", category: "Data", usedIn: ["Water Quality Prediction", "Student Performance Analysis", "Data Preprocessing"], notes: "Dataframes, missing value imputation, column dropping, target isolation." },
  { name: "Data Analysis", category: "Data", usedIn: ["Forage Decision Makers Simulation", "Deloitte Analytics", "Healthcare Dataset"], notes: "Exploratory analysis, correlation checks, and outcome reporting." }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "homehive",
    title: "HomeHive",
    category: "Web Development",
    status: "Currently Building",
    isFeatured: true,
    shortDescription: "A modern home-service platform connecting homeowners with trusted service professionals.",
    fullDescription: "HomeHive is my primary ongoing engineering project. The objective is to design a secure, convenient web platform where homeowners can discover, book, and communicate with local home-service providers (such as electricians, plumbers, and maintenance specialists). As I learn full-stack development, I am architecting the frontend in React and progressively planning the backend API layer.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js (Planning)", "Express (Planning)", "MongoDB (Planning)", "REST APIs"],
    whatILearned: "How to translate real-world user workflows into intuitive frontend views, state management across multi-step service booking, and how to structure a full-stack project roadmap responsibly without rushing half-baked features.",
    highlights: [
      "Currently Building: Frontend component foundation and interactive UI wireframes",
      "Goal: Connecting users with home-service providers with transparent pricing and verification",
      "Disciplined Development: Clearly marking planned backend/database phases vs finished UI components"
    ]
  },
  {
    id: "water-quality",
    title: "Water Quality Prediction",
    category: "Machine Learning",
    status: "Completed",
    isFeatured: true,
    shortDescription: "Random Forest classifier predicting whether water samples are 'Stable' or 'At Risk' based on chemical metrics.",
    fullDescription: "A comprehensive machine learning project developed to classify water potability and safety. The project started from an Excel dataset containing chemical parameters like pH, chloramines, dissolved solids, and turbidity. I performed end-to-end data cleaning, identified and stripped data-leakage columns, imputed missing values, encoded categorical tags with LabelEncoder, and trained a Random Forest Classifier evaluated with Confusion Matrices and Classification Reports.",
    technologies: ["Python", "Pandas", "scikit-learn", "Random Forest", "LabelEncoder", "train_test_split"],
    algorithms: ["Random Forest Classifier"],
    workflow: [
      "Loaded Excel dataset and inspected target distribution",
      "Audited feature correlations and dropped leakage-related columns",
      "Handled null/missing values and encoded categorical variables",
      "Divided dataset with train_test_split for strict evaluation",
      "Trained Random Forest Classifier with ensemble decision voting",
      "Evaluated model with Classification Report and Confusion Matrix"
    ],
    whatILearned: "The critical danger of data leakage, how ensemble trees resist overfitting compared to single trees, and how to read precision vs recall trade-offs in environmental safety problems.",
    highlights: [
      "Predicted Classes: 'Stable' vs 'At Risk'",
      "Metrics: Confusion Matrix, Precision, Recall, and Accuracy Reports",
      "Complete step-by-step pipeline documented and tested on real sample rows"
    ]
  },
  {
    id: "hand-gesture",
    title: "Hand Gesture Recognition",
    category: "Internship Project",
    status: "Completed",
    isFeatured: true,
    shortDescription: "Vision-based gesture classification trained on 217 custom image samples with Google Teachable Machine.",
    fullDescription: "Completed during my AI & Machine Learning internship at InAmigos Foundation. I curated, balanced, and captured image datasets across three hand gestures: Open Hand (70 samples), Fist (76 samples), and Thumbs Up (71 samples) — totaling 217 samples. I trained an image classifier using Google Teachable Machine, validated it against test sets, and recorded real confidence scores (98% for Open Hand, 97% for Fist, 100% for Thumbs Up).",
    technologies: ["Google Teachable Machine", "Computer Vision", "Image Classification", "Dataset Curation"],
    algorithms: ["Convolutional Neural Network (Transfer Learning)"],
    workflow: [
      "Data Collection: 217 total hand pose image captures",
      "Class Creation: Open Hand, Fist, Thumbs Up",
      "Model Training: Epoch optimization and loss stabilization",
      "Validation & Testing: Real-time confidence measurement",
      "Result Recording: 98%, 97%, 100% confidence benchmarks"
    ],
    whatILearned: "How lighting variation, hand angles, and background contrast affect computer vision confidence scores, and how to maintain class balance across sample sets.",
    highlights: [
      "Total Samples: 217 custom captured images",
      "Open Hand: 98% confidence recorded",
      "Fist: 97% confidence recorded",
      "Thumbs Up: 100% confidence recorded",
      "Showcased as interactive experiment in Kavya's AI Lab"
    ]
  },
  {
    id: "student-performance",
    title: "Student Performance Prediction",
    category: "Machine Learning",
    status: "Completed",
    shortDescription: "Comparative study predicting student academic pass/fail outcomes using academic and demographic indicators.",
    fullDescription: "Built during my machine learning exploration to predict whether students pass or fail based on study hours, attendance, parental education, and past performance. I evaluated multiple classification algorithms — Logistic Regression, Decision Trees, and Random Forests — comparing accuracy and interpretability.",
    technologies: ["Python", "scikit-learn", "Pandas", "Model Comparison"],
    algorithms: ["Logistic Regression", "Decision Tree", "Random Forest"],
    workflow: [
      "Data ingestion & feature normalization",
      "Encoding socio-academic attributes",
      "Multi-algorithm comparative training",
      "Validation across cross-validated splits"
    ],
    whatILearned: "How model complexity changes the bias-variance balance, and why simpler models like Logistic Regression provide clear baseline explainability before choosing ensemble methods.",
    highlights: [
      "Compared 3 distinct ML algorithms",
      "Analyzed key feature weights influencing student outcomes"
    ]
  },
  {
    id: "healthcare-disease",
    title: "Healthcare Disease Prediction",
    category: "Machine Learning",
    status: "Completed",
    shortDescription: "Multi-category medical condition classifier exploring risk indicators for six major health conditions.",
    fullDescription: "A structured machine learning model trained to predict condition categories across Cancer, Obesity, Diabetes, Asthma, Hypertension, and Arthritis. Implemented using Random Forest with end-to-end preprocessing, numeric scaling, and metric evaluation.",
    technologies: ["Python", "Pandas", "scikit-learn", "Random Forest"],
    algorithms: ["Random Forest Classifier"],
    workflow: [
      "Raw patient indicator dataset intake",
      "Handling outliers and missing clinical indicators",
      "Feature selection across vital signs and lab stats",
      "Random Forest model training and tuning",
      "Classification report evaluation across all 6 disease classes"
    ],
    whatILearned: "Multi-class classification considerations, class imbalance challenges in medical datasets, and why high recall is essential in clinical risk prediction.",
    highlights: [
      "Covers 6 conditions: Cancer, Obesity, Diabetes, Asthma, Hypertension, Arthritis",
      "Follows complete standard ML workflow: Data → Preprocessing → Training → Prediction → Evaluation"
    ]
  },
  {
    id: "crop-disease",
    title: "Crop Disease Detection",
    category: "Machine Learning",
    status: "Completed",
    shortDescription: "Agricultural image classification pipeline exploring visual symptom identification in crops.",
    fullDescription: "Developed as part of my InAmigos Foundation internship to study how machine learning aids precision agriculture. Explored plant leaf image datasets, preprocessing steps like image normalization and resizing, and classification of healthy vs diseased crop leaves.",
    technologies: ["Python", "Computer Vision", "Machine Learning", "Image Processing"],
    algorithms: ["Image Classification"],
    workflow: [
      "Crop leaf image dataset ingestion",
      "Image resizing and contrast normalization",
      "Feature extraction and training",
      "Evaluation of diagnostic accuracy on unseen leaf samples"
    ],
    whatILearned: "How agricultural computer vision can assist farmers in detecting blights early, and the importance of high-resolution leaf anomaly datasets.",
    highlights: [
      "Focus: Agriculture and crop health",
      "Part of InAmigos Foundation internship curriculum"
    ]
  },
  {
    id: "smart-traffic",
    title: "Smart Traffic Management",
    category: "Machine Learning",
    status: "Completed",
    shortDescription: "Traffic density classification predicting Low, Medium, and High congestion levels from sensor inputs.",
    fullDescription: "An applied ML model classifying urban traffic flow into Low, Medium, or High congestion tiers. Inputs incorporated historical traffic volume, weather conditions (rain, visibility), and temporal variables (hour of day, weekend/weekday flags).",
    technologies: ["Python", "scikit-learn", "Pandas", "Data Modeling"],
    algorithms: ["Multi-Class Classification"],
    workflow: [
      "Time-series and weather feature engineering",
      "Categorical traffic level labeling",
      "Model training and hyperparameter checks",
      "Validation against peak-hour traffic splits"
    ],
    whatILearned: "How external environmental factors like sudden rainfall drastically alter traffic flow predictions, and how to engineer time-of-day cyclical features.",
    highlights: [
      "Outputs: Low Traffic, Medium Traffic, High Traffic",
      "Transportation and smart city machine learning application"
    ]
  },
  {
    id: "banknote-authentication",
    title: "Banknote Authentication",
    category: "Machine Learning",
    status: "Completed",
    shortDescription: "Foundational ML classification project detecting counterfeit currency using wave-transformed image metrics.",
    fullDescription: "One of my earliest hands-on machine learning projects, developed during my learning phase and NIT Puducherry internship. Trained a binary classifier on the classic Banknote Authentication dataset using variance, skewness, curtosis, and entropy of wavelet-transformed images.",
    technologies: ["Python", "scikit-learn", "Pandas", "Binary Classification"],
    algorithms: ["Binary Classification"],
    workflow: [
      "Exploratory inspection of continuous wavelet features",
      "Feature standardization and split",
      "Model fitting and decision boundary evaluation",
      "Accuracy and F1-score validation"
    ],
    whatILearned: "How mathematical features derived from transforms can separate classes cleanly without raw pixel processing, establishing my foundation in scikit-learn.",
    highlights: [
      "Early machine learning milestone",
      "Reinforced at NIT Puducherry internship"
    ]
  }
];

export const HOMEHIVE_ROADMAP = [
  {
    phase: "Phase 1: Idea & Planning",
    status: "Completed",
    desc: "Problem validation, user persona research (homeowners vs service providers), and core feature mapping."
  },
  {
    phase: "Phase 2: Frontend Development",
    status: "In Progress",
    desc: "Building modern responsive UI components, service category browser, provider profiles, and booking flow wireframes in React."
  },
  {
    phase: "Phase 3: Backend Architecture",
    status: "Planned",
    desc: "Designing Node.js and Express REST API endpoints for user accounts, service listings, and scheduling requests."
  },
  {
    phase: "Phase 4: Database Integration",
    status: "Planned",
    desc: "Structuring MongoDB schemas for user profiles, provider ratings, booking logs, and service categories."
  },
  {
    phase: "Phase 5: Authentication & Security",
    status: "Planned",
    desc: "Implementing secure JWT-based authentication, password hashing, and role-based access control."
  },
  {
    phase: "Phase 6: Service Provider / User Flow",
    status: "Planned",
    desc: "End-to-end integration of booking requests, status tracking, and provider approval workflows."
  },
  {
    phase: "Phase 7: Future Improvements",
    status: "Planned",
    desc: "Real-time notifications, geolocation-based matching, and provider verification badges."
  }
];

export const INTERNSHIPS_DATA: ExperienceItem[] = [
  {
    role: "AI & Machine Learning Intern",
    organization: "InAmigos Foundation",
    period: "20 August 2026 – 2 September 2026",
    type: "Internship",
    description: "Intensive hands-on internship covering supervised machine learning pipelines, dataset preprocessing, model evaluation metrics, and computer vision classification.",
    keyTakeaways: [
      "Curated and validated the Hand Gesture Recognition dataset (217 custom captures) using Google Teachable Machine",
      "Applied end-to-end preprocessing, feature encoding, and classification workflows using Python and scikit-learn",
      "Explored diverse problem spaces across agricultural disease detection, urban traffic levels, and healthcare risk models",
      "Conducted error analysis with confusion matrices and classification reports to diagnose model performance"
    ],
    tags: ["Machine Learning", "Python", "scikit-learn", "Computer Vision", "Data Preprocessing"]
  },
  {
    role: "Machine Learning Intern",
    organization: "NIT Puducherry",
    period: "2026",
    type: "Internship",
    description: "Hands-on academic internship focused on practical machine learning pipelines, dataset auditing, and supervised learning algorithms on benchmark datasets.",
    keyTakeaways: [
      "Explored feature correlation, leakage prevention, and Random Forest classification on water quality data",
      "Analyzed academic indicators and student outcomes across comparative classification models",
      "Trained binary classification models on statistical wavelet features using the Banknote Authentication dataset",
      "Strengthened mathematical intuition behind decision trees, hyperparameter tuning, and cross-validation"
    ],
    tags: ["scikit-learn", "Python", "Data Analysis", "Random Forest", "Supervised Learning"]
  }
];

export const HACKATHONS_DATA: ExperienceItem[] = [
  {
    role: "Finalist Participant",
    organization: "Smart India Hackathon (SIH) Internal Hackathon",
    period: "30-Hour Hackathon",
    type: "Hackathon",
    description: "My very first hackathon experience. Collaborated in a fast-paced 30-hour team sprint to design and prototype a technology solution under strict time constraints, successfully advancing all the way to the final evaluation round.",
    keyTakeaways: [
      "Reached the Final Round through structured team problem framing and rapid ideation",
      "Developed high-pressure collaboration and effective division of responsibilities under time constraints",
      "Mastered technical presentation and pitch delivery to evaluators and mentors",
      "Gained immense resilience: embraced constructive feedback and learned that finishing strong and learning as a team is the true win"
    ],
    tags: ["Teamwork", "30-Hour Sprint", "Presentation Skills", "Problem Solving", "Final Round"]
  },
  {
    role: "Team Leader",
    organization: "Three-Day College Hackathon",
    period: "3 Days (Learn · Build · Evaluate)",
    type: "Hackathon",
    description: "A structured three-day competition organized in three phases: Day 1 for learning and problem framing, Day 2 for building the core solution, and Day 3 for project evaluation and defense.",
    keyTakeaways: [
      "Stepped up as Team Leader, guiding sprint priorities and delegating tasks across teammates",
      "Learned to synthesize unfamiliar technical concepts rapidly on Day 1 to architect our Day 2 build",
      "While our team did not advance to round 2, leading the project under constraints transformed my confidence as a leader and communicator",
      "Cultivated a growth mindset toward iteration, team morale, and project scoping"
    ],
    tags: ["Team Leadership", "Rapid Prototyping", "Project Defense", "Growth Mindset"]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "aws-genai",
    title: "Fundamentals of Generative AI",
    organization: "AWS Training & Certification",
    date: "August 19, 2026",
    description: "Foundational training covering core concepts of generative artificial intelligence, large language models, prompt engineering, and cloud AI architecture on AWS.",
    skillsLearned: ["Generative AI Basics", "LLM Foundations", "Cloud AI Architectures", "Prompt Concepts"]
  },
  {
    id: "deloitte-analytics",
    title: "Data Analytics Job Simulation",
    organization: "Deloitte / Forage",
    date: "June 15, 2026",
    description: "Practical simulation tackling enterprise data analytics scenarios including forensic technology, anomaly detection, and business data synthesis.",
    skillsLearned: ["Data Analysis", "Forensic Technology", "Business Data Synthesis", "Anomaly Investigation"]
  },
  {
    id: "forage-datascience",
    title: "Data Science Job Simulation",
    organization: "Forage",
    date: "May 31, 2026",
    description: "Completed real-world data science tasks including predictive modeling for customer lounge eligibility at Heathrow Terminal 3 and customer buying behaviour prediction.",
    skillsLearned: ["Customer Buying Behaviour Modeling", "Heathrow T3 Lounge Eligibility Model", "Predictive Analytics"]
  },
  {
    id: "forage-decision",
    title: "Introduction to Data for Decision Makers Job Simulation",
    organization: "Forage",
    date: "June 1, 2026",
    description: "Simulation focused on data storytelling, campaign performance analysis, and translating analytical metrics into strategic stakeholder communications.",
    skillsLearned: ["Campaign Performance Analysis", "Data Storytelling", "Stakeholder Communication"]
  },
  {
    id: "forage-genai-analytics",
    title: "GenAI Powered Data Analytics Job Simulation",
    organization: "Forage",
    date: "June 1, 2026",
    description: "Advanced simulation applying AI to data analysis workflows: exploratory data analysis, risk profiling, AI-driven delinquency prediction, and business report storytelling.",
    skillsLearned: ["Exploratory Data Analysis", "Risk Profiling", "AI Delinquency Prediction", "AI-Driven Collections Strategy", "Executive Storytelling"]
  },
  {
    id: "inamigos-internship",
    title: "AI & Machine Learning Internship Certificate",
    organization: "InAmigos Foundation",
    date: "September 2, 2026",
    description: "Official internship completion certificate recognizing project work in Hand Gesture Recognition, healthcare and agricultural ML models, and scikit-learn pipelines.",
    skillsLearned: ["Machine Learning Pipelines", "Teachable Machine", "Classification Metrics", "Python & scikit-learn"]
  },
  {
    id: "nit-internship",
    title: "Machine Learning Internship Certificate",
    organization: "NIT Puducherry",
    date: "2026",
    description: "Official internship certificate for hands-on project work in supervised machine learning, banknote authentication, and water quality analysis.",
    skillsLearned: ["Supervised ML Algorithms", "Feature Engineering", "Data Cleaning", "Model Evaluation"]
  }
];

export const CURRENTLY_LEARNING = [
  {
    title: "Full-Stack Development with React & Node.js",
    focus: "Connecting React frontend state to REST APIs and handling async service lifecycles.",
    associatedProject: "HomeHive"
  },
  {
    title: "Backend API Design & MongoDB Schemas",
    focus: "Learning data modeling for users, bookings, and provider catalogs.",
    associatedProject: "HomeHive Architecture"
  },
  {
    title: "Deepening Supervised & Ensemble Learning",
    focus: "Fine-tuning Random Forest hyperparameters and mastering cross-validation trade-offs.",
    associatedProject: "Water Quality & Healthcare Projects"
  },
  {
    title: "DSA & Algorithmic Problem Solving in Python & Java",
    focus: "Strengthening core problem-solving speed for internship technical assessments.",
    associatedProject: "Academic & Competitive Practice"
  }
];
