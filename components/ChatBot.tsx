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
  title: "AI Engineer & Data Professional",
  location: "Potsdam, New York, USA",
  email: "rakshith.srinath@example.com",
  github: "raksh2817",

  summary: "I'm Rakshith Srinath, a passionate AI Engineer with 3+ years of experience in Data Engineering, Full-stack Development, and Machine Learning. I'm currently pursuing my Master's in Applied Data Science at Clarkson University while working as a Database Developer at Elmcrest.",

  education: [
    { degree: "Master of Science in Applied Data Science", school: "Clarkson University", year: "2024-2025" },
    { degree: "PG Diploma in Data Science", school: "Great Lakes Institute", year: "2020-2021" },
    { degree: "Bachelor of Science in Computer Science", school: "Christ University", year: "2016-2020" }
  ],

  experience: [
    { role: "Database Developer", company: "Elmcrest", period: "Mar 2025 - Present", description: "Building and optimizing database solutions" },
    { role: "Data Engineer I", company: "LatentView Analytics", period: "Aug 2021 - Apr 2023", description: "Built data pipelines and ETL processes" },
    { role: "Database Developer", company: "Skyward Publication", period: "May 2020 - Jul 2021", description: "Managed database systems and reporting" }
  ],

  skills: {
    languages: ["Python", "SQL", "Apache Spark", "Java", "JavaScript", "Bash"],
    dataEngineering: ["Databricks", "Delta Lake", "Airflow", "Kafka", "Snowflake", "dbt"],
    mlAi: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "RAG", "MLflow"],
    cloud: ["AWS (S3, EC2, SageMaker)", "Azure", "Docker", "Kubernetes", "CI/CD"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Tableau", "Power BI"]
  },

  projects: [
    { name: "Real-time Data Streaming Pipeline", tech: "Kafka, Spark, AWS", description: "Built a scalable real-time data streaming solution" },
    { name: "LLM Document Analysis", tech: "LangChain, RAG, Python", description: "AI-powered document analysis using large language models" },
    { name: "ML Churn Prediction", tech: "Scikit-learn, XGBoost", description: "Predictive model for customer churn analysis" },
    { name: "Spark Performance Benchmarking", tech: "Apache Spark, Databricks", description: "Performance optimization and benchmarking study" },
    { name: "System Monitoring Dashboard", tech: "Python, Grafana", description: "Real-time system monitoring and alerting" }
  ],

  certifications: [
    "PG Program in Data Science",
    "Alteryx Core Certification",
    "SQL Bootcamp Certification",
    "Apache Hive Certification",
    "Data Engineering Professional"
  ],

  interests: ["AI/ML Research", "Building Data Pipelines", "Open Source Contributions", "Learning New Technologies"]
};

// Smart response generator
function generateResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim();

  // Greetings
  if (message.match(/^(hi|hello|hey|greetings|howdy|yo|sup)/)) {
    return `Hello! I'm Rakshith's portfolio assistant. I can tell you about his skills, experience, projects, education, or anything else about his professional background. What would you like to know?`;
  }

  // Who is Rakshith / About
  if (message.match(/who (is|are)|about|tell me about|introduce/)) {
    return portfolioKnowledge.summary;
  }

  // Name
  if (message.match(/your name|what('s| is) your name|name\?/)) {
    return `This portfolio belongs to ${portfolioKnowledge.name}, an ${portfolioKnowledge.title} based in ${portfolioKnowledge.location}.`;
  }

  // Location
  if (message.match(/where|location|based|live|from/)) {
    return `Rakshith is currently based in ${portfolioKnowledge.location}. He's pursuing his Master's degree at Clarkson University while working professionally.`;
  }

  // Education
  if (message.match(/education|degree|university|college|study|school|academic/)) {
    const eduList = portfolioKnowledge.education.map(e => `• ${e.degree} from ${e.school} (${e.year})`).join('\n');
    return `Here's Rakshith's educational background:\n\n${eduList}`;
  }

  // Experience / Work
  if (message.match(/experience|work|job|career|employ|company|role/)) {
    const expList = portfolioKnowledge.experience.map(e => `• ${e.role} at ${e.company} (${e.period})`).join('\n');
    return `Here's Rakshith's professional experience:\n\n${expList}\n\nHe has 3+ years of experience in Data Engineering, Full-stack Development, and Machine Learning.`;
  }

  // Skills - General
  if (message.match(/skill|technology|tech stack|what (do|does|can)|proficient|know|expertise/)) {
    return `Rakshith is skilled in multiple areas:\n\n• **Languages**: ${portfolioKnowledge.skills.languages.join(', ')}\n• **Data Engineering**: ${portfolioKnowledge.skills.dataEngineering.join(', ')}\n• **ML/AI**: ${portfolioKnowledge.skills.mlAi.join(', ')}\n• **Cloud & DevOps**: ${portfolioKnowledge.skills.cloud.join(', ')}\n• **Databases**: ${portfolioKnowledge.skills.databases.join(', ')}`;
  }

  // Python
  if (message.match(/python/)) {
    return `Yes! Python is one of Rakshith's core languages. He uses it extensively for Data Engineering, Machine Learning projects, and building data pipelines. He's proficient with libraries like PyTorch, TensorFlow, Scikit-learn, and LangChain.`;
  }

  // Machine Learning / AI
  if (message.match(/machine learning|ml|ai|artificial intelligence|deep learning|neural/)) {
    return `Rakshith is passionate about AI/ML! His expertise includes:\n\n• **Frameworks**: PyTorch, TensorFlow, Scikit-learn\n• **LLMs**: LangChain, RAG implementations\n• **MLOps**: MLflow for experiment tracking\n• **Applications**: Predictive modeling, NLP, document analysis`;
  }

  // Data Engineering
  if (message.match(/data engineer|pipeline|etl|spark|kafka|airflow|databricks/)) {
    return `Data Engineering is one of Rakshith's core strengths! He works with:\n\n• **Processing**: Apache Spark, Databricks, Delta Lake\n• **Orchestration**: Airflow, dbt\n• **Streaming**: Kafka\n• **Warehousing**: Snowflake\n\nHe's built real-time streaming pipelines and large-scale ETL processes.`;
  }

  // Cloud
  if (message.match(/cloud|aws|azure|docker|kubernetes|devops/)) {
    return `Rakshith has strong cloud and DevOps experience:\n\n• **AWS**: S3, EC2, SageMaker\n• **Azure**: Cloud services\n• **Containers**: Docker, Kubernetes\n• **CI/CD**: Pipeline automation\n\nHe builds scalable, cloud-native data solutions.`;
  }

  // Projects
  if (message.match(/project|portfolio|built|created|developed|work on/)) {
    const projList = portfolioKnowledge.projects.map(p => `• **${p.name}** (${p.tech}): ${p.description}`).join('\n');
    return `Here are some of Rakshith's notable projects:\n\n${projList}\n\nYou can see more details in the Projects section of this portfolio!`;
  }

  // Certifications
  if (message.match(/certification|certified|certificate/)) {
    const certList = portfolioKnowledge.certifications.map(c => `• ${c}`).join('\n');
    return `Rakshith holds the following certifications:\n\n${certList}`;
  }

  // GitHub
  if (message.match(/github|repository|repo|code|open source/)) {
    return `You can check out Rakshith's GitHub at github.com/${portfolioKnowledge.github}. He has repositories covering data engineering, machine learning, and various other projects. Check out the GitHub Repositories section on this portfolio!`;
  }

  // Contact / Hire
  if (message.match(/contact|hire|reach|email|connect|message/)) {
    return `Great! You can reach out to Rakshith through the Contact section below. Fill out the contact form with your message, and he'll get back to you. You can also connect with him on LinkedIn or check his GitHub profile.`;
  }

  // Interests / Hobbies
  if (message.match(/interest|hobby|passion|free time|like to do/)) {
    return `Rakshith is passionate about:\n\n• AI/ML Research and staying updated with latest developments\n• Building efficient Data Pipelines\n• Contributing to Open Source\n• Learning and exploring new technologies\n\nHe loves solving complex data problems and building innovative solutions!`;
  }

  // Current role / What doing now
  if (message.match(/current|now|doing|present|today/)) {
    return `Currently, Rakshith is:\n\n• Working as a Database Developer at Elmcrest\n• Pursuing his Master's in Applied Data Science at Clarkson University (graduating Dec 2025)\n• Building AI and data engineering projects\n• Exploring opportunities in AI Engineering`;
  }

  // Thanks
  if (message.match(/thank|thanks|appreciate/)) {
    return `You're welcome! Feel free to ask me anything else about Rakshith's background, or head over to the Contact section if you'd like to get in touch with him directly.`;
  }

  // Goodbye
  if (message.match(/bye|goodbye|see you|later|cya/)) {
    return `Goodbye! Thanks for visiting Rakshith's portfolio. Don't forget to check out his projects and feel free to reach out through the Contact section!`;
  }

  // Help
  if (message.match(/help|what can you|how to use|options/)) {
    return `I can help you learn about Rakshith! Try asking about:\n\n• His skills and technologies\n• Work experience\n• Education background\n• Projects he's built\n• Certifications\n• How to contact him\n\nJust ask naturally, and I'll do my best to help!`;
  }

  // Default / Fallback
  return `I'm not sure about that specific question, but I'd love to help! You can ask me about Rakshith's:\n\n• Skills & Technologies\n• Work Experience\n• Education\n• Projects\n• Certifications\n• Contact Information\n\nOr feel free to explore the portfolio sections above!`;
}

// Suggested questions for quick access
const suggestedQuestions = [
  "Who is Rakshith?",
  "What are his skills?",
  "Tell me about his experience",
  "What projects has he built?",
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
