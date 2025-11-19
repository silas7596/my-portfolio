"use client";

import { useState } from "react";
import Image from "next/image"; // Import Image component
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Code2, Database, FlaskConical, Terminal, 
  Send, Menu, X, MapPin, GraduationCap,
  Headset, FileText, CheckCircle2 
} from "lucide-react";

// --- SILAS'S DATA ---
const PERSONAL = {
  name: "Silas Aloo",
  title: "Developer, Virtual Assistant & Support Agent",
  location: "Kilifi, Kenya",
  email: "aloosilas03@gmail.com",
  about: "I am a multi-disciplinary professional. By day, I study Industrial Chemistry and build software; by night, I help businesses grow through reliable Virtual Assistance and Customer Support. I combine technical precision with excellent communication skills to solve problems—whether they are in code, data entry, or client relations."
};

const SERVICES = [
  {
    title: "Web Development",
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    desc: "Building responsive websites and MPESA integrations using Next.js & PHP.",
    items: ["Custom Websites", "MPESA API", "Bug Fixing"]
  },
  {
    title: "Virtual Assistant",
    icon: <FileText className="w-8 h-8 text-cyan-400" />,
    desc: "Administrative support to keep your business running smoothly.",
    items: ["Data Entry", "Email Management", "Calendar & Scheduling"]
  },
  {
    title: "Customer Service",
    icon: <Headset className="w-8 h-8 text-cyan-400" />,
    desc: "Professional agent handling inquiries and support tickets.",
    items: ["Live Chat Support", "Ticket Resolution", "Client Onboarding"]
  }
];

const PROJECTS = [
  {
    title: "Pwani Market",
    desc: "E-commerce marketplace for university students. Facilitates fast delivery of food and fashion.",
    tags: ["PHP", "MySQL", "M-PESA API"],
  },
  {
    title: "Auto-Data Platform",
    desc: "Automated Fintech platform for reselling mobile data. Handles real-time transactions.",
    tags: ["PHP", "Mobitopup API", "Automation"],
  },
  {
    title: "Chicken Farm Manager",
    desc: "Bilingual inventory system (English/Kiswahili) tracking livestock and egg production.",
    tags: ["MS Access", "VBA", "Data Entry"],
  },
  {
    title: "Kibali Agrovet",
    desc: "Digital presence for a veterinary service provider showcasing products.",
    tags: ["HTML/CSS", "Email Support", "Design"],
  }
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-cyan-400">
            SA<span className="text-slate-500">.services</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <button className="md:hidden text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-slate-300">Services</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block text-slate-300">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-cyan-400">Contact</a>
          </motion.div>
        )}
      </nav>

      {/* HERO SECTION WITH IMAGE 1 */}
      <section className="min-h-screen flex items-center pt-20 pb-10 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left: Text */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="space-y-6 order-2 md:order-1"
          >
            <div className="flex items-center gap-2 text-cyan-400 font-mono bg-cyan-950/30 w-fit px-3 py-1 rounded-full border border-cyan-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Hire
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                {PERSONAL.name}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-400 font-medium">
              Developer • Virtual Assistant • CSR
            </h2>
            
            <p className="max-w-lg text-slate-400 leading-relaxed">
              I help businesses succeed by building their websites and managing their operations. 
              From <strong>coding M-PESA integrations</strong> to <strong>handling customer support tickets</strong>, I am your reliable tech partner.
            </p>
            
            <div className="pt-4 flex gap-4">
              <a href="#contact" className="px-8 py-3 bg-cyan-500 text-slate-950 font-bold rounded hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Hire Me
              </a>
              <a href="#projects" className="px-8 py-3 border border-slate-700 text-slate-300 rounded hover:border-cyan-400 hover:text-cyan-400 transition-all">
                See Work
              </a>
            </div>
          </motion.div>

          {/* Right: IMAGE 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl opacity-20 rounded-full"></div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl">
              {/* ENSURE profile1.jpg IS IN PUBLIC FOLDER */}
              <Image 
                src="/profile1.jpg" 
                alt="Silas Aloo Profile" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION (NEW) */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="flex items-center text-2xl font-bold text-slate-100 mb-12">
            <span className="text-cyan-400 mr-2">01.</span> Services I Offer
            <span className="ml-4 h-px bg-slate-800 flex-grow max-w-xs"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-400/40 transition-all hover:-translate-y-1">
                <div className="bg-slate-950 w-fit p-3 rounded-lg mb-4 border border-slate-800">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION WITH IMAGE 2 */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto bg-slate-900/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: IMAGE 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-cyan-500/20 rounded-xl blur-lg group-hover:bg-cyan-500/30 transition-all"></div>
            <div className="relative h-80 w-full md:w-80 mx-auto rounded-xl overflow-hidden border border-slate-700 grayscale hover:grayscale-0 transition-all duration-500">
              {/* ENSURE profile2.jpg IS IN PUBLIC FOLDER */}
              <Image 
                src="/profile2.jpg" 
                alt="Silas Aloo Working" 
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="flex items-center text-2xl font-bold text-slate-100 mb-6">
              <span className="text-cyan-400 mr-2">02.</span> Who is Silas?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              I am a student at Pwani University (Industrial Chemistry) with a deep passion for technology and efficiency.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My unique background in science means I am <strong>analytical, detail-oriented, and disciplined</strong>. 
              Whether I am debugging PHP code for a client's website or managing a busy email inbox as a Virtual Assistant, I bring that same level of precision.
            </p>
            
            <div className="flex gap-4 text-sm font-mono text-cyan-400">
              <span className="bg-cyan-950/50 px-3 py-1 rounded border border-cyan-900">Reliable</span>
              <span className="bg-cyan-950/50 px-3 py-1 rounded border border-cyan-900">Bilingual (En/Sw)</span>
              <span className="bg-cyan-950/50 px-3 py-1 rounded border border-cyan-900">Tech-Savvy</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="flex items-center text-2xl font-bold text-slate-100 mb-12">
          <span className="text-cyan-400 mr-2">03.</span> Technical Projects
          <span className="ml-4 h-px bg-slate-800 flex-grow max-w-xs"></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-400/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <Code2 className="w-10 h-10 text-cyan-400" />
                <ExternalLink className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-cyan-400 font-mono mb-4">04. Get In Touch</h2>
        <h2 className="text-4xl font-bold text-slate-100 mb-6">Let's Work Together</h2>
        <p className="text-slate-400 mb-10">
          Looking for a Developer, a VA, or a Customer Support Agent? I'm ready to join your team.
        </p>
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-left">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" required className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-cyan-400 outline-none" placeholder="Name" />
              <input type="email" name="email" required className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-cyan-400 outline-none" placeholder="Email" />
            </div>
            <textarea name="message" rows={4} required className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-cyan-400 outline-none" placeholder="I need help with..."></textarea>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-4 rounded-lg transition-all">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm font-mono">
        <p>© {new Date().getFullYear()} Silas Aloo. Kilifi, Kenya.</p>
      </footer>
    </main>
  );
}