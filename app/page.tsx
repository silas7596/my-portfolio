"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Code2, Database, FlaskConical, Terminal, 
  Send, Menu, X, MapPin, GraduationCap,
  Headset, FileText, CheckCircle2, Download,
  Award, Users, Clock, Zap, Star, ChevronRight,
  ChevronLeft, Play, Pause, Volume2, VolumeX,
  Calendar, TrendingUp, Shield, Globe,
  Smartphone, Server, Cloud, Database as DbIcon
} from "lucide-react";

// --- ENHANCED SILAS'S DATA ---
const PERSONAL = {
  name: "Silas Aloo",
  title: "Full-Stack Developer & Virtual Assistant",
  location: "Kilifi, Kenya",
  email: "aloosilas03@gmail.com",
  phone: "+254 7XX XXX XXX",
  about: "I am a multi-disciplinary professional. By day, I study Industrial Chemistry and build software; by night, I help businesses grow through reliable Virtual Assistance and Customer Support. I combine technical precision with excellent communication skills to solve problems—whether they are in code, data entry, or client relations.",
  education: {
    institution: "Pwani University",
    degree: "BSc Industrial Chemistry",
    year: "2022 - Present"
  },
  languages: ["English", "Kiswahili", "Giriama"],
  availability: "Available for projects"
};

const SERVICES = [
  {
    title: "Web Development",
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    desc: "Building responsive websites and MPESA integrations using Next.js & PHP.",
    items: ["Custom Websites", "MPESA API", "Bug Fixing", "Performance Optimization", "API Integration"],
    features: ["Mobile Responsive", "SEO Optimized", "Fast Loading", "Secure"],
    price: "From $200"
  },
  {
    title: "Virtual Assistant",
    icon: <FileText className="w-8 h-8 text-cyan-400" />,
    desc: "Administrative support to keep your business running smoothly.",
    items: ["Data Entry", "Email Management", "Calendar & Scheduling", "Research", "Document Preparation"],
    features: ["24/7 Availability", "Bilingual Support", "Quick Turnaround", "Confidential"],
    price: "$15/hour"
  },
  {
    title: "Customer Service",
    icon: <Headset className="w-8 h-8 text-cyan-400" />,
    desc: "Professional agent handling inquiries and support tickets.",
    items: ["Live Chat Support", "Ticket Resolution", "Client Onboarding", "Feedback Collection", "CRM Management"],
    features: ["Multichannel", "Empathy Training", "Problem Solving", "Retention Focused"],
    price: "$12/hour"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
    desc: "Cross-platform mobile applications for iOS and Android.",
    items: ["React Native Apps", "UI/UX Design", "App Store Deployment", "Push Notifications"],
    features: ["Cross-Platform", "Native Performance", "Offline Capability", "Secure"],
    price: "From $500"
  }
];

const PROJECTS = [
  {
    title: "Pwani Market",
    desc: "E-commerce marketplace for university students. Facilitates fast delivery of food and fashion.",
    tags: ["PHP", "MySQL", "M-PESA API", "E-commerce"],
    image: "/projects/pwani-market.jpg",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Payment Integration", "User Dashboard", "Order Tracking", "Admin Panel"],
    status: "Completed"
  },
  {
    title: "Auto-Data Platform",
    desc: "Automated Fintech platform for reselling mobile data. Handles real-time transactions.",
    tags: ["PHP", "Mobitopup API", "Automation", "Fintech"],
    image: "/projects/auto-data.jpg",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Real-time Processing", "Bulk Operations", "Reporting Dashboard", "API Integration"],
    status: "Live"
  },
  {
    title: "Chicken Farm Manager",
    desc: "Bilingual inventory system (English/Kiswahili) tracking livestock and egg production.",
    tags: ["MS Access", "VBA", "Data Entry", "Inventory"],
    image: "/projects/farm-manager.jpg",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Bilingual UI", "Inventory Tracking", "Sales Reports", "Data Export"],
    status: "Completed"
  },
  {
    title: "Kibali Agrovet",
    desc: "Digital presence for a veterinary service provider showcasing products.",
    tags: ["HTML/CSS", "Email Support", "Design", "WordPress"],
    image: "/projects/kibali-agrovet.jpg",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Responsive Design", "Contact Forms", "Product Catalog", "SEO Optimized"],
    status: "Live"
  }
];

const SKILLS = {
  technical: [
    { name: "PHP & Laravel", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "React/Next.js", level: 80 },
    { name: "MySQL/MongoDB", level: 75 },
    { name: "Python", level: 70 },
    { name: "React Native", level: 65 }
  ],
  professional: [
    { name: "Communication", level: 95 },
    { name: "Problem Solving", level: 90 },
    { name: "Time Management", level: 88 },
    { name: "Customer Service", level: 92 },
    { name: "Project Management", level: 75 },
    { name: "Technical Writing", level: 80 }
  ]
};

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Store Owner",
    content: "Silas transformed our online presence with his web development skills. His attention to detail and communication were exceptional.",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Startup Founder",
    content: "As a virtual assistant, Silas handled our administrative tasks efficiently. He's reliable and always meets deadlines.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Support Manager",
    content: "Silas provided excellent customer service for our clients. His bilingual skills were particularly valuable.",
    rating: 4
  }
];

const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "2+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const audioRef = useRef(null);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, TESTIMONIALS.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    // Here you would typically send to your backend
  };

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-300">{skill.name}</span>
        <span className="text-cyan-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
        />
      </div>
    </motion.div>
  );

  const RatingStars = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"
          }`}
        />
      ))}
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ENHANCED NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-bold text-xl tracking-tighter text-cyan-400 flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-slate-950 font-bold">SA</span>
            </div>
            SilasAloo<span className="text-slate-500">.dev</span>
          </motion.div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {["About", "Services", "Skills", "Projects", "Testimonials", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-cyan-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/resume.pdf" 
              download
              className="flex items-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          <button 
            className="md:hidden text-slate-200 p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4"
            >
              {["About", "Services", "Skills", "Projects", "Testimonials", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
                >
                  {item}
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                download
                className="flex items-center gap-2 text-cyan-400 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ENHANCED HERO SECTION */}
      <section className="min-h-screen flex items-center pt-20 pb-10 px-6 max-w-7xl mx-auto relative">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono bg-cyan-950/30 w-fit px-3 py-1 rounded-full border border-cyan-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                {PERSONAL.availability}
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                {PERSONAL.location}
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 leading-tight">
              Transforming Ideas<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                Into Digital Reality
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-400 font-medium">
              Full-Stack Developer • Virtual Assistant • Customer Support Expert
            </h2>
            
            <p className="max-w-lg text-slate-400 leading-relaxed text-lg">
              I build <strong>scalable web applications</strong>, provide <strong>efficient virtual assistance</strong>, 
              and deliver <strong>exceptional customer support</strong>. Let's create something amazing together.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#contact" className="group px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] flex items-center gap-2">
                Start Project <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="group px-8 py-4 border border-slate-700 text-slate-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center gap-2">
                View Portfolio <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Profile Image with 3D Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-800 transform-style-preserve-3d group-hover:rotate-y-5 transition-transform duration-500">
              <div className="w-80 h-80 mx-auto relative">
                <Image 
                  src="/profile1.jpg" 
                  alt="Silas Aloo Profile" 
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -left-4 bg-cyan-500 text-slate-950 p-2 rounded-lg shadow-lg"
                >
                  <Code2 className="w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-blue-500 text-slate-950 p-2 rounded-lg shadow-lg"
                >
                  <Headset className="w-6 h-6" />
                </motion.div>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                  { icon: <Mail className="w-5 h-5" />, href: `mailto:${PERSONAL.email}`, label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all group"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ENHANCED SERVICES SECTION */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="flex items-center justify-center text-3xl font-bold text-slate-100 mb-4">
              <span className="text-cyan-400 mr-3">01.</span> My Services
              <span className="ml-4 h-px bg-slate-800 flex-grow max-w-xs"></span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs. From development to support, I've got you covered.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {SERVICES.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-lg border transition-all ${
                  activeService === index
                    ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                    : "border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                    {SERVICES[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">
                      {SERVICES[activeService].title}
                    </h3>
                    <div className="text-cyan-400 font-semibold">
                      {SERVICES[activeService].price}
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-lg">
                  {SERVICES[activeService].desc}
                </p>

                <div className="grid gap-4">
                  <div>
                    <h4 className="text-slate-300 font-semibold mb-2">What I Offer:</h4>
                    <ul className="space-y-2">
                      {SERVICES[activeService].items.map((item, i) => (
                        <li key={i} className="flex items-center text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-slate-300 font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES[activeService].features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                <h4 className="text-slate-300 font-semibold mb-4">Process Flow</h4>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Consultation", desc: "Understand your requirements" },
                    { step: "02", title: "Planning", desc: "Create project roadmap" },
                    { step: "03", title: "Development", desc: "Build your solution" },
                    { step: "04", title: "Delivery", desc: "Launch and support" }
                  ].map((process, index) => (
                    <div key={process.step} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                      <div className="w-10 h-10 bg-cyan-500 text-slate-950 rounded-full flex items-center justify-center font-bold">
                        {process.step}
                      </div>
                      <div>
                        <div className="text-slate-200 font-semibold">{process.title}</div>
                        <div className="text-slate-400 text-sm">{process.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 px-6 max-w-7xl mx-auto bg-slate-900/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="flex items-center justify-center text-3xl font-bold text-slate-100 mb-4">
              <span className="text-cyan-400 mr-3">02.</span> Skills & Expertise
              <span className="ml-4 h-px bg-slate-800 flex-grow max-w-xs"></span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {SKILLS.technical.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Professional Skills
              </h3>
              <div className="space-y-4">
                {SKILLS.professional.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + SKILLS.technical.length} />
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-slate-100 mb-8 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "React", icon: <Code2 className="w-8 h-8" /> },
                { name: "Next.js", icon: <Globe className="w-8 h-8" /> },
                { name: "PHP", icon: <Server className="w-8 h-8" /> },
                { name: "MySQL", icon: <DbIcon className="w-8 h-8" /> },
                { name: "Python", icon: <Terminal className="w-8 h-8" /> },
                { name: "TypeScript", icon: <Code2 className="w-8 h-8" /> }
              ].map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-400/30 transition-all text-center group"
                >
                  <div className="text-cyan-400 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <div className="text-slate-300 font-medium">{tool.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ENHANCED PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="flex items-center justify-center text-3xl font-bold text-slate-100 mb-4">
              <span className="text-cyan-400 mr-3">03.</span> Featured Projects
              <span className="ml-4 h-px bg-slate-800 flex-grow max-w-xs"></span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A showcase of my recent work across web development, automation, and business solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400/30 transition-all group"
              >
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Code2 className="w-10 h-10 text-cyan-400" />
                    <div className="flex gap-2">
                      <a href={project.liveUrl} className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a href={project.githubUrl} className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.desc}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-slate-300 text-sm font-semibold mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs border border-cyan-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 px-6 max-w-4xl mx-auto bg-slate-900/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="flex items-center justify-center text-3xl font-bold text-slate-100 mb-4">
            <span className="text-cyan-400 mr-3">04.</span> Client Testimonials
            <span className="ml-4 h-px bg-slate-800 flex-grow max-w-xs"></span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>

          <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <div className="flex justify-between items-start mb-8">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={() => setCurrentTestimonial(prev => prev === 0 ? TESTIMONIALS.length - 1 : prev - 1)}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setCurrentTestimonial(prev => prev === TESTIMONIALS.length - 1 ? 0 : prev + 1)}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center"
              >
                <RatingStars rating={TESTIMONIALS[currentTestimonial].rating} />
                <blockquote className="text-xl text-slate-300 my-6 italic">
                  "{TESTIMONIALS[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-slate-100">
                    {TESTIMONIALS[currentTestimonial].name}
                  </div>
                  <div className="text-cyan-400 text-sm">
                    {TESTIMONIALS[currentTestimonial].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ENHANCED CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-cyan-400 font-mono mb-4">05. Get In Touch</h2>
          <h2 className="text-4xl font-bold text-slate-100 mb-6">Let's Work Together</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm currently available for freelance work and full-time positions.
            Let's discuss how we can work together to achieve your goals.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Mail className="w-6 h-6" />, title: "Email", value: PERSONAL.email, action: `mailto:${PERSONAL.email}` },
              { icon: <MapPin className="w-6 h-6" />, title: "Location", value: PERSONAL.location, action: "#" },
              { icon: <Clock className="w-6 h-6" />, title: "Response Time", value: "Within 24 hours", action: "#" }
            ].map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-400/30 transition-all text-center group"
              >
                <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <h3 className="text-slate-100 font-semibold mb-2">{contact.title}</h3>
                <p className="text-slate-400">{contact.value}</p>
              </motion.a>
            ))}
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-cyan-400 outline-none transition-colors"
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-cyan-400 outline-none transition-colors"
                    placeholder="your.email@example.com" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
                <textarea 
                  name="message" 
                  id="message"
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-cyan-400 outline-none transition-colors resize-vertical"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-slate-700 cursor-not-allowed' 
                    : 'bg-cyan-500 hover:bg-cyan-600'
                } text-slate-950 font-bold py-4 rounded-lg transition-all`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* ENHANCED FOOTER */}
      <footer className="py-12 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-xl tracking-tighter text-cyan-400 flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-slate-950 font-bold">SA</span>
                </div>
                SilasAloo.dev
              </div>
              <p className="text-slate-400 text-sm">
                Building digital solutions that drive business growth and success.
              </p>
            </div>
            
            <div>
              <h3 className="text-slate-100 font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {SERVICES.map(service => (
                  <li key={service.title}>
                    <a href="#services" className="hover:text-cyan-400 transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-slate-100 font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                  { icon: <Mail className="w-5 h-5" />, href: `mailto:${PERSONAL.email}`, label: "Email" }
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-slate-100 font-semibold mb-4">Location</h3>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                {PERSONAL.location}
              </div>
              <div className="text-slate-400 text-sm">
                Available for remote work worldwide
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-600 text-sm">
            <p>© {new Date().getFullYear()} Silas Aloo. All rights reserved. Built with Next.js & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}