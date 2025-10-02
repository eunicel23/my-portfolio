import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Calendar, Award, Ship, Plane } from 'lucide-react';
import ImageCarousel from "./ImageCarousel";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "hi i'm eunice :)";

  const heroImages = [
    process.env.PUBLIC_URL + "/images/2025-09-30-18-39-31.jpg",
    process.env.PUBLIC_URL + "/images/2025-09-30-18-40-03.jpg",
    process.env.PUBLIC_URL + "/images/2025-09-30-18-40-06.jpg",
    process.env.PUBLIC_URL + "/images/2025-09-30-18-40-39.jpg",
    process.env.PUBLIC_URL + "/images/2025-09-30-18-40-45.jpg",
    process.env.PUBLIC_URL + "/images/2025-09-30-18-40-56.jpg",
    process.env.PUBLIC_URL + "/images/2025-09-30-18-41-01.jpg",
    process.env.PUBLIC_URL + "/images/2025-09-30-18-41-07.jpg",
    process.env.PUBLIC_URL + "/images/2025-09-30-18-42-42.jpg",
  ];


  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: 'Port Connect',
      description: 'Maritime operations management platform for both client and internal stakeholders',
      tags: ['React', 'Node.js', 'Firebase', 'AWS'],
      link: 'https://github.com/angyonghaseyo/pmis_external',
      poster: process.env.PUBLIC_URL + '/images/FSK8.gif',
      posterFull: process.env.PUBLIC_URL + '/images/Portconnect.jpg',
      icon: <Ship size={24} />
    },
    {
      title: 'Taiwan Planner',
      description: 'Taiwan trip planner passion project made during my exchange in Taiwan',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      link: '#',
      poster: process.env.PUBLIC_URL + '/images/beach-vacation.gif',
      posterFull: process.env.PUBLIC_URL + '/images/taiwan-planner.jpg',
      icon: <Plane size={24} />
    },
    {
      title: 'EventHub',
      description: 'Real-time event management website',
      tags: ['React', 'TypeScript', 'HTML', 'CSS'],
      link: '#',
      poster: process.env.PUBLIC_URL + '/images/event-venue.gif',
      posterFull: process.env.PUBLIC_URL + '/images/eventhub.jpg',
      icon: <Calendar size={24} />
    }
  ];


  const skills = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'Java', 'SQL', 'Git', 'AWS', 'UiPath', 'Power Automate'];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf8f5' }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'rgba(255, 252, 248, 0.95)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 2px 8px rgba(101, 67, 33, 0.08)',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(139, 92, 46, 0.15)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>

            {/* Desktop Menu */}
            <div style={{ display: 'none', gap: '40px' }} className="desktop-menu">
              <a href="#about" style={{
                color: '#654321',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                fontSize: '16px',
                position: 'relative',
                paddingBottom: '4px'
              }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#8b5a2b';
                  e.target.style.borderBottom = '2px solid #8b5a2b';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#654321';
                  e.target.style.borderBottom = 'none';
                }}>About</a>
              <a href="#projects" style={{
                color: '#654321',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                fontSize: '16px',
                position: 'relative',
                paddingBottom: '4px'
              }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#8b5a2b';
                  e.target.style.borderBottom = '2px solid #8b5a2b';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#654321';
                  e.target.style.borderBottom = 'none';
                }}>Projects</a>
              <a href="#skills" style={{
                color: '#654321',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                fontSize: '16px',
                position: 'relative',
                paddingBottom: '4px'
              }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#8b5a2b';
                  e.target.style.borderBottom = '2px solid #8b5a2b';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#654321';
                  e.target.style.borderBottom = 'none';
                }}>Skills</a>
              <a href="#contact" style={{
                color: '#654321',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                fontSize: '16px',
                position: 'relative',
                paddingBottom: '4px'
              }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#8b5a2b';
                  e.target.style.borderBottom = '2px solid #8b5a2b';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#654321';
                  e.target.style.borderBottom = 'none';
                }}>Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              style={{ display: 'block', border: 'none', background: 'none', cursor: 'pointer', color: '#654321' }}
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{ backgroundColor: 'rgba(250, 248, 245, 0.98)', borderTop: '1px solid rgba(139, 92, 46, 0.15)' }} className="mobile-menu">
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#about" style={{ color: '#654321', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>About</a>
              <a href="#projects" style={{ color: '#654321', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>Projects</a>
              <a href="#skills" style={{ color: '#654321', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>Skills</a>
              <a href="#contact" style={{ color: '#654321', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        position: "relative",
        height: "500px",
        width: "100%",
        marginTop: "72px",
        overflow: "hidden"
      }}>
        <ImageCarousel images={heroImages} />

        {/* Overlay (Text) */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))"
            // darker gradient overlay
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "900",
              color: "#ffffff", // pure white
              marginBottom: "20px",
              minHeight: "90px",
              textShadow: "2px 2px 6px rgba(0,0,0,0.8)", // stronger shadow
              letterSpacing: "-0.02em",
              fontFamily: "Georgia, serif"
            }}
          >
            {typedText}
            <span style={{
              opacity: typedText.length < fullText.length ? 1 : 0,
              animation: 'blink 1s infinite'
            }}>|</span>
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#f5f5f5", // light gray for contrast
              maxWidth: "700px",
              fontWeight: "500",
              letterSpacing: "0.01em",
              textShadow: "1px 1px 4px rgba(0,0,0,0.8)", // stronger shadow
              marginBottom: "32px"
            }}
          >
            Information Systems Undergraduate
          </p>

          <style>{`
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    `}</style>
        </div>
      </section>


      {/* About Section */}
      <section id="about" style={{
        padding: '120px 24px',
        background: 'linear-gradient(to bottom, #fff, #f5f1ed)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#8b5a2b',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            About Me
          </div>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#654321',
            marginBottom: '32px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.2'
          }}>
            Building Digital Solutions with Purpose
          </h2>
          <p style={{
            color: '#6b5544',
            fontSize: '20px',
            lineHeight: '1.8',
            maxWidth: '900px',
            marginBottom: '24px'
          }}>
            Hi, I'm Eunice, an Information Systems undergraduate passionate about <strong>automation</strong>, <strong>problem solving</strong>, and creating tech solutions that make a <strong>real impact</strong>.
          </p>
          <p style={{
            color: '#6b5544',
            fontSize: '20px',
            lineHeight: '1.8',
            maxWidth: '900px'
          }}>
            Outside of tech, I'm a live music enthusiast who loves going to <strong>local gigs </strong>🎸, and I find balance through <strong>running</strong> 🏃🏼‍♀️💨 to recharge and stay inspired.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '120px 24px',
        backgroundColor: '#faf8f5'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#654321',
              fontFamily: 'Georgia, serif'
            }}>
              Recent Projects
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px'
          }}>
            {projects.map((project, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(101, 67, 33, 0.08)',
                padding: '40px',
                border: '1px solid rgba(139, 92, 46, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(139, 92, 46, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(101, 67, 33, 0.08)';
                }}>

                {/* Poster Placeholder (always visible) */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#f5f1ed',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  {project.poster ? (
                    <img
                      src={project.poster}
                      alt={`${project.title} thumbnail`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <span style={{ color: '#8b5a2b', fontSize: '14px' }}>Poster Coming Soon</span>
                  )}
                </div>


                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#f5f1ed',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8b5a2b',
                  marginBottom: '24px'
                }}>
                  {project.icon}
                </div>

                <h3 style={{
                  fontSize: '26px',
                  fontWeight: '700',
                  color: '#654321',
                  marginBottom: '16px',
                  fontFamily: 'Georgia, serif'
                }}>
                  {project.title}
                </h3>

                <p style={{ color: '#6b5544', marginBottom: '24px', lineHeight: '1.7', fontSize: '16px' }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{
                      backgroundColor: '#f5f1ed',
                      color: '#8b5a2b',
                      fontSize: '14px',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontWeight: '500'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub + Poster Buttons */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {/* GitHub Button */}
                  {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                      backgroundColor: '#8b5a2b',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '15px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease'
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#654321'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8b5a2b'}
                    >
                      View on GitHub <ExternalLink size={16} />
                    </a>
                  )}

                  {/* Poster Button */}
                  {project.posterFull && (
                    <a href={project.posterFull} target="_blank" rel="noopener noreferrer" style={{
                      backgroundColor: 'white',
                      color: '#8b5a2b',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      border: '2px solid #8b5a2b',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '15px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease'
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f1ed'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                    >
                      View Poster
                    </a>
                  )}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '120px 24px',
        background: 'linear-gradient(to bottom, #f5f1ed, #fff)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#654321',
              fontFamily: 'Georgia, serif'
            }}>
              Skills & Technologies
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {skills.map((skill, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                color: '#654321',
                fontWeight: '600',
                fontSize: '16px',
                border: '2px solid #f5f1ed',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(101, 67, 33, 0.05)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#8b5a2b';
                  e.currentTarget.style.backgroundColor = '#f5f1ed';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 46, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#f5f1ed';
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(101, 67, 33, 0.05)';
                }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '120px 24px',
        background: 'linear-gradient(135deg, #f5f1ed 0%, #faf8f5 100%)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#654321',
            marginBottom: '24px',
            fontFamily: 'Georgia, serif'
          }}>
            Get In Touch
          </h2>
          <p style={{
            color: '#6b5544',
            marginBottom: '50px',
            fontSize: '20px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="mailto:eunicelimleyi@gmail.com" style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '16px',
              color: '#8b5a2b',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(101, 67, 33, 0.1)',
              border: '2px solid #f5f1ed',
              textDecoration: 'none'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.backgroundColor = '#f5f1ed';
                e.currentTarget.style.borderColor = '#8b5a2b';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 46, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#f5f1ed';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(101, 67, 33, 0.1)';
              }}>
              <Mail size={32} />
            </a>
            <a href="https://github.com/eunicel23" style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '16px',
              color: '#8b5a2b',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(101, 67, 33, 0.1)',
              border: '2px solid #f5f1ed',
              textDecoration: 'none'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.backgroundColor = '#f5f1ed';
                e.currentTarget.style.borderColor = '#8b5a2b';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 46, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#f5f1ed';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(101, 67, 33, 0.1)';
              }}>
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/eunice-lim-6835b7245/" style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '16px',
              color: '#8b5a2b',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(101, 67, 33, 0.1)',
              border: '2px solid #f5f1ed',
              textDecoration: 'none'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.backgroundColor = '#f5f1ed';
                e.currentTarget.style.borderColor = '#8b5a2b';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 46, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#f5f1ed';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(101, 67, 33, 0.1)';
              }}>
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#654321',
        color: '#e8dfd6',
        padding: '50px 24px',
        borderTop: '1px solid rgba(139, 92, 46, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', fontWeight: '500' }}>&copy; 2025 Eunice Lim. Built with love :)</p>
        </div>
      </footer>
    </div>
  );
}