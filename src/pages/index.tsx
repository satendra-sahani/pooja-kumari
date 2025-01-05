'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGoogle, FaHtml5, FaUserCircle, FaMicrosoft, FaCloudDownloadAlt, FaUsers, FaLaptopCode, FaServer, FaShieldAlt, FaProjectDiagram } from 'react-icons/fa';
import { SiGoogledrive, SiGoogleanalytics } from 'react-icons/si';

const FloatingIcon = ({ Icon, delay, x, y }) => (
  <motion.div
    className="absolute text-yellow-500 opacity-20"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 0.2,
      scale: [1, 1.2, 1],
      x: [x, x + 10, x],
      y: [y, y - 10, y],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
    }}
  >
    <Icon size={30} />
  </motion.div>
);

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    className="bg-yellow-200 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full inline-flex items-center"
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(250, 204, 21, 0.4)" }}
  >
    {children}
  </motion.span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold mb-8 text-yellow-800 border-b-2 border-yellow-400 pb-2 inline-block">
    {children}
  </h2>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const controls = useAnimation();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Start animations
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    }));

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [controls]);

  const navItems = ['about', 'experience', 'education', 'skills', 'certifications', 'projects'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon Icon={FaGoogle} delay={0} x={50} y={100} />
        {/* <FloatingIcon Icon={SiMicrosoft365} delay={1} x={200} y={300} /> */}
        <FloatingIcon Icon={FaCloudDownloadAlt} delay={2} x={windowSize.width - 100} y={150} />
        <FloatingIcon Icon={FaUsers} delay={3} x={windowSize.width - 200} y={windowSize.height - 200} />
        <FloatingIcon Icon={SiGoogledrive} delay={4} x={100} y={windowSize.height - 100} />
      </div>

      <header className="bg-yellow-400 p-4 sticky top-0 z-50 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-90">
        <nav className="container mx-auto">
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setActiveSection(item);
                    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-lg font-medium capitalize ${
                    activeSection === item ? 'text-yellow-900 border-b-2 border-yellow-900' : 'text-yellow-800 hover:text-yellow-900'
                  } transition-colors`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <section id="about" className="mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQE4V8nvk4AitA/profile-displayphoto-shrink_400_400/B4EZONvbEKHAAg-/0/1733249840334?e=1741824000&v=beta&t=YrVdGmtkwih_U1_wfcHX5a1JxPMNiq8MP0jYHyHwV9w"
                alt="Pooja Kumari S"
                className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-yellow-400"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-2"
                whileHover={{ scale: 1.1 }}
              >
                <FaGoogle size={24} className="text-white" />
              </motion.div>
            </motion.div>
            <div>
              <motion.h1 
                className="text-5xl font-bold mb-4 text-yellow-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Pooja Kumari S
              </motion.h1>
              <motion.p 
                className="text-2xl text-yellow-700 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Google Workspace | Office 365 | Deployment Engineer
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a href="https://www.linkedin.com/in/pooja-kumari-s" target="_blank" rel="noopener noreferrer" className="text-yellow-800 hover:text-yellow-600 flex items-center">
                  <FaLinkedin size={24} className="mr-2" /> LinkedIn
                </a>
                <a href="mailto:pooja.kumari@example.com" className="text-yellow-800 hover:text-yellow-600 flex items-center">
                  <FaEnvelope size={24} className="mr-2" /> Email
                </a>
                <span className="flex items-center text-yellow-800">
                  <FaMapMarkerAlt size={24} className="mr-2" /> Bangalore, India
                </span>
              </motion.div>
              <motion.p 
                className="text-yellow-800 leading-relaxed bg-white bg-opacity-50 p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                🌟 Passionate Google Workspace & Office 365 Administrator with 2.7 years of experience in optimizing collaboration and ensuring seamless user experiences. Specialized in data migration, user training, and cloud deployment solutions. Committed to empowering organizations through effective implementation of cloud-based technologies. 🚀
              </motion.p>
              <motion.div
                className="mt-6 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-yellow-800 mb-2">Key Expertise</h3>
                  <ul className="list-disc list-inside text-yellow-700">
                    <li>Cloud Migration Strategies</li>
                    <li>User Training & Adoption</li>
                    <li>Security & Compliance</li>
                    <li>Process Automation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-yellow-800 mb-2">Industry Knowledge</h3>
                  <ul className="list-disc list-inside text-yellow-700">
                    <li>SaaS Platforms</li>
                    <li>Collaboration Tools</li>
                    <li>Data Analytics</li>
                    <li>IT Service Management</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <motion.section 
          id="experience"
          className="mb-20"
          initial="hidden"
          animate={controls}
          custom={1}
        >
          <SectionTitle>Professional Experience</SectionTitle>
          <div className="space-y-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold text-yellow-800 mb-2">Cloud Solution Engineer</h3>
              <p className="text-yellow-700 mb-2">Brio Technologies · Full-time</p>
              <p className="text-yellow-600 mb-4">Aug 2022 - Present · 2 yrs 6 mos</p>
              <p className="text-yellow-800 mb-4">Bengaluru, Karnataka, India · On-site</p>
              <ul className="list-disc list-inside text-yellow-800 space-y-2">
                <li>Led successful migrations of 50+ organizations to Google Workspace and Office 365, ensuring minimal downtime and data integrity.</li>
                <li>Developed and delivered comprehensive training programs for end-users and administrators, resulting in a 30% increase in productivity and user adoption rates.</li>
                <li>Implemented advanced security measures, including multi-factor authentication and data loss prevention policies, reducing security incidents by 40%.</li>
                <li>Optimized cloud infrastructure, resulting in 25% cost savings for clients through efficient resource allocation and license management.</li>
                <li>Designed and implemented custom workflows using Google Apps Script and Power Automate, automating repetitive tasks and saving 20+ hours per week for clients.</li>
                <li>Provided technical support and troubleshooting for complex issues, maintaining a 98% customer satisfaction rate.</li>
              </ul>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold text-yellow-800 mb-2">Full Stack Web Development Intern</h3>
              <p className="text-yellow-700 mb-2">AiROBOSOFT Products And Services · Internship</p>
              <p className="text-yellow-600 mb-4">Mar 2022 - Apr 2022 · 2 mos</p>
              <p className="text-yellow-800 mb-4">Bengaluru, Karnataka, India · On-site</p>
              <ul className="list-disc list-inside text-yellow-800 space-y-2">
                <li>Developed responsive web applications using modern JavaScript frameworks (React, Vue.js) and Node.js backend.</li>
                <li>Collaborated with senior developers to implement new features and fix bugs, contributing to a 15% improvement in application performance.</li>
                <li>Gained hands-on experience with both front-end and back-end technologies, including database management (MongoDB) and RESTful API design.</li>
                <li>Participated in daily stand-ups and code reviews, enhancing team communication and code quality.</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="education"
          className="mb-20"
          initial="hidden"
          animate={controls}
          custom={2}
        >
          <SectionTitle>Education</SectionTitle>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-800 mb-2">Visvesvaraya Technological University</h3>
            <p className="text-yellow-700 mb-2">Bachelor of Engineering - BE, Information Technology</p>
            <p className="text-yellow-600 mb-4">2018 - 2022</p>
            <ul className="list-disc list-inside text-yellow-800 space-y-2">
              <li>Graduated with distinction, maintaining a CGPA of 8.5/10</li>
              <li>Specialized in cloud computing, data structures, and web technologies</li>
              <li>Completed a capstone project on "Cloud-based Collaboration Tools for Remote Teams" using Google Workspace APIs</li>
              <li>Active member of the college's tech club, organizing workshops on cloud technologies and web development</li>
              <li>Participated in multiple hackathons, securing 2nd place in a state-level coding competition</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section 
          id="skills"
          className="mb-20"
          initial="hidden"
          animate={controls}
          custom={3}
        >
          <SectionTitle>Technical Skills</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <SkillBadge><FaGoogle className="mr-2" /> Google Workspace</SkillBadge>
            {/* <SkillBadge><SiMicrosoft365 className="mr-2" /> Office 365</SkillBadge> */}
            <SkillBadge><SiGoogledrive className="mr-2" /> Google Drive</SkillBadge>
            <SkillBadge><FaHtml5 className="mr-2" /> HTML5</SkillBadge>
            <SkillBadge><FaUserCircle className="mr-2" /> User Experience (UX)</SkillBadge>
            <SkillBadge><FaCloudDownloadAlt className="mr-2" /> Data Migration</SkillBadge>
            <SkillBadge><FaUsers className="mr-2" /> User Training</SkillBadge>
            <SkillBadge><FaLaptopCode className="mr-2" /> Cloud Solutions</SkillBadge>
            <SkillBadge><FaServer className="mr-2" /> Server Management</SkillBadge>
            <SkillBadge><FaShieldAlt className="mr-2" /> Security & Compliance</SkillBadge>
            <SkillBadge><SiGoogleanalytics className="mr-2" /> Data Analytics</SkillBadge>
            <SkillBadge><FaProjectDiagram className="mr-2" /> Process Automation</SkillBadge>
          </div>
        </motion.section>

        <motion.section 
          id="certifications"
          className="mb-20"
          initial="hidden"
          animate={controls}
          custom={4}
        >
          <SectionTitle>Certifications</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <FaGoogle className="text-yellow-600 mr-4" size={36} />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800">Associate Google Workspace Administrator</h3>
                  <p className="text-yellow-600">Issued Nov 2024 · Expires Nov 2027</p>
                </div>
              </div>
              <p className="text-yellow-700">Demonstrates proficiency in managing and configuring Google Workspace services for organizations, including user and domain management, security controls, and core services administration.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <FaGoogle className="text-yellow-600 mr-4" size={36} />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-800">Google Workspace Professional Administrator</h3>
                  <p className="text-yellow-600">Issued Jul 2023 · Expires Jul 2025</p>
                </div>
              </div>
              <p className="text-yellow-700">Advanced certification for professionals managing complex Google Workspace environments and implementing advanced solutions, including data migration, security best practices, and custom integrations.</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="projects"
          className="mb-20"
          initial="hidden"
          animate={controls}
          custom={5}
        >
          <SectionTitle>Key Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">Enterprise-wide Google Workspace Migration</h3>
              <p className="text-yellow-700 mb-4">Led the migration of a 5000+ employee organization from legacy systems to Google Workspace, ensuring minimal downtime and maximum data integrity.</p>
              <ul className="list-disc list-inside text-yellow-800">
                <li>Developed a phased migration strategy</li>
                <li>Conducted comprehensive user training</li>
                <li>Implemented advanced security measures</li>
                <li>Achieved 99.9% user adoption rate</li>
              </ul>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">Custom Workflow Automation</h3>
              <p className="text-yellow-700 mb-4">Designed and implemented a series of custom workflows using Google Apps Script and Power Automate for a mid-size marketing firm.</p>
              <ul className="list-disc list-inside text-yellow-800">
                <li>Automated report generation and distribution</li>
                <li>Created a custom CRM integration</li>
                <li>Implemented approval workflows</li>
                <li>Reduced manual tasks by 40%</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-yellow-400 text-yellow-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Pooja Kumari S</h2>
              <p>Google Workspace & Office 365 Administrator</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/pooja-kumari-s" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-700 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:pooja.kumari@example.com" className="hover:text-yellow-700 transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Pooja Kumari S. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

