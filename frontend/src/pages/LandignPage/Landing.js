import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { 
  FaBook, FaHistory, FaUsers, FaBalanceScale, FaChartLine, 
  FaUniversity, FaArchive, FaMicroscope, FaCalendarAlt, 
  FaChevronDown, FaChevronRight, FaFacebook, FaTwitter, 
  FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, 
  FaEnvelope, FaGlobeAfrica, FaQuoteLeft, FaSearch 
} from "react-icons/fa";

// Updated research data for ORA
const researchThemes = [
  { 
    title: "Oromo Economic History", 
    description: "Investigating pre-colonial economic systems, trade networks, and the impact of external expansion on Oromo economic structures.",
    icon: <FaChartLine />,
    color: "#8B0000"
  },
  { 
    title: "Civil Service Research", 
    description: "Documenting traditional governance systems, administrative structures, and civil service evolution in Oromo society.",
    icon: <FaBalanceScale />,
    color: "#006400"
  },
  { 
    title: "Historical Narratives", 
    description: "Producing counter-hegemonic discourse against false narratives that deny or distort Oromo history and heritage.",
    icon: <FaBook />,
    color: "#4B0082"
  },
  {
    title: "Cultural Heritage Preservation",
    description: "Documenting and preserving Oromo cultural practices, languages, and traditional knowledge systems.",
    icon: <FaUniversity />,
    color: "#8B4513"
  }
];

const researchProjects = [
  { 
    title: "Oromo Economic Systems: Pre-1890 Analysis", 
    date: "2025-01-15",
    summary: "Comprehensive study of trade networks, resource management, and economic organization in pre-colonial Oromia.",
    status: "Ongoing",
    researchers: "Dr. Alemayehu, Prof. Kebede"
  },
  { 
    title: "Civil Service Under Imperial Rule", 
    date: "2024-11-20",
    summary: "Examination of administrative changes and continuity in Oromo regions following Abyssinian expansion.",
    status: "Completed",
    researchers: "Dr. Tsegaye, Dr. Bekele"
  },
  {
    title: "Oral History Collection Initiative",
    date: "2025-02-10",
    summary: "Systematic collection and documentation of oral histories from Oromo elders across different regions.",
    status: "Data Collection",
    researchers: "Research Team A"
  },
  {
    title: "Archival Analysis of Colonial Records",
    date: "2024-12-05",
    summary: "Critical examination of European and Ethiopian colonial archives related to Oromo history.",
    status: "Ongoing",
    researchers: "Dr. Mesfin, Dr. Abebe"
  }
];

const stats = [
  { value: "75+", label: "Historical Documents Analyzed" },
  { value: "40+", label: "Research Publications" },
  { value: "150+", label: "Oral Histories Recorded" },
  { value: "25+", label: "Academic Collaborations" }
];

const testimonials = [
  {
    text: "ORA's work in documenting our history is invaluable for preserving our heritage for future generations.",
    author: "Dr. Alemayehu B.",
    role: "Historical Researcher"
  },
  {
    text: "The evidence-based approach of ORA provides crucial counter-narratives to colonial historical accounts.",
    author: "Prof. Kebede T.",
    role: "University Professor"
  }
];

function Landing() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'research', 'projects', 'Login', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page full-width">

      {/* Navigation Bar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-brand">
            <span className="logo-text">ORA</span>
            <span className="logo-subtext">Oromoo Research Association</span>
          </div>
          <div className="nav-links">
            {['home', 'about', 'research', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <Link to="/auth/login" className="nav-link login-btn">
    Login
  </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay">
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Preserving <span className="highlight">Oromo History</span><br />
                Through <span className="highlight">Evidence-Based Research</span>
              </h1>
              <p className="hero-subtitle">
                The Oromoo Research Association (ORA) is dedicated to producing 
                counter-hegemonic discourse against false narratives, conducting 
                rigorous research into Oromo history, economy, and society before 
                and after the Abyssinian expansion into Oromia.
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => scrollToSection('research')}
                >
                  Explore Our Research <FaChevronRight />
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => scrollToSection('contact')}
                >
                  Join Our Mission
                </button>
              </div>
            </div>
            <div className="hero-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <button 
            className="scroll-indicator"
            onClick={() => scrollToSection('about')}
          >
            <FaChevronDown />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About ORA</h2>
            <p className="section-subtitle">
              Advancing scholarly research to document and preserve Oromo historical truth
            </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                The Oromoo Research Association (ORA) is an independent scholarly 
                organization committed to conducting rigorous, evidence-based 
                research on Oromo history, culture, economy, and social structures. 
                Our work focuses particularly on the periods before, during, and 
                after the Abyssinian expansion into Oromia.
              </p>
              <p>
                We engage in systematic investigation of historical records, 
                oral traditions, archival documents, and economic data to produce 
                authoritative scholarship that counters false narratives and 
                historical distortions about the Oromo people.
              </p>
              <div className="mission-vision">
                <div className="mission">
                  <h4>Our Mission</h4>
                  <p>
                    To conduct evidence-based historical research that produces 
                    counter-hegemonic discourse against false narratives attempting 
                    to deny or distort Oromo history, with particular focus on the 
                    economic, civil service, and social structures before and after 
                    Abyssinian expansion into Oromia.
                  </p>
                </div>
                <div className="vision">
                  <h4>Our Vision</h4>
                  <p>
                    A world where Oromo history is accurately documented, widely 
                    recognized, and properly integrated into global historical 
                    scholarship, ensuring future generations have access to their 
                    true historical heritage.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="image-overlay">
                  <h4>Since 1995</h4>
                  <p>30 Years of Historical Research Excellence</p>
                  <div className="testimonial">
                    <FaQuoteLeft style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                    <p>"Documenting truth, preserving heritage, empowering future generations."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Themes */}
      <section id="research" className="section research-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Research Focus Areas</h2>
            <p className="section-subtitle">
              Interdisciplinary approaches to understanding Oromo history and society
            </p>
          </div>
          <div className="research-grid">
            {researchThemes.map((theme, idx) => (
              <div 
                key={idx} 
                className="research-card"
                style={{ '--card-color': theme.color } }
              >
                <div className="research-icon" style={{ color: theme.color }}>
                  {theme.icon}
                </div>
                <h3 className="research-title">{theme.title}</h3>
                <p className="research-description">{theme.description}</p>
                <button className="research-link">
                  Explore Methodology <FaChevronRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section id="projects" className="section news-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Current Research Projects</h2>
            <p className="section-subtitle">
              Ongoing investigations into Oromo history and society
            </p>
          </div>
          <div className="news-grid">
            {researchProjects.map((project, idx) => (
              <div key={idx} className="news-card">
                <div className="news-date">
                  <FaCalendarAlt />
                  <span>{new Date(project.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="news-title">{project.title}</h3>
                <p className="news-summary">{project.summary}</p>
                <div className="project-researchers">
                  <FaUsers /> <span>{project.researchers}</span>
                </div>
                <button className="news-read-more">
                  View Research Details <FaChevronRight />
                </button>
              </div>
            ))}
          </div>
          <div className="news-cta">
            <button className="btn btn-primary">
              View All Publications
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Collaborate With Us</h2>
              <p className="contact-subtitle">
                Interested in research collaboration, accessing our archives, 
                or supporting our mission to document Oromo history?
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    <h4>Research Headquarters</h4>
                    <p>Oromoo Research Association<br />Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <div>
                    <h4>Research Inquiries</h4>
                    <p>+251 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <h4>Academic Correspondence</h4>
                    <p>research@oromoo-research.org</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link"><FaFacebook /></a>
                <a href="#" className="social-link"><FaTwitter /></a>
                <a href="#" className="social-link"><FaLinkedin /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
              </div>
            </div>

            <div className="contact-form">
              <h3>Research Inquiry Form</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name / Institution" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="form-group">
                  <select>
                    <option value="">Nature of Inquiry</option>
                    <option value="collaboration">Research Collaboration</option>
                    <option value="archive">Archive Access Request</option>
                    <option value="publication">Publication Inquiry</option>
                    <option value="membership">Membership Information</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Research Interest or Specific Inquiry" rows={4}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Research Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Oromoo Research Association</h3>
              <p>
                Dedicated to evidence-based historical research and the 
                production of counter-hegemonic discourse about Oromo history.
              </p>
              <div className="footer-mission">
                <p>
                  <strong>Mission:</strong> Producing rigorous scholarship that 
                  challenges false narratives and documents authentic Oromo history.
                </p>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Research Areas</h4>
                <a href="#">Economic History</a>
                <a href="#">Civil Service Studies</a>
                <a href="#">Historical Narratives</a>
                <a href="#">Cultural Heritage</a>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#">Research Publications</a>
                <a href="#">Historical Archives</a>
                <a href="#">Oral History Database</a>
                <a href="#">Research Methodology</a>
              </div>
              <div className="footer-column">
                <h4>Engage</h4>
                <a href="#">Become a Member</a>
                <a href="#">Research Fellowships</a>
                <a href="#">Academic Partnerships</a>
                <a href="#">Support Our Work</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Oromoo Research Association. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Research Ethics Policy</a>
              <a href="#">Publication Guidelines</a>
              <a href="#">Archive Access Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;