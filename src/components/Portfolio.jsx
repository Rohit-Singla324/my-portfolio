import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import timebankImg from "../assets/timebank.png";
import educationImg from "../assets/education.png";
import { motion } from "framer-motion";

export default function Portfolio() {
  const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-gray-100 antialiased bg-gradient-to-br from-pink-400 via-purple-700 to-indigo-400 animate-gradient-x">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-10 px-6 md:px-10">
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
      RS
    </div>
    <div>
      <h1 className="text-xl font-semibold text-white">Rohit Singla</h1>
      <p className="text-sm text-gray-200">Full Stack Web Developer</p>
    </div>
  </div>

  <nav className="hidden md:flex gap-6 text-sm text-gray-200">
    <a href="#about" className="hover:text-indigo-300">About</a>
    <a href="#projects" className="hover:text-indigo-300">Projects</a>
    <a href="#skills" className="hover:text-indigo-300">Skills</a>
    <a href="#experience" className="hover:text-indigo-300">Experience</a>
    <a href="#contact" className="hover:text-indigo-300">Contact</a>
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-4 inline-block px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg text-sm"
    >
      Resume
    </a>
  </nav>
</header>


        {/* Hero Section with Animated Background */}
        <section className="relative grid md:grid-cols-2 gap-8 items-center mb-16 overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl group">
  {/* Animated Gradient Border Glow */}
  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>

  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-700 to-indigo-400 animate-gradient-x opacity-90 rounded-2xl"></div>

  {/* Overlay Pattern */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-2xl"></div>

  {/* Content */}
  <div className="relative z-10 p-8">
    <h2 className="text-4xl font-extrabold leading-tight text-white">
      Hi, I'm Rohit 👋
    </h2>

    {/* Animated Role */}
    <motion.p
      key={index}
      className="mt-4 text-2xl md:text-3xl font-semibold text-yellow-300"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {roles[index]}
    </motion.p>

    <p className="mt-4 text-gray-200">
      A passionate Full Stack Developer skilled in building scalable applications
      with React, Django, Flask, FastAPI, and MySQL.
    </p>

    <div className="mt-6 flex gap-4">
      <a
        href="#projects"
        className="px-5 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full shadow-lg transition transform hover:scale-105"
      >
        See Projects
      </a>
      <a
        href="https://linkedin.com/in/rohit-singla-1837b6286"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 border border-white text-white rounded-full hover:bg-white hover:text-indigo-700 transition transform hover:scale-105"
      >
        Hire Me
      </a>
    </div>
  </div>

  {/* Profile Image */}
  <div className="relative z-10 flex items-center justify-center p-8">
    <img
      src={profileImg}
      alt="Rohit Singla"
      className="w-72 h-72 rounded-2xl object-cover shadow-xl border-4 border-white transition transform hover:scale-105 hover:shadow-2xl"
    />
  </div>
</section>


        {/* About Section */}
        <section
  id="about"
  className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg mb-10 transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl group"
>
  {/* Gradient Glow Border */}
  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-3xl font-extrabold text-white">About Me</h3>
    <p className="mt-4 text-gray-200 leading-relaxed">
      I'm a B.Tech CSE student (2022–26) at Kurukshetra University. I enjoy solving
      real-world problems with technology, creating web apps that are performant,
      responsive, and user-friendly.
    </p>
    <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
      <li>
        Certified in{" "}
        <span className="text-pink-400 font-medium">Machine Learning (Stanford)</span>,{" "}
        <span className="text-purple-400 font-medium">Frontend Web Development (Infosys)</span>,{" "}
        <span className="text-indigo-400 font-medium">AWS DevOps (Infosys)</span>.
      </li>
      <li>
        Love experimenting with{" "}
        <span className="text-pink-400 font-medium">AI/ML</span> and building{" "}
        <span className="text-purple-400 font-medium">full-stack solutions</span>.
      </li>
    </ul>
  </div>
</section>


        {/* Projects */}
        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
              <article className="rounded-xl p-4 shadow-lg bg-gradient-to-br from-purple-600/30 to-indigo-600/30 border border-white/20 hover:scale-105 transform transition">
                   <img src={timebankImg} alt="Time Bank Project" className="h-40 w-full object-cover rounded-md"/>
                    <h4 className="mt-4 font-semibold text-white">Time Bank</h4>
                      <p className="mt-2 text-sm text-gray-200"> A full-stack platform for exchanging services using time as currency. Built
                                      with Django, React, and MySQL. Includes auth, database models, and automated
                                       email notifications 
                      </p>
              </article>

              <article className="rounded-xl p-4 shadow-lg bg-gradient-to-br from-purple-600/30 to-indigo-600/30 border border-white/20 hover:scale-105 transform transition">
                        <img src={educationImg} alt="Time Bank Project" className="h-40 w-full object-cover rounded-md"/>
                         <h4 className="mt-4 font-semibold text-white">education platform</h4>
                          <p className="mt-2 text-sm text-gray-200"> End-to-end design and development of scalable learning platforms using
                               Python, Django, Flask, and MySQL with REST APIs and responsive UI.
                          </p>
              </article>

          </div>
        </section>

        {/* Skills */}
        <section
  id="skills"
  className="relative mb-12 rounded-2xl p-8 shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 transform transition duration-500 hover:shadow-2xl group"
>
  {/* Gradient Glow Border */}
  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-3xl font-extrabold mb-6 text-white">Skills & Tools</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      {[
        "HTML / CSS / JS",
        "React.js",
        "Python / C++",
        "Django / Flask / FastAPI",
        "Express.js / Node.js",
        "MySQL",
        "REST APIs",
        "AI / ML",
        "NumPy / Pandas / Matplotlib",
        "Git / GitHub",
        "CI/CD  /  Docker",
        "n8n",
      ].map((skill, i) => (
        <div
          key={i}
          className="p-3 rounded-lg text-center font-medium text-gray-200 border border-white/20 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition transform hover:scale-105 hover:shadow-lg"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Experience */}
        <section
  id="experience"
  className="relative mb-12 rounded-2xl p-8 shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 group"
>
  {/* Gradient Glow Border */}
  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-3xl font-extrabold mb-6 text-white">Experience</h3>
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* Kidobotics Internship */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/20 hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-purple-600/30 transition transform hover:scale-[1.02] hover:shadow-xl">
        <div className="text-sm text-gray-300">
          Full Stack Intern —{" "}
          <span className="font-semibold text-pink-400">Kidobotics India Pvt. Ltd.</span>
        </div>
        <div className="mt-1 font-semibold text-gray-100">
          Jul 2025 – Aug 2025
        </div>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
          Contributed to building scalable web platforms, developed APIs, optimized
          databases, and implemented user-friendly interfaces.
        </p>
      </div>

      {/* AltumX Internship */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/20 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-500/30 transition transform hover:scale-[1.02] hover:shadow-xl">
        <div className="text-sm text-gray-300">
          Software Engineer Intern —{" "}
          <span className="font-semibold text-purple-400">AltumX Ltd.</span>
        </div>
        <div className="mt-1 font-semibold text-gray-100">
          Aug 2025 – Jan 2026
        </div>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
          Worked with <span className="text-indigo-400 font-medium">Strapi</span> and{" "}
          <span className="text-pink-400 font-medium">Next.js</span> to build scalable web
          platforms. Contributed to developing APIs, optimizing databases, and implementing
          modern, user-friendly interfaces.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Contact */}
        <section
  id="contact"
  className="relative rounded-2xl p-8 shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 group"
>
  {/* Gradient Glow Border */}
  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-3xl font-extrabold text-white mb-4">Get in Touch</h3>

    <p className="mt-2 text-gray-200">
      📧 Email:{" "}
      <span className="font-medium text-pink-400">rohitsingla324@gmail.com</span>
    </p>
    <p className="mt-1 text-gray-200">
      📱 Phone: <span className="font-medium text-purple-400">+91 7015675756</span>
    </p>

    {/* Social Links */}
    <div className="mt-6 flex gap-6 text-sm">
      <a
        href="https://linkedin.com/in/rohit-singla-1837b6286"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-lg transition transform hover:scale-110 hover:shadow-2xl"
      >
        🔗 LinkedIn
      </a>
      <a
        href="https://github.com/Rohit-Singla324"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 bg-gradient-to-r from-gray-700 to-black text-white rounded-full shadow-lg transition transform hover:scale-110 hover:shadow-2xl"
      >
        💻 GitHub
      </a>
    </div>
  </div>
</section>


        <footer className="mt-12 py-8 text-center text-gray-200 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 shadow-lg rounded-t-3xl">
  <p className="mb-2 text-sm">
    © {new Date().getFullYear()} <span className="font-semibold">Rohit Singla</span>
  </p>
  <p className="mb-2 text-sm flex items-center justify-center gap-1">
    Built with 
    <span className="text-red-400 animate-pulse">♥</span> 
    using <span className="font-medium">React</span> & <span className="font-medium">Tailwind</span>
  </p>
  <div className="flex justify-center gap-4 mt-3">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors bg-white/20 px-4 py-2 rounded-full shadow-md">
      GitHub
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors bg-white/20 px-4 py-2 rounded-full shadow-md">
      LinkedIn
    </a>
    <a href="mailto:rohitsingla324@gmail.com" className="hover:text-black transition-colors bg-white/20 px-4 py-2 rounded-full shadow-md">
      Email
    </a>
  </div>
</footer>


      </div>
    </div>
  );
}
