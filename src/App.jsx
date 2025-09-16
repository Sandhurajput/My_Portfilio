import React, { useState, useEffect, useRef } from 'react';
const IconMail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const IconPhone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const IconLocation = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconCode = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const IconCertificate = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5v2m-2 2v2m-2 2v2m-2 2v2M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4l-4 4v-4H7a2 2 0 0 1-2-2V5z"/></svg>
);
const IconProject = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 10H20a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2h-5.5a2.5 2.5 0 0 1 0-5z"/><path d="M12.5 16H20a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2h-7.5a2.5 2.5 0 0 1 0-5z"/><path d="M12.5 4H20a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2h-7.5a2.5 2.5 0 0 1 0-5z"/></svg>
);
const IconStar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
const IconLinkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const IconTwitter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c.9 1.6 2.8 2.2 4.8 2.2a12.83 12.83 0 0 0 3.8-1.55 1.53 1.53 0 0 1 1.05-1.9 1.53 1.53 0 0 1 1.9.15A1.53 1.53 0 0 1 17 19.5v.5a2.53 2.53 0 0 0 2.5 2.5c.2 0 .4-.02.6-.05a4.48 4.48 0 0 0 3.3-4.25v-.5a10.9 10.9 0 0 1-1.53-3.14z"/></svg>
);
const IconBackToTop = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>
);

const IconFacebook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const IconInstagram = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const IconYoutube = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2A16.29 16.29 0 0 0 12 2c-4.32 0-8.62.91-10.6 2.42a2.78 2.78 0 0 0-1.94 2v11.16a2.78 2.78 0 0 0 1.94 2 16.29 16.29 0 0 0 10.6 2c4.32 0 8.62-.91 10.6-2.42a2.78 2.78 0 0 0 1.94-2zm-12.66 6.36V9.48l5.24 3.2-5.24 3.2V12.78z"/></svg>
);
const useInView = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setInView(true);
        setHasAnimated(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, hasAnimated]);

  return [ref, inView];
};

const App = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const totalTestimonials = 3;
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });
  const [certsRef, certsInView] = useInView({ threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [blogRef, blogInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.2 });

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
      window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % totalTestimonials);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const testimonials = [
    { text: 
'I got the opportunity to attend the GHCI event in Bangalore, where I participated in multiple workshops and talks. This exposure gave me valuable learning, industry insights, and confidence to explore new possibilities in tech and beyond.' },
    { text: 'I visited IIT Patna for a FOSS event, where I contributed to open-source projects and attended insightful workshops and TED-style talks. This experience helped me improve my technical knowledge and understand the open-source community better' },
    { text: 'Representing my campus, I won an inter-campus debate competition, which gave me the chance to visit another campus as an incentive. This exposure not only boosted my confidence but also helped me strengthen my soft skills and communication.' },
  ];

 const projects = [
  { 
    title: 'Brainy Buddy - Mini AI Chatboot', 
    type: 'Web Design', 
    image: '/Brainyb.png', 
    link: 'https://lucent-cat-7c7f33.netlify.app/' 
  },
  { 
    title: 'Generator - FlashCard Generator', 
    type: 'Web Design', 
    image: '/Flashcard.png', 
    link: 'https://vermillion-kleicha-c5a9de.netlify.app/' 
  },
  { 
    title: 'FoodieFind - A Food Resturant App', 
    type: 'Web Design', 
    image: '/FoodieFind.png', 
    link: 'https://bespoke-dodol-b54e0a.netlify.app/' 
  },
  { 
    title: 'Magic Drawing Board', 
    type: 'UI/UX', 
    image: '/Drwing.png', 
    link: 'https://calm-travesseiro-4e1d57.netlify.app/' 
  },
  { 
    title: 'Apna Bihar', 
    type: 'Web Design', 
    image: '/Bihar.png', 
    link: 'https://remarkable-horse-1568ec.netlify.app/' 
  },
  { 
    title: 'WomenSafty App', 
    type: 'Web Design', 
    image: '/Women.png', 
    link: 'https://cheerful-parfait-db4d6e.netlify.app/' 
  },
];


  const filteredProjects = activeTab === 'All' ? projects : projects.filter(p => p.type === activeTab);

  const certifications = [
  ];
  const blogPosts = [
  ];
  
  const handleContactSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      form.reset();
      const contactForm = document.getElementById('contact-form-message');
      contactForm.textContent = 'Message sent successfully! I will get back to you soon.';
      contactForm.classList.remove('hidden');
      contactForm.classList.add('opacity-100');
      setTimeout(() => {
        contactForm.classList.remove('opacity-100');
        contactForm.classList.add('hidden');
      }, 5000); // Hide message after 5 seconds
  };

  return (
    <div className="bg-white text-gray-800 font-sans antialiased relative overflow-x-hidden">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-slow {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        @keyframes pulse-fast {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        @keyframes glow {
            0%, 100% { transform: scale(1) translate(var(--tw-translate-x), var(--tw-translate-y)); opacity: 0.2; }
            50% { transform: scale(1.1) translate(calc(var(--tw-translate-x) + 5px), calc(var(--tw-translate-y) + 5px)); opacity: 0.4; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-card-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s infinite;
        }
        .animate-pulse-fast {
            animation: pulse-fast 1.5s infinite;
        }
        .glow-1 { animation: glow 4s ease-in-out infinite; }
        .glow-2 { animation: glow 4s ease-in-out 1s infinite; }
        .card-hover:hover {
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          transform: translateY(-8px) scale(1.02);
        }
        .loader {
          width: 50px;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 8px solid #cbd5e1;
          border-right-color: #f97316;
          animation: spinner 1s infinite linear;
        }
        @keyframes spinner {
          to { transform: rotate(360deg); }
        }
        /* Custom styles for the portfolio and testimonials */
        .contact-form-bg {
          background-image: linear-gradient(to bottom, #2d3748, #1a202c);
        }
        .testimonial-carousel {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }
      `}</style>
      
      {/* Get in Touch Button */}
      <button
          onClick={handleGetInTouch}
          className="fixed bottom-24 right-8 z-50 p-4 bg-orange-500 text-white rounded-full shadow-lg transition-all duration-300 transform animate-pulse-fast hover:animate-none hover:scale-110 cursor-pointer"
          aria-label="Get in touch"
        >
          Get in touch
      </button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-orange-500 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer"
          aria-label="Back to top"
        >
          <IconBackToTop className="w-6 h-6" />
        </button>
      )}

      {/* Navigation Bar */}
      <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-2 flex items-center justify-center font-bold group-hover:animate-spin transition-all duration-300">SK</div>
            <a href="#hero" className="text-xl font-bold text-gray-800">SK Portfolio</a>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#hero" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-300 cursor-pointer">Home</a>
            <a href="#certifications" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-300 cursor-pointer">Certificate</a>
            <a href="#experience" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-300 cursor-pointer">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-300 cursor-pointer">Projects</a>
            <a href="#blog" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-300 cursor-pointer">Blog</a>
            <a href="#contact" className="bg-orange-500 text-white font-medium py-2 px-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 cursor-pointer">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-50 py-20 px-4 relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax elements */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200 rounded-full glow-1"
          style={{ transform: `translate(calc(-50% + ${mouseX * 0.02}px), calc(-50% + ${mouseY * 0.02}px))` }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-200 rounded-full glow-2"
          style={{ transform: `translate(calc(-50% - ${mouseX * 0.02}px), calc(-50% - ${mouseY * 0.02}px))` }}
        ></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full relative z-10">
          <div className="text-center md:text-left md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm font-semibold text-green-500 mb-2 block">LET'S BUILD TOGETHER</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">I'm Sandhya Kumari,<br/> <span className="text-orange-500">Web Developer</span></h1>
            <p className="text-lg text-gray-600 mb-6">I am a Frontend Developer skilled in HTML, CSS, JavaScript, Express.js, Node.js, React, Tailwind, Git/GitHub, databases, and Wix. Alongside tech, I have also worked as a Facility Coordinator, Ops Coordinator, DSA Coordinator, and House Leader, gaining both technical and leadership experience..</p>
            <div className="flex justify-center md:justify-start space-x-4">
  <button className="bg-orange-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
    Join Me
  </button>

  <a 
    href="https://drive.google.com/uc?export=download&id=1CZe4nKdqhbmqUuzodWX_3LEmLG3RML5W" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gray-200 text-gray-800 py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300 hover:translate-y-[-4px] cursor-pointer"
  >
    Download CV
  </a>
</div>

          </div>
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <img src="/Photo.jpeg" alt="Tushant Kumar" className="rounded-full shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Experience Section with dynamic timeline */}
      <section id="experience" className="py-16 px-4 bg-white" ref={timelineRef}>
        <div className="max-w-7xl mx-auto text-center">
          {/* <span className="text-sm font-semibold text-gray-400 mb-2 block">PROFESSIONAL JOURNEY</span> */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">My Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">My journey in the educational field is driven by a passion for innovation, hands-on learning, At Navgurukul, I enhanced not only my technical skills (web development, programming, tools) but also developed strong life skills and soft skills such as communication, teamwork, and leadership..</p>
          <div className="relative">
            {/* The animated line that draws itself */}
            <div
              className={`absolute top-0 left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2 origin-top transition-transform duration-1000 ease-out`}
              style={{ transform: `scaleY(${timelineInView ? 1 : 0}) translateX(-50%)` }}
            ></div>
            <div className="space-y-12 md:space-y-16">
              {/* Experience 1 */}
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center w-full">
                <div className="md:w-1/2 text-right">
                  <span className={`text-sm font-semibold text-gray-500 ${timelineInView ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>2024 July-2025 January</span>
                </div>
                <div className="md:w-1/2 text-left relative">
                  <div className={`bg-white p-6 rounded-2xl shadow-lg card-hover transition-transform duration-300 ml-4 md:ml-8 ${timelineInView ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
                    <h3 className="text-2xl font-bold text-gray-900">Facility and OPS Coordinator</h3>
                    <p className="text-gray-500 mb-2">NavGurukul</p>
                    <p className="text-gray-700">I have managed operations and finance processes, successfully handling 70+ reimbursements, vendor management, and fund transactions with accuracy and transparency. Along with this, I contributed to operational planning, coordination, and smooth execution of processes, ensuring efficiency and accountability in the organization..</p>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative z-10 flex flex-col md:flex-row-reverse items-start md:items-center w-full">
                <div className="md:w-1/2 text-left">
                  <span className={`text-sm font-semibold text-gray-500 ${timelineInView ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '1.0s' }}>2024 November-2025 August</span>
                </div>
                <div className="md:w-1/2 text-right relative">
                  <div className={`bg-white p-6 rounded-2xl shadow-lg card-hover transition-transform duration-300 mr-4 md:mr-8 ${timelineInView ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                    <h3 className="text-2xl font-bold text-gray-900">House Leader"Bhairav"</h3>
                    <p className="text-gray-500 mb-2">NavGurukul</p>
                    <p className="text-gray-700">At Navgurukul, I managed a group of 25+ people, supporting their studies, improving English culture, and resolving day-to-day issues within the house. This experience strengthened my leadership, coordination, and problem-solving skills..</p>
                  </div>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center w-full">
                <div className="md:w-1/2 text-right">
                  <span className={`text-sm font-semibold text-gray-500 ${timelineInView ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>2025 (June-August)</span>
                </div>
                <div className="md:w-1/2 text-left relative">
                  <div className={`bg-white p-6 rounded-2xl shadow-lg card-hover transition-transform duration-300 ml-4 md:ml-8 ${timelineInView ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '1.7s' }}>
                    <h3 className="text-2xl font-bold text-gray-900">DSA Coordinator</h3>
                    <p className="text-gray-500 mb-2">NavGurukul</p>
                    <p className="text-gray-700">As a DSA Coordinator at Navgurukul, I facilitated solving DSA problems with the help of mentors, supported peers in their learning journey, and contributed to planning and conducting DSA classes effectively..</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Certifications Section with staggered animation */}
<section id="certifications" className="py-16 px-4 bg-gray-50" ref={certsRef}>
  <div className="max-w-7xl mx-auto text-center">
    <span className="text-sm font-semibold text-gray-400 mb-2 block">CERTIFICATIONS </span>
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Certifications</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
      Certified in various industry-relevant skills to support innovation, efficiency, and professional growth.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Certificate 1 */}
      <div
        className={`bg-white p-6 rounded-2xl shadow-lg card-hover transition-all duration-300 cursor-pointer ${certsInView ? 'animate-card-in' : 'opacity-0'}`}
        style={{ animationDelay: `0s` }}
      >
        <img src="/Certi1.png" alt="AI Fundamentals Certificate" className="rounded-lg mb-4 w-full h-48 object-cover" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">AI Fundamentals</h3>
        <p className="text-gray-600 text-sm mb-4">NavGurukul & Anudip Foundation</p>
        <a
          href="https://drive.google.com/file/d/1oHnkV-VjHclnPzbCb1VPggAaOIY-5Ybe/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300"
        >
          View Certificate <IconArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>

      {/* Certificate 2 */}
      <div
        className={`bg-white p-6 rounded-2xl shadow-lg card-hover transition-all duration-300 cursor-pointer ${certsInView ? 'animate-card-in' : 'opacity-0'}`}
        style={{ animationDelay: `0.2s` }}
      >
        <img src="/Certi2.png" alt="Version Control Certificate" className="rounded-lg mb-4 w-full h-48 object-cover" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Version Control</h3>
        <p className="text-gray-600 text-sm mb-4">Meta - Coursera</p>
        <a
          href="https://drive.google.com/file/d/1qGzDUS4zjD5Yx2vGIlaDpdsU_yo-myqW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300"
        >
          View Certificate <IconArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>

      {/* Certificate 3 */}
      <div
        className={`bg-white p-6 rounded-2xl shadow-lg card-hover transition-all duration-300 cursor-pointer ${certsInView ? 'animate-card-in' : 'opacity-0'}`}
        style={{ animationDelay: `0.4s` }}
      >
        <img src="/Certi3.png" alt="Generative AI with AWS" className="rounded-lg mb-4 w-full h-48 object-cover" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Generative AI with AWS</h3>
        <p className="text-gray-600 text-sm mb-4">Udacity</p>
        <a
          href="https://drive.google.com/file/d/1tuul0TAhHEUvezI7LV4HksaP_bvMOqNJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300"
        >
          View Certificate <IconArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>

    </div>
  </div>
</section>

      {/* Projects Section with staggered animation */}
      <section id="projects" className="py-16 px-4 bg-white" ref={projectsRef}>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-semibold text-gray-400 mb-2 block">CREATIVE PROJECTS</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Let's have a look at my Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Here are some of my recent projects that I've worked on. Each project has been carefully crafted to needs and deliver exceptional results.</p>
          <div className="flex justify-center space-x-4 mb-12">
            {['All', 'Web Design', 'UI/UX', ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-6 rounded-full font-medium transition-colors duration-300 cursor-pointer ${activeTab === tab ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-300 cursor-pointer ${projectsInView ? 'animate-card-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-left">
                  <span className="text-xs font-semibold text-gray-500">{project.type}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{project.title}</h3>
                  <p className="text-gray-600 mt-2">A responsive web project built with HTML, CSS, JavaScript, and styled using Tailwind CSS for a clean and modern design..</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-500 font-semibold mt-4 hover:text-orange-600 transition-colors duration-300">
                    View Project <IconArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-12 bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300 cursor-pointer">
            See All Projects
          </button>
        </div>
      </section>



      

      {/* Things which I got As incentive */}
      <section className="bg-gray-900 text-white py-16 px-4" ref={blogRef}>
        <div className="max-w-7xl mx-auto">
          {/* Testimonials */}
          <div className="text-center mb-16">
            {/* <span className="text-sm font-semibold text-gray-400 mb-2 block">CLIENT FEEDBACK</span> */}
            <h2 className="text-4xl font-extrabold mb-4">Learning Beyond Academics </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">“I gained valuable exposure beyond academics, which contributed to my overall growth and learning.”</p>
            <div className={`mt-12 relative w-full overflow-hidden max-w-3xl mx-auto ${blogInView ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex-shrink-0 w-full p-8 bg-gray-800 rounded-2xl shadow-lg">
                            <div className="flex items-center mb-4">
                                <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 rounded-full mr-4" />
                                <div>
                                    <p className="font-bold text-lg">{testimonial.author}</p>
                                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => <IconStar key={i} className="w-4 h-4" />)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
                {/* Carousel Navigation Buttons */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${currentTestimonial === index ? 'bg-orange-500' : 'bg-gray-500 hover:bg-orange-400'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
          </div>
          {/* Blog */}
          <div className="text-center mt-16">
            {}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-300 cursor-pointer ${blogInView ? 'animate-card-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-bold text-white mt-2">{post.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{post.description}</p>
                    <a href="#" className="inline-flex items-center text-orange-400 font-semibold mt-4 hover:text-orange-500 transition-colors duration-300">
                      View All Posts <IconArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-12 bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-700 transition-colors duration-300 cursor-pointer">
              View All Posts
            </button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16 px-4" ref={contactRef}>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-gray-400 mb-2 block">GET IN TOUCH</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Have an Awesome Project Idea?<br />Let's Discuss</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className={`p-8 rounded-2xl shadow-xl bg-orange-500 text-white flex flex-col justify-between ${contactInView ? 'animate-fadeIn' : 'opacity-0'}`}>
              <div>
                <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
                <p className="text-gray-200 mb-6">Fill up the form and I'll get back to you within 24 hours.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center p-2 rounded-full bg-white bg-opacity-20 mr-4 mt-1"><IconPhone className="w-5 h-5" /></div>
                  <div>
                    <span className="block font-medium">Phone</span>
                    <a href="tel:+91-9988776655" className="text-gray-200 hover:text-white">+91 9661347329</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center p-2 rounded-full bg-white bg-opacity-20 mr-4 mt-1"><IconMail className="w-5 h-5" /></div>
                  <div>
                    <span className="block font-medium">Email</span>
                    <a href="mailto:tushant2109@gmail.com" className="text-gray-200 hover:text-white">sandhyakumari24@navgurukul.org</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center p-2 rounded-full bg-white bg-opacity-20 mr-4 mt-1"><IconLocation className="w-5 h-5" /></div>
                  <div>
                    <span className="block font-medium">Address</span>
                    <p className="text-gray-200">Kishanganj, Bihar, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`p-8 rounded-2xl shadow-xl bg-white ${contactInView ? 'animate-fadeInScale' : 'opacity-0'}`}>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input type="text" id="name" name="name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-300" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input type="email" id="email" name="email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-300" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-300" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow duration-300" required></textarea>
                </div>
                <button type="submit" className="w-full py-3 px-6 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300">
                  Send Message
                </button>
                <div id="contact-form-message" className="hidden opacity-0 text-center mt-4 transition-opacity duration-500 text-gray-800"></div>
              </form>
            </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 px-4 text-gray-400">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Column 1: TK Portfolio */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 mr-2 flex items-center justify-center font-bold text-gray-800">SK</div>
                      <span className="text-xl font-bold text-white">SK Portfolio</span>
                  </div>
                  <p className="text-sm mb-4">.</p>
                  <div className="flex space-x-2">
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"><IconTwitter /></a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"><IconFacebook /></a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"><IconInstagram /></a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition-colors duration-300"><IconYoutube /></a>
                  </div>
              </div>
              {/* Column 2: Pages */}
              <div>
                  <h4 className="text-white font-bold mb-4">Pages</h4>
                  <ul className="space-y-2">
                      <li><a href="#hero" className="hover:text-white transition-colors duration-300">Home</a></li>
                      <li><a href="#certifications" className="hover:text-white transition-colors duration-300">Certificate</a></li>
                      <li><a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a></li>
                      <li><a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a></li>
                      <li><a href="#blog" className="hover:text-white transition-colors duration-300">Blog</a></li>
                      <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
                  </ul>
              </div>
              {/* Column 3: Services */}
              <div>
                  <h4 className="text-white font-bold mb-4">Services</h4>
                  <ul className="space-y-2">
                      <li><a href="#" className="hover:text-white transition-colors duration-300">Web Development</a></li>
                      <li><a href="#" className="hover:text-white transition-colors duration-300">UI/UX Design</a></li>
                  </ul>
              </div>
              {/* Column 4: Contact */}
              <div>
                  <h4 className="text-white font-bold mb-4">Contact</h4>
                  <ul className="space-y-4">
                      <li>
                          <div className="flex items-center">
                              <IconMail className="w-5 h-5 mr-2 text-orange-500" />
                              <a href="mailto:sandhyakumari24@navgurukul.org" className="hover:text-white transition-colors duration-300">sandhyakumari24@navgurukul.org</a>
                          </div>
                      </li>
                      <li>
                          <div className="flex items-center">
                              <IconPhone className="w-5 h-5 mr-2 text-orange-500" />
                              <a href="tel:+919661347329" className="hover:text-white transition-colors duration-300">+91 9661347329</a>
                          </div>
                      </li>
                      <li>
                          <div className="flex items-center">
                              <IconLocation className="w-5 h-5 mr-2 text-orange-500" />
                              <p>Kishanganj, Bihar, India</p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-sm">&copy; 2024 Sandhya Kumari. All Rights Reserved.</p>
          </div>
      </footer>
    </div>
  );
};
export default App;
