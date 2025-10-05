import './App.css'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { Meteors } from './components/Meteors'
import { AvatarRing } from './components/AvatarRing'
import { WavyBackground } from './components/WavyBackground'
import { Counter } from './components/Counter'
import { ArrowDown } from './components/ArrowDown'
import { RotateWords } from "./components/RotateWords"
import { MorphingText } from "./components/MorphingJV"
import { Briefcase, Calendar, MapPin, GraduationCap, Mail, Linkedin, Github, Instagram, Globe } from "lucide-react";
import { BackgroundGradient } from "@/components/BgBox";
import { LuGithub } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";



// SECTION: Navbar (sticky)
function Navbar() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 24], [0, 12]);
  const bgAlpha = useTransform(scrollY, [0, 24], [0.3, 0.6]);
  const backdrop = useMotionTemplate`blur(${blur}px)`;
  const bg = useMotionTemplate`rgba(12, 15, 18, ${bgAlpha})`;

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-md"
      style={{ backdropFilter: backdrop as unknown as string, WebkitBackdropFilter: backdrop as unknown as string}}
    >
      <motion.div
        className="container flex items-center justify-between h-16"
        initial={{ filter: 'blur(8px)', opacity: 0, y: -4 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      >
        <a href="#home" className="text-xl font-bold tracking-tight">
        <MorphingText
        texts={["Vincent", "JV.", "Jonathan"]  }
        className="text-[12px] md:text-[12px] -mt-2 -ml-1"
        />
          <span className="text-[--color-accent]"></span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-[--color-muted]">
          <a className="hover:text-white" href="#home">Home</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#experience">Work</a>
          <a className="hover:text-white" href="#contact">Contact</a>
          <a className="ml-2 px-4 py-2 rounded-full btn-primary hover:bg-[--color-accent-600]" href="#"></a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
      function App() {
        return (
            // SECTION: App root & global background meteors
            <>
            <Meteors className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" count={24} />
            <Navbar />
            <WavyBackground className="text-center">
          {/* TITLE */}
          <motion.h1
            className="glitch text-5xl md:text-7xl font-extrabold tracking-tight -translate-y-6"
            data-text="INITIALIZING DIGITAL EXPERIENCE"
            initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            INITIALIZING DIGITAL EXPERIENCE
          </motion.h1>

          {/* SUBTITLE 1 */}
          <motion.p
            className="mt-3 text-lg text-gray-300"
            initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
          >
            Web Developer | Crafting Interactive Web Experiences
          </motion.p>

          {/* SUBTITLE 2 */}
          <motion.p
            className="mt-3 text-lg text-gray-300"
            initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
          >
            Scroll down to see my experience
          </motion.p>

          <ArrowDown />
        </WavyBackground>

          {/* SECTION: Hero */}
      <main className="container pt-20 relative z-10" id="home">
        <section className="relative grid md:grid-cols-2 gap-8 items-center">
          {/* SECTION: Hero (left) text block */}
          
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="mb-4"
            >
            {/* SECTION: Heading "Hello, I'm" */}
            
            <motion.h1
              className="mt-5 text-5xl md:text-4xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1.3 }}
            >
              Hello, I&apos;m
            </motion.h1>
            {/* SECTION: Heading Name */}
            <motion.h2
              className="mt-2 text-5xl md:text-6xl font-black tracking-tight text-[var(--color-name)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 1.5 }}
            >
              Jonathan Vincent
            </motion.h2>
            {/* SECTION: Description 1 */}
            <div className="mt-2 flex items-start justify-start">
               <RotateWords 
                 text="And I'm a" // kalau ga mau ada kata di depannya
                 words={[
                   "Mobile Developer",
                   "Front-end Developer",
                   "Back-end Developer",
                   "Web Developer"
                 ]}
                 className="text-[--color-muted] uppercase tracking-wide text-xs md:text-sm font-medium -ml-0 -mb-0 text-[var(--color-name)]"
               />
             </div>
            {/* SECTION: Description 2 */}
            <motion.p
              className="mt-4 text-sm md:text-base text-[--color-muted] max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 1.2 }}
            >
              Saya adalah pembelajar yang meyakini bahwa pertumbuhan adalah mata uang utama. Didorong oleh keingintahuan, saya berkomitmen untuk terus mengasah keahlian dan beradaptasi dengan perubahan.
            </motion.p>
            {/* SECTION: CTAs */}
            <motion.div
              className="mt-6 flex items-center gap-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.18 } },
              }}
            >
              <motion.a
                initial={{ filter: 'blur(8px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay: 0.55, duration: 0.5 }}
                variants={{ hidden: { y: 12, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                href="#cv"
                className="px-5 py-2 rounded-full btn-primary hover:bg-[--color-accent-600]"
              >
                Download CV
              </motion.a>
              <motion.a
                initial={{ filter: 'blur(8px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay: 0.55, duration: 0.5 }}
                variants={{ hidden: { y: 12, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                href="https://github.com/JonathanVincent19"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open GitHub profile"
                className="px-3 py-3 rounded-full btn-outline hover:bg-white/5 inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.701-2.782.604-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.004.07 1.532 1.031 1.532 1.031.893 1.53 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.684-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.545 1.378.202 2.397.1 2.65.64.7 1.028 1.593 1.028 2.684 0 3.842-2.337 4.688-4.566 4.937.359.309.679.92.679 1.855 0 1.338-.012 2.417-.012 2.746 0 .267.18.577.688.479A10.004 10.004 0 0 0 22 12c0-5.523-4.477-10-10-10Z" clipRule="evenodd" />
                </svg>
              </motion.a>

              <motion.a
                initial={{ filter: 'blur(8px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay: 0.55, duration: 0.5 }}
                variants={{ hidden: { y: 12, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                href="https://www.linkedin.com/in/jonathanvtimothy/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open LinkedIn profile"
                className="px-3 py-3 rounded-full btn-outline hover:bg-white/5 inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.452 20.452h-3.555v-5.569c0-1.329-.027-3.037-1.852-3.037-1.853 0-2.135 1.447-2.135 2.943v5.663H9.354V9h3.413v1.561h.048c.476-.9 1.637-1.852 3.368-1.852 3.602 0 4.266 2.371 4.266 5.455v6.288zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.115 20.452H3.559V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>

              <motion.a
              initial={{ filter: 'blur(8px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              variants={{ hidden: { y: 12, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              href="https://www.instagram.com/jonathan.jon_/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open Instagram profile"
              className="px-3 py-3 rounded-full btn-outline hover:bg-white/5 inline-flex items-center justify-center"
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2A3.5 3.5 0 1 0 12 15a3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
              </svg>
            </motion.a>

            <motion.a
              initial={{ filter: 'blur(8px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              variants={{ hidden: { y: 12, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              href="https://wa.me/089637221403"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open WhatsApp chat"
              className="px-3 py-3 rounded-full btn-outline hover:bg-white/5 inline-flex items-center justify-center"
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5">
              <path d="M16.003 3C9.37 3 3.998 8.373 4 15.006c0 2.65.87 5.1 2.342 7.084L4 29l7.133-2.312A11.95 11.95 0 0 0 16.003 27C22.636 27 28 21.627 28 14.994 28 8.373 22.636 3 16.003 3zm0 22c-1.873 0-3.615-.51-5.117-1.393l-.365-.217-4.24 1.373 1.385-4.133-.238-.373A9.923 9.923 0 0 1 6 15.006c0-5.522 4.478-10 10.003-10C21.526 5.006 26 9.484 26 15.006c0 5.522-4.474 9.994-9.997 9.994zm5.503-7.59c-.3-.15-1.777-.867-2.052-.967-.275-.1-.475-.15-.675.15-.2.3-.775.966-.95 1.166-.175.2-.35.225-.65.075-.3-.15-1.26-.465-2.397-1.48-.886-.79-1.484-1.767-1.659-2.067-.175-.3-.018-.462.132-.612.136-.136.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.616-.925-2.216-.25-.6-.5-.517-.675-.517-.175 0-.375-.025-.575-.025s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.116 3.225 5.125 4.525.717.309 1.275.494 1.71.633.718.228 1.372.196 1.887.119.575-.086 1.777-.726 2.027-1.426.25-.7.25-1.3.175-1.426-.075-.125-.275-.2-.575-.35z"/>
              </svg>
            </motion.a>

            </motion.div>
          </motion.div>
          {/* SECTION: Hero (right) segmented avatar ring */}
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <AvatarRing src="/JOJO2.png" size={450} ringWidth={5} segments={16} visibleRatio={0.55} />
          </motion.div>
        </section>
        {/* Placeholder sections for navigation links */}
        {/* SECTION: Stats */}
        <section className="mt-16 border-t border-white/5 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div>
              <div className="text-5xl font-extrabold"><Counter to={2} /></div>
              <div className="mt-2 text-[--color-muted]">Years of experience</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold"><Counter to={10} /></div>
              <div className="mt-2 text-[--color-muted]">Projects completed</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold"><Counter to={8} /></div>
              <div className="mt-2 text-[--color-muted]">Programming languages</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold"><Counter to={3} /></div>
              <div className="mt-2 text-[--color-muted]">Clients served</div>
            </div>
          </div>
        </section>

        
        <section id="experience" className="py-20 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold"
      >
        Experience & Education
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
        className="mt-3 text-lg text-gray-300"
      >
        A summary of my organizational, work, and academic journey.
      </motion.p>

      {/* Gradient Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="mt-4 flex justify-center origin-left"
      >
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></div>
      </motion.div>

      <section id="organizational-experience" className="py-16">
      {/* Title with Icon */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center gap-2"
      >
        {/* Icon */}
        <Briefcase className="w-6 h-6 text-green-400" />
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Organizational Experience
        </h3>
      </motion.div>

      {/* Content Container */}
      <div className="mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BackgroundGradient className="p-6 md:p-8 rounded-2xl bg-[#11161b] border border-white/10 shadow-xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="text-left">
                <h4 className="text-2xl font-semibold text-white">First Year Program Leader</h4>
                <a
                  href="https://www.instagram.com/p/DJRNwP0SsI0/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-block mt-2 text-emerald-400 hover:text-emerald-300"
                >
                  First Year Program Binusian 2029
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 px-2.5 py-1 border border-emerald-500/20">
                  <Calendar className="w-4 h-4" />
                  Mar 2025 - Jun 2026
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 px-2.5 py-1 border border-emerald-500/20">
                  <MapPin className="w-4 h-4" />
                  BINUS University
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-left text-gray-300 mt-4 leading-relaxed">
            I led 20 Freshmen Leaders and coordinated activities for over 800 new
            students, ensuring the orientation program ran smoothly and made a
            positive impact. I designed teamwork- and integrity-focused activities
            that enhanced collaboration, while serving as the main liaison between
            the core committee and leaders, improving communication efficiency
            and reducing task delays.
            </p>

            {/* Achievements */}
            <div className="mt-6">
              <h5 className="text-left text-emerald-400 font-semibold">Achievements:</h5>
              <ul className="mt-3 text-left list-disc marker:text-emerald-400 pl-5 space-y-1 text-gray-300">
                <li>On Progress</li>
                {/* <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>.</span></li> */}
              </ul>
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>

      <div className="mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BackgroundGradient className="p-6 md:p-8 rounded-2xl bg-[#11161b] border border-white/10 shadow-xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="text-left">
                <h4 className="text-2xl font-semibold text-white">Freshmen Leader</h4>
                <a
                  href="https://www.instagram.com/p/DJRNwP0SsI0/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-block mt-2 text-emerald-400 hover:text-emerald-300"
                >
                  First Year Program Binusian 2028
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 px-2.5 py-1 border border-emerald-500/20">
                  <Calendar className="w-4 h-4" />
                  Jun 2024 - Sep 2024
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 px-2.5 py-1 border border-emerald-500/20">
                  <MapPin className="w-4 h-4" />
                  BINUS University
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-left text-gray-300 mt-4 leading-relaxed">
            I mentored more than 10 freshmen during their transition to
            campus life, facilitating workshops and discussions that fostered
            responsibility and teamwork, contributing to an orientation
            program that achieved positive participant feedback.
            </p>

            {/* Achievements */}
            <div className="mt-6">
              <h5 className="text-left text-emerald-400 font-semibold">Achievements:</h5>
              <ul className="mt-3 text-left list-disc marker:text-emerald-400 pl-5 space-y-1 text-gray-300">
                <li>Master of Ceremony (MC) – FYP B2028 Inauguration 2024</li>
                {/* <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>.</span></li>
                <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>.</span></li> */}
              </ul>
            </div>
          </BackgroundGradient>
        </motion.div>
      
      </div>  
    </section>

    {/* ===== EDUCATION ===== */}
    <section id="education" className="py-12 text-left">
      {/* Title with Icon */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center gap-2"
      >
        <GraduationCap className="w-6 h-6 text-green-400" />
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Education
        </h3>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-6"
      >
        <BackgroundGradient className="w-full p-6 md:p-8 rounded-2xl bg-[#11161b] border border-white/10 shadow-xl">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 md:flex-nowrap">
            <h4 className="text-3xl md:text-4xl font-extrabold text-white">
              Bachelor of Computer Science
            </h4>
            <span className="shrink-0 text-green-400 text-xl md:text-2xl font-semibold">3.24/4.0</span>
          </div>

          {/* University link */}
          <a
            href="https://binus.ac.id"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block mt-3 text-xl font-semibold text-green-400 hover:text-emerald-300"
          >
            Bina Nusantara University
          </a>

          {/* Meta row */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-gray-300">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              2023 - 2027
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              Malang, Indonesia
            </span>
          </div>

          {/* Details */}
          <div className="mt-5 space-y-1 text-gray-300">
            <p>Streaming: Digital Creative Technology</p>
            <p>5 / 8 Semester</p>
          </div>

          {/* Achievements */}
          <div className="mt-6">
            <h5 className="text-green-400 font-semibold">Achievements:</h5>
            <ul className="mt-3 list-disc marker:text-green-400 pl-5 space-y-2 text-gray-300">
              <li>On Progres</li>
              {/* <li></li>
              <li></li> */}
            </ul>
          </div>
        </BackgroundGradient>
      </motion.div>
    </section>
 </section>
    <section id="projects" className="py-20 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold"
      >
        My Projects
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
        className="mt-3 text-lg text-gray-300"
      >
        A collection of my recent projects and work portfolio.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="mt-4 flex justify-center origin-left"
      >
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></div>
      </motion.div>

        {/* Projects Grid */}
        <section className="container mt-20">
          <div className="max-w-5xl mx-auto md:pl-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Media Panel (left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="relative p-4 md:p-6 rounded-2xl bg-[#11161b] border border-white/10 shadow-xl">
                
                {/* 16:9 wide preview area */}
                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden border border-white/5 bg-gradient-to-b from-slate-800/60 to-slate-900/60">
                <img
                    src="/Por2.png" 
                    alt="Preview"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </BackgroundGradient>
            </motion.div>

            {/* Details Panel (right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-green-400 text-3xl md:text-4xl font-extrabold mt-2">FinApp</h3>
              <h3 className="text-green-400 text-1xl md:text-2xl font-extrabold mt-2 mb-1">Solusi Cerdas Keuangan UMKM</h3>
              <p className="mt-4 text-gray-300 max-w-xl">
              Easily manage sales and expenses by category, gain clear financial insights, and unlock AI-powered strategies to boost your business growth.
              </p>

              {/* Tech badges */}
              <div className="mt-4 flex flex-wrap gap-3">
                {['React Native','Golang','MySQL'].map((t) => (
                  <span key={t} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 px-3 py-1 text-sm">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full btn-primary hover:bg-[--color-accent-600] flex items-center gap-2">
                
                  <LuVideo size={20} color=''/>
                  Video Demo
                  </a>
                <a
                  href="https://github.com/JonathanVincent19/react-finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full btn-outline hover:bg-white/5 flex items-center gap-2"
                >
                  <LuGithub size={20} />
                  Code
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="mt-40 border-t border-white/10 bg-[#0b0f13]">
        <div className="container py-14">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Contact */}
            <div>
              <h4 className="text-2xl font-bold text-emerald-400">Contact</h4>
              <div className="mt-6 space-y-5 text-gray-300">
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href="mailto:your@email.com" className="hover:text-white">jthan730@email.com</a>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div>Malang, Indonesia</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-3">Socials</div>
                  <div className="flex items-center gap-3">
                    <a aria-label="LinkedIn" href="https://www.linkedin.com/in/jonathanvtimothy/" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 inline-flex items-center justify-center"><Linkedin className="w-5 h-5"/></a>
                    <a aria-label="GitHub" href="https://github.com/JonathanVincent19" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 inline-flex items-center justify-center"><Github className="w-5 h-5"/></a>
                    <a aria-label="Globe" href="#" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 inline-flex items-center justify-center"><Globe className="w-5 h-5"/></a>
                    <a aria-label="Instagram" href="https://www.instagram.com/jonathan.jon_/" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 inline-flex items-center justify-center"><Instagram className="w-5 h-5"/></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="md:border-l md:border-white/10 md:pl-8">
              <h4 className="text-2xl font-bold text-emerald-400">Skills</h4>
              <div className="mt-6 space-y-6 text-gray-300">
                <div>
                  <div className="font-semibold">Frontend:</div>
                  <div className="mt-1 text-gray-400">React, JavaScript, Java, HTML/CSS, React Native, Kotlin</div>
                </div>
                <div>
                  <div className="font-semibold">Backend:</div>
                  <div className="mt-1 text-gray-400">Golang, MySQL</div>
                </div>
                <div>
                  <div className="font-semibold">Design:</div>
                  <div className="mt-1 text-gray-400">Figma</div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="md:border-l md:border-white/10 md:pl-8">
              <h4 className="text-2xl font-bold text-emerald-400">Services</h4>
              <ul className="mt-6 space-y-3 text-gray-300">
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>UI/UX Design & Prototyping</li>
                <li>Custom Web Development</li>
                <li>Mobile App Development</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} Jonathan Vincent • Made with <span className="text-rose-400">❤</span> and lots of McDonald's.
          </div>
        </div>
      </footer>
      </main>
      </>
  );
}

export default App;


