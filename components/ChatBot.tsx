'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Knowledge base about Rakshith Srinath
const portfolioKnowledge = {
  name: "Rakshith Srinath",
  title: "Data Engineer → AI Engineer",
  location: "Potsdam, New York, USA",
  email: "rakshithsrinath17@gmail.com",
  phone: "+1 (315) 621-0543",
  linkedin: "https://www.linkedin.com/in/rakshith-s-170298",
  github: "raksh2817",
  resumeUrl: "/Rakshith_Srinath_Resume.pdf",

  summary: "I'm Rakshith Srinath, a Data Engineer with 3+ years of experience across data engineering, full-stack development, and machine learning. I earned my Master's in Applied Data Science from Clarkson University (Dec 2025), and I'm currently a Solutions Engineer at LifeLine Billing Solutions — building data pipelines, claims-management platforms, and AI-powered systems.",

  education: [
    { degree: "Master of Science in Applied Data Science", school: "Clarkson University", year: "2024-2025" },
    { degree: "PG Diploma in Data Science", school: "Great Lakes Institute of Management", year: "2020-2021" },
    { degree: "B.Tech in Computer Science & Engineering", school: "Christ University", year: "2016-2020" }
  ],

  experience: [
    { role: "Solutions Engineer", company: "LifeLine Billing Solutions", period: "Dec 2025 - Present", description: "Owning end-to-end product delivery — a PostgreSQL claims-management system, batch ETL pipelines, and a Flask + React workflow platform in production." },
    { role: "Data Engineer I", company: "LatentView Analytics (Adobe B2B Marketing)", period: "Aug 2021 - Apr 2023", description: "Clickstream analytics pipelines processing 2–3 TB daily with PySpark, automated reconciliation cutting QA effort 60%, and a Hadoop → Azure Databricks migration." },
    { role: "Software Engineer", company: "Skyward Publication", period: "May 2020 - Jul 2021", description: "ETL pipelines and full-stack apps, plus an internal content-management dashboard that cut publication turnaround by 25%." }
  ],

  skills: {
    languages: ["Python", "SQL", "Java", "JavaScript", "Bash"],
    dataEngineering: ["Apache Spark", "Databricks", "Delta Lake", "Airflow", "Kafka", "Snowflake", "dbt", "Hadoop", "Hive"],
    mlAi: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "RAG", "MLflow"],
    cloud: ["AWS (S3, EC2, Glue, Redshift, SageMaker)", "Azure (Databricks, ADF)", "Docker", "Kubernetes", "CI/CD", "Linux"],
    webDev: ["Flask", "FastAPI", "React", "Bootstrap", "HTML/CSS", "REST APIs"],
    databases: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Tableau", "Power BI", "Grafana"]
  },

  projects: [
    { name: "Real-time Streaming Pipeline", tech: "Kafka, Spark Streaming, Delta Lake, AWS", description: "Real-time pipeline processing 100K events/second with exactly-once semantics and sub-3s latency, deployed on AWS with Docker/Kubernetes auto-scaling." },
    { name: "LLM-Powered Document Analysis System", tech: "LangChain, ChromaDB, FastAPI, React", description: "RAG system achieving 92% accuracy across 10K+ documents, with a React + FastAPI app, auth, and real-time document processing." },
    { name: "Enterprise Behavioral Data Warehouse", tech: "MS Access, VBA, SQL", description: "Led a team of 5 to architect a dimensional data warehouse centralizing behavioral data from 50+ entry points, with an automated, audited ETL pipeline at 99.9% accuracy." },
    { name: "End-to-End ML Pipeline for Churn Prediction", tech: "Airflow, MLflow, AWS SageMaker", description: "Production ML pipeline with a feature store processing 5M records/day; an XGBoost model with A/B testing that reduced churn 18%." },
    { name: "Apache Spark Benchmarking", tech: "Spark, DuckDB, Pandas", description: "Benchmarked frameworks on 10M+ flight records for a 45% performance gain via partitioning, caching, and broadcast joins." },
    { name: "System Monitoring Tool", tech: "Flask, Docker, Grafana, MySQL", description: "Containerized Flask API + Python agent logging CPU, memory, and disk metrics into a MySQL fact/dim schema." }
  ],

  certifications: [
    "Post Graduate Program in Data Science and Engineering — Great Learning (2020-2021)",
    "Alteryx Foundational Certification (2021)",
    "The Complete SQL Bootcamp 2021 — Udemy",
    "Hive to Advance Hive: Hadoop querying tool (2021)",
    "Data Engineering Training Program (2021)"
  ],

  interests: ["AI/ML Research", "Building Data Pipelines", "Open Source Contributions", "Learning New Technologies"]
};

// Intent-based response engine: scores the message against many intents and
// runs the best match, so the bot understands far more questions than a simple
// first-match keyword list. Fully client-side — no API calls.
type Intent = { keywords: string[]; handler: () => string };

function bullets(items: string[]): string {
  return items.map(i => `• ${i}`).join('\n');
}

function generateResponse(userMessage: string): string {
  const k = portfolioKnowledge;
  const raw = userMessage.toLowerCase().trim();

  // Quick conversational short-circuits
  if (/^(hi|hello|hey|hiya|heya|greetings|howdy|yo|sup|hallo)\b/.test(raw)) {
    return `Hi there! I'm Rakshith's portfolio assistant. Ask me about his experience, current role, skills, projects, education, certifications, or how to get in touch. What would you like to know?`;
  }
  if (/\b(thank|thanks|thx|appreciate|cheers)\b/.test(raw)) {
    return `You're welcome! Ask me anything else about Rakshith, or head to the Contact section to reach him directly.`;
  }
  if (/\b(bye|goodbye|see ya|see you|farewell|cya)\b/.test(raw)) {
    return `Thanks for stopping by! Don't forget to explore the projects and reach out through the Contact section. 👋`;
  }

  const tokens = new Set(raw.split(/[^a-z0-9+#]+/).filter(Boolean));

  const intents: Intent[] = [
    // Résumé / CV
    {
      keywords: ['resume', 'résumé', 'cv', 'download', 'curriculum vitae'],
      handler: () => `You can download Rakshith's résumé (PDF) using the "Download Résumé" button at the top of the page, or directly here: ${k.resumeUrl}`,
    },
    // Availability / hiring
    {
      keywords: ['available', 'availability', 'open to work', 'hiring', 'opportunity', 'opportunities', 'freelance', 'full-time', 'fulltime', 'recruit'],
      handler: () => `Rakshith is open to interesting data engineering, AI, and full-stack opportunities. The best way to reach him is the Contact section below, LinkedIn (${k.linkedin}), or email (${k.email}).`,
    },
    // Current role / now
    {
      keywords: ['current', 'currently', 'now', 'today', 'present', 'doing', 'lately', 'at the moment', 'right now', 'these days'],
      handler: () => `Right now, Rakshith is:\n\n• Working as a Solutions Engineer at LifeLine Billing Solutions (Dec 2025 – present), owning end-to-end product delivery\n• Building a PostgreSQL claims-management platform with Flask REST APIs and a React frontend\n• Fresh off earning his MS in Applied Data Science from Clarkson University (Dec 2025)\n• Going deeper into AI engineering — LLMs, RAG, and production AI systems`,
    },
    // Specific companies
    {
      keywords: ['lifeline', 'billing', 'solutions engineer', 'claims'],
      handler: () => `At LifeLine Billing Solutions (Solutions Engineer, Dec 2025 – present), Rakshith:\n\n• Architected an end-to-end claims management system with a PostgreSQL dimensional schema\n• Built a batch ETL pipeline to ingest, validate, and transform claims data with audit logging\n• Developed a role-based workflow platform with Flask REST APIs and a React frontend for 4 user types\n• Scaled it from pilot to production, with a roadmap for AI-powered automation`,
    },
    {
      keywords: ['latentview', 'adobe', 'b2b'],
      handler: () => `At LatentView Analytics on the Adobe B2B Marketing platform (Data Engineer I, Aug 2021 – Apr 2023), Rakshith:\n\n• Built clickstream analytics pipelines processing 2–3 TB daily with PySpark, HiveQL, and SQL Server (10K+ users)\n• Developed an automated data reconciliation framework, cutting manual QA effort by 60%\n• Optimized the warehouse with partitioning, bucketing, and columnar formats for 2× faster queries and 50% less storage\n• Led a Hadoop → Azure Databricks (Delta Lake) migration, reducing ETL runtimes by 40%`,
    },
    {
      keywords: ['skyward', 'publication', 'publisher'],
      handler: () => `At Skyward Publication (Software Engineer, May 2020 – Jul 2021), Rakshith:\n\n• Engineered ETL pipelines (10K+ records/day) and full-stack apps using Python, JavaScript, MySQL, SQL Server, and REST APIs\n• Built an internal content-management dashboard that cut publication turnaround time by 25%`,
    },
    // Specific schools
    {
      keywords: ['clarkson', 'masters', "master's", 'msc', 'ms in', 'grad school'],
      handler: () => `Rakshith earned his Master of Science in Applied Data Science from Clarkson University, Potsdam, NY (2024–2025, graduated Dec 2025).`,
    },
    {
      keywords: ['christ', 'bachelor', 'btech', 'b.tech', 'undergrad', 'undergraduate'],
      handler: () => `Rakshith earned his B.Tech in Computer Science & Engineering from Christ University, Bengaluru (2016–2020).`,
    },
    {
      keywords: ['great lakes', 'diploma', 'pg diploma'],
      handler: () => `Rakshith completed a PG Diploma in Data Science at Great Lakes Institute of Management (2020–2021).`,
    },
    // Education (general)
    {
      keywords: ['education', 'degree', 'degrees', 'university', 'college', 'study', 'studied', 'academic', 'qualification', 'school'],
      handler: () => `Here's Rakshith's education:\n\n${bullets(k.education.map(e => `${e.degree} — ${e.school} (${e.year})`))}`,
    },
    // Specific technologies
    {
      keywords: ['python'],
      handler: () => `Yes — Python is one of Rakshith's core languages. He uses it across data engineering (PySpark, Airflow, ETL), backend dev (Flask, FastAPI), and ML (PyTorch, TensorFlow, Scikit-learn, LangChain).`,
    },
    {
      keywords: ['spark', 'pyspark', 'databricks'],
      handler: () => `Apache Spark is one of Rakshith's strongest tools. At LatentView he built PySpark pipelines processing 2–3 TB daily and led a migration to Azure Databricks with Delta Lake. He's also benchmarked Spark on 10M+ records for a 45% speedup.`,
    },
    {
      keywords: ['kafka', 'streaming', 'real-time', 'realtime'],
      handler: () => `Rakshith builds real-time systems with Kafka and Spark Streaming — including a pipeline processing 100K events/second with exactly-once semantics and sub-3s latency, deployed on AWS with Docker/Kubernetes auto-scaling.`,
    },
    {
      keywords: ['airflow', 'dbt', 'snowflake', 'orchestration', 'warehouse', 'warehousing', 'delta lake'],
      handler: () => `For orchestration and warehousing, Rakshith works with Airflow, dbt, Snowflake, Delta Lake, and Hive — modeling large-scale data warehouses with dimensional modeling and automated, audited ETL.`,
    },
    {
      keywords: ['sql', 'postgres', 'postgresql', 'mysql', 'database', 'databases', 'mongodb'],
      handler: () => `Rakshith is highly proficient with SQL and databases: ${k.skills.databases.join(', ')}. He designs normalized relational schemas and dimensional data warehouses.`,
    },
    {
      keywords: ['aws', 'azure', 'cloud', 'docker', 'kubernetes', 'devops', 'k8s'],
      handler: () => `Rakshith's cloud & DevOps stack:\n\n• AWS: S3, EC2, Glue, Redshift, SageMaker\n• Azure: Databricks, ADF\n• Containers & CI/CD: Docker, Kubernetes, Linux\n\nHe builds scalable, cloud-native data and application systems.`,
    },
    {
      keywords: ['react', 'flask', 'fastapi', 'frontend', 'full-stack', 'fullstack', 'web', 'bootstrap', 'api', 'apis'],
      handler: () => `On the web/full-stack side, Rakshith works with ${k.skills.webDev.join(', ')} — for example, the Flask + React claims platform at LifeLine and FastAPI + React apps in his projects.`,
    },
    {
      keywords: ['ml', 'ai', 'machine', 'learning', 'deep', 'neural', 'llm', 'llms', 'rag', 'genai', 'generative', 'pytorch', 'tensorflow', 'model', 'models', 'nlp'],
      handler: () => `Rakshith's ML/AI work spans:\n\n• Frameworks: PyTorch, TensorFlow, Scikit-learn\n• LLMs & GenAI: LangChain, RAG (e.g. a 92%-accuracy document-analysis system over 10K+ docs)\n• MLOps: MLflow, feature engineering, model deployment\n\nHe's actively focused on AI engineering and production AI systems.`,
    },
    {
      keywords: ['data engineering', 'pipeline', 'pipelines', 'etl', 'elt'],
      handler: () => `Data engineering is Rakshith's core strength — large-scale ETL/ELT and streaming pipelines with Spark, Kafka, Airflow, dbt, Snowflake, and Delta Lake across AWS and Azure. He's processed 2–3 TB daily and built real-time pipelines at 100K events/sec.`,
    },
    // Skills (general)
    {
      keywords: ['skill', 'skills', 'technology', 'technologies', 'tech', 'stack', 'proficient', 'expertise', 'tools', 'toolset'],
      handler: () => `Rakshith's skills span several areas:\n\n• Languages: ${k.skills.languages.join(', ')}\n• Data Engineering: ${k.skills.dataEngineering.join(', ')}\n• ML/AI: ${k.skills.mlAi.join(', ')}\n• Cloud & DevOps: ${k.skills.cloud.join(', ')}\n• Web Development: ${k.skills.webDev.join(', ')}\n• Databases & Tools: ${k.skills.databases.join(', ')}`,
    },
    // Experience (general)
    {
      keywords: ['experience', 'work', 'worked', 'job', 'jobs', 'career', 'employment', 'employer', 'company', 'companies', 'role', 'roles', 'background'],
      handler: () => `Rakshith has 3+ years of professional experience:\n\n${bullets(k.experience.map(e => `${e.role} — ${e.company} (${e.period})`))}\n\nAsk about any role (LifeLine, LatentView/Adobe, or Skyward) for details.`,
    },
    // Projects
    {
      keywords: ['project', 'projects', 'built', 'build', 'created', 'work on', 'worked on', 'portfolio'],
      handler: () => `Some of Rakshith's notable projects:\n\n${bullets(k.projects.map(p => `${p.name} (${p.tech})`))}\n\nAsk about any one for more detail, or check the Projects section above.`,
    },
    // Certifications
    {
      keywords: ['certification', 'certifications', 'certified', 'certificate', 'certificates', 'course', 'courses', 'training'],
      handler: () => `Rakshith's certifications & training:\n\n${bullets(k.certifications)}`,
    },
    // GitHub
    {
      keywords: ['github', 'repository', 'repositories', 'repo', 'repos', 'code', 'open source', 'opensource', 'git'],
      handler: () => `Rakshith's GitHub is github.com/${k.github} — covering data engineering, ML, and full-stack projects. The Repositories section above shows a live feed of his recent work.`,
    },
    // Contact / hire
    {
      keywords: ['contact', 'reach', 'email', 'connect', 'message', 'linkedin', 'phone', 'get in touch', 'touch'],
      handler: () => `You can reach Rakshith via:\n\n• Email: ${k.email}\n• Phone: ${k.phone}\n• LinkedIn: ${k.linkedin}\n\nOr use the Contact form in the section below — he'll get back to you.`,
    },
    // About / who
    {
      keywords: ['who', 'about', 'introduce', 'introduction', 'bio', 'yourself', 'summary'],
      handler: () => k.summary,
    },
    // Name
    {
      keywords: ['name'],
      handler: () => `This portfolio belongs to ${k.name} — ${k.title}, based in ${k.location}.`,
    },
    // Location
    {
      keywords: ['where', 'location', 'based', 'live', 'lives', 'from', 'city', 'country'],
      handler: () => `Rakshith is based in ${k.location} and works remotely as a Solutions Engineer at LifeLine Billing Solutions.`,
    },
    // Years of experience
    {
      keywords: ['years', 'how long', 'how many years', 'yoe'],
      handler: () => `Rakshith has 3+ years of professional experience across data engineering, full-stack development, and machine learning.`,
    },
    // Interests
    {
      keywords: ['interest', 'interests', 'hobby', 'hobbies', 'passion', 'passions', 'free time', 'like to do', 'enjoy'],
      handler: () => `Rakshith is passionate about:\n\n${bullets(k.interests)}\n\nHe loves solving complex data problems and building intelligent systems.`,
    },
    // Help
    {
      keywords: ['help', 'what can you', 'how to use', 'options', 'menu', 'commands'],
      handler: () => `I can tell you about Rakshith! Try asking about his:\n\n• Current role & experience\n• Skills & technologies\n• Projects he's built\n• Education & certifications\n• How to contact him / download his résumé\n\nJust ask naturally.`,
    },
  ];

  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of intents) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (/[^a-z0-9]/.test(kw)) {
        // phrase / multi-char keyword (space, hyphen, apostrophe, slash, dot)
        if (raw.includes(kw)) score += 2;
      } else if (tokens.has(kw)) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  if (best && bestScore > 0) {
    return best.handler();
  }

  return `I'm not sure about that one, but I can help! Ask me about Rakshith's:\n\n• Experience & current role\n• Skills & technologies\n• Projects & certifications\n• Education\n• Contact info or résumé\n\nOr explore the sections above.`;
}

// Suggested questions for quick access
const suggestedQuestions = [
  "What's he doing now?",
  "What are his skills?",
  "Tell me about his experience",
  "What projects has he built?",
  "Can I download his resume?",
  "How can I contact him?"
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm Rakshith's portfolio assistant. Ask me anything about his skills, experience, projects, or education. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay for natural feel
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

    // Generate and add bot response
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: generateResponse(messageText),
      isBot: true,
      timestamp: new Date()
    };
    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-120px)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              background: 'linear-gradient(145deg, rgba(17, 17, 27, 0.98) 0%, rgba(10, 10, 15, 0.98) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Portfolio Assistant</h3>
                <p className="text-white/70 text-sm">Ask me about Rakshith</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-indigo-600/50 scrollbar-track-transparent">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-white/10 text-gray-200 rounded-tl-sm'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSend(question)}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors border border-white/10"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 text-white placeholder-gray-400 px-4 py-2.5 rounded-xl border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-sm"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
