import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, Terminal, Database, Globe, Code2, Server, Cloud, Twitter } from 'lucide-react';
import { TbFileCv } from "react-icons/tb";
import img from './assets/9dc658f5-2f64-4c07-ae03-7ad522ccaf6c-removebg-preview.png';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with Redux state management and JWT authentication",
      tech: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat with MongoDB persistence and React frontend",
      tech: ["Socket.io", "Express", "React", "Node.js", "MongoDB"],
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Task Management System",
      description: "CRUD application with RESTful API and Material-UI components",
      tech: ["MongoDB", "Express", "React", "Node.js", "Material-UI"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Smartkidz - Education Platform",
      description: "Full-stack MERN application with React router dom and JWT authentication",
      tech: ["MongoDB", "Express", "React", "Node.js", "react router dom"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Xonxoni fnf - friends and Family Application",
      description: "WebSocket-based chat with MongoDB persistence and React frontend",
      tech: ["Socket.io", "Express", "React", "Node.js", "MongoDB"],
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Survey Application",
      description: "CRUD application with RESTful API and Material-UI components",
      tech: ["MongoDB", "Express", "React", "Node.js", "Material-UI"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Eco wonderland - Tour Management Application",
      description: "CRUD application with RESTful API and Material-UI components",
      tech: ["MongoDB", "Express", "React", "Node.js", "Material-UI"],
      icon: <Database className="w-6 h-6" />
    }
  ];

  const skills = {
    frontend: [
      "React.js & React Router ✅",
      "Redux & Redux Toolkit ",
      "TypeScript ",
      "Tailwind CSS ✅",
      "Material-UI ✅",
      "Next.js ",
      "JavaScript ES6+ ✅",
      "HTML5 & CSS3 ✅",
      "Responsive Design ✅",
      "WebSocket Integration "
    ],
    backend: [
      "Node.js ✅",
      "Express.js ✅",
      "RESTful APIs ✅",
      "GraphQL",
      "Authentication & JWT ✅",
      "Socket.io",
      "Microservices",
      "API Security",
      "Server-Side Rendering",
      "Performance Optimization"
    ],
    database: [
      "MongoDB ✅",
      "Mongoose ODM ",
      "Redis",
      "Database Design",
      "Data Modeling",
      "Indexing & Optimization",
      "Aggregation Pipeline",
      "Caching Strategies",
      "Backup & Recovery",
      "Replication"
    ],
    devops: [
      "Git & GitHub ✅",
      "Docker",
      "CI/CD Pipelines",
      "AWS Services",
      "Nginx",
      "Linux ✅",
      "Kubernetes",
      "Monitoring & Logging",
      "Cloud Deployment",
      "Security Best Practices"
    ]
  };
    // SEO Data
    const seoData = {
      title: "Arif Miah | Frontend & MERN Stack Developer from Bangladesh",
      description: "Professional portfolio of Arif Miah - Frontend Developer specializing in React.js, Node.js, and modern web technologies. View projects and skills in web development.",
      keywords: "Arif Miah, Frontend Developer, MERN Stack, React.js, Web Developer Bangladesh, Chittagong Developer, JavaScript Developer",
      image: "https://arifmiah.netlify.app/assets/9dc658f5-2f64-4c07-ae03-7ad522ccaf6c-removebg-preview-BHptUUMX.png", // 
      url: "https://arifmiah.netlify.app",
      socialLinks: {
        github: "https://github.com/ArifMiah07",
        linkedin: "https://www.linkedin.com/in/arifmiah01/",
        twitter: "https://x.com/ArifMiah01",
        facebook: "https://www.facebook.com/profile.php?id=61564664411937",
        instagram: "https://www.instagram.com/r_if32d/"
      }
    };
  
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Arif Miah",
      "jobTitle": "Frontend Developer | Mern stack developer",
      "url": seoData.url,
      "sameAs": [
        seoData.socialLinks.github,
        seoData.socialLinks.linkedin,
        seoData.socialLinks.twitter,
        seoData.socialLinks.facebook,
        seoData.socialLinks.instagram,
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chittagong",
        "addressRegion": "Patenga",
        "addressCountry": "Bangladesh"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Bepza Public School and College, CEPZ"
      },
      "knowsAbout": [
        "Frontend Development",
        "React.js",
        "Node.js",
        "MongoDB",
        "Web Design",
        "UI/UX Design",
        "JavaScript",
        "TypeScript"
      ]
    };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoData.url} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Arif Miah" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seoData.url} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-slate-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-indigo-600">Arif Miah</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
                <a href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
                <a href="#skills" className="text-gray-700 hover:text-indigo-600">Skills</a>
                <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50">About</a>
                <a href="#projects" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50">Projects</a>
                <a href="#skills" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50">Skills</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50">Contact</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center px-4 py-24">
            <div className='w-52 flex items-center justify-center border-4 border-white rounded-full'>
              <img src={img} className='w-48 rounded-full' alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">MERN Stack Developer</h1>
              <p className="text-xl md:text-2xl mb-8">Building robust web applications with modern technologies</p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/ArifMiah07">
                  <Github className="w-6 h-6 cursor-pointer hover:text-indigo-200" />
                </a>
                <a href="https://www.linkedin.com/in/arifmiah01/">
                  <Linkedin className="w-6 h-6 cursor-pointer hover:text-indigo-200" />
                </a>
                <a
                  href="#"
                  onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=arifmiah.me101@gmail.com")}
                >
                  <Mail className="w-6 h-6 cursor-pointer hover:text-indigo-200" />
                </a>
                <a href="https://x.com/ArifMiah01">
                  <Twitter className="w-6 h-6 cursor-pointer hover:text-indigo-200" />
                </a>
                <div className='w-8 h-8 cursor-pointer hover:text-indigo-200'>
                  <a href='../src/assets/CV-Arif-Miah.pdf' download="CV-Arif-Miah.pdf" target="_blank" rel="noopener noreferrer">
                    <TbFileCv className='w-6 h-6' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4 text-indigo-600">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Frontend Skills */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Code2 className="w-6 h-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-bold text-indigo-600">Frontend</h3>
                </div>
                <ul className="space-y-2">
                  {skills.frontend.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend Skills */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Server className="w-6 h-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-bold text-indigo-600">Backend</h3>
                </div>
                <ul className="space-y-2">
                  {skills.backend.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Database Skills */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-bold text-indigo-600">Database</h3>
                </div>
                <ul className="space-y-2">
                  {skills.database.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* DevOps Skills */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Cloud className="w-6 h-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-bold text-indigo-600">DevOps</h3>
                </div>
                <ul className="space-y-2">
                  {skills.devops.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact" className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" rows="4"></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
