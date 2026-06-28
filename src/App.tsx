import React, { useRef, useState } from 'react';
import './Body.css'
import './About.css'
import './Intro.css'
import './Main.css'
import './Projects.css'
import './Contact.css'
import logo from './assets/logo.png'
import face from './assets/face.png'
import facebook from './assets/facebook.svg'
import portfolio_website from './assets/portfolio_website.png'
import resume_generator from './assets/resume_generator.png'
import mini_website from './assets/mini_website.png'
import student_portal from './assets/student_portal.png'
import pis_system from './assets/pis_system.png'
import Spline from '@splinetool/react-spline';
import emailjs from '@emailjs/browser';

function App() {
  const form = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });
  
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: 'Sending message...'
    });
    
    emailjs.sendForm(
      'service_my3lf4m', // Service ID
      'template_nb836uy', // Template ID
      form.current,
      'T9sR2SDRA1g7J6zYn' // Public Key
    )
      .then((result: { text: string }) => {
        console.log(result.text);
        setFormStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Message sent successfully!'
        });
        form.current?.reset();
      }, (error: { text: string }) => {
        console.log(error.text);
        setFormStatus({
          submitting: false,
          success: false,
          error: true,
          message: 'Failed to send message. Please try again.'
        });
      });
  };
  
  return (
    <>
      <div className = "navbar">
        <div className = "logo-container">
          <img src ={logo} className = "logo" alt = "my shayla clippy"></img>
        </div>
        <div className = "nav-links">
          <a href="#home" className="navitem">Home</a>
          <a href="#about" className="navitem">About</a>
          <a href="#projects" className="navitem">Projects</a>
          <a href="#contact" className="navitem">Contact</a>
        </div>
      </div>
        <div className="main-content">
          <section id="home" className="section">
            <div className="body-container">
              <div className="intro-text">
                <h1> Welcome to My Portfolio</h1>
                <p>This is a simple web application that is built around React's Framework: <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a></p>
                <div className="intro-buttons">
                  <a href="#projects">
                    <button className="intro-button primary-button">View Projects</button>
                  </a>
                  <a href="#contact">
                    <button className="intro-button secondary-button">Contact Me</button>
                  </a>
                </div>
              </div>
              <div className="spline-container">
                <Spline scene="https://prod.spline.design/nGimlUzws9ULuGHD/scene.splinecode"/>
              </div>
            </div>
          </section>
          
          <section id="about" className="section">
            <div className="container">
              <div className="about-image-container">
                <img src={face} alt="picture of me" className="about-image" />
              </div>
              <div className="about-content">
                <h1 className="section-title">About Me</h1>
                <p>Hi, I am<b> John Matthew</b>, a passionate fullstack developer that is willing to learn and adapt.</p>
                <p>I know my workarounds in modern web technologies and frameworks like React, Bootstrap, Next.js, and more.</p>
                
                <div className="skills-container">
                  <span className="skill-item">HTML</span>
                  <span className="skill-item">CSS</span>
                  <span className="skill-item">JavaScript</span>
                  <span className="skill-item">Java</span>
                  <span className="skill-item">Python</span>
                  <span className="skill-item">PHP</span>
                  <span className="skill-item">MySQL</span>
                  <span className="skill-item">NoSQL</span>
                  <span className="skill-item">React</span>
                  <span className="skill-item">Next.js</span>
                  <span className="skill-item">TypeScript</span>
                </div>
              </div>
            </div>
          </section>
          
          <section id="projects" className="section">
            <div className="container">
              <div className="projects-content">
                <h1 className="section-title">My Projects</h1>
                <p>Here are some of the projects I've worked on recently:</p>
                
                <div className="projects-grid">
                  <div className="project-card">
                    <img src= {portfolio_website} alt="Project 1" className="project-image" />
                    <div className="project-info">
                      <h3 className="project-title">Portfolio Website</h3>
                      <p className="project-description">A personal portfolio website built with React and Next.js.</p>
                      <div className="project-tags">
                        <span className="project-tag">React</span>
                        <span className="project-tag">Next.js</span>
                        <span className="project-tag">CSS</span>
                      </div>
                      <div className="project-links">
                        <a href="#" className="project-link">View Project</a>
                        <a href="#" className="project-link">Source Code</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-card">
                    <img src= {resume_generator} alt="Project 2" className="project-image" />
                    <div className="project-info">
                      <h3 className="project-title">Resume Generator</h3>
                      <p className="project-description">A front-end and back-end resume generator web application with easy fill-up forms.</p>
                      <div className="project-tags">
                        <span className="project-tag">React</span>
                        <span className="project-tag">Next.js</span>
                        <span className="project-tag">Typescript</span>
                      </div>
                      <div className="project-links">
                        <a href="https://resume-generator-next-app.vercel.app/" className="project-link">View Project</a>
                        <a href="https://github.com/insecurebandit/resume-generator-next-app" className="project-link">Source Code</a>
                      </div>
                    </div>
                  </div>

                  <div className="project-card">
                    <img src= {mini_website} alt="Project 3" className="project-image" />
                    <div className="project-info">
                      <h3 className="project-title">Mini Webpage</h3>
                      <p className="project-description">A mini website that tackles page navigation. </p>
                      <div className="project-tags">
                        <span className="project-tag">HTML</span>
                        <span className="project-tag">CSS</span>
                        <span className="project-tag">JavaScript</span>
                      </div>
                      <div className="project-links">
                        <a href="https://insecurebandit.github.io/Log-In/" className="project-link">View Project</a>
                        <a href="https://github.com/insecurebandit/Log-In" className="project-link">Source Code</a>
                      </div>
                    </div>
                  </div>

                  <div className="project-card">
                    <img src= {student_portal} alt="Project 4" className="project-image" />
                    <div className="project-info">
                      <h3 className="project-title">Student Tracker</h3>
                      <p className="project-description">A personalized student tracker that can be used to view your subjects and interact with your instructors or professors. </p>
                      <div className="project-tags">
                        <span className="project-tag">HTML</span>
                        <span className="project-tag">CSS</span>
                        <span className="project-tag">JavaScript</span>
                        <span className="project-tag">PHP</span>
                        <span className="project-tag">MySQL</span>
                      </div>
                    </div>
                  </div>

                  <div className="project-card">
                    <img src= {pis_system} alt="Project 5" className="project-image" />
                    <div className="project-info">
                      <h3 className="project-title">Property Inventory System</h3>
                      <p className="project-description">A digitilized logbook for your items and belongings. </p>
                      <div className="project-tags">
                        <span className="project-tag">HTML</span>
                        <span className="project-tag">CSS</span>
                        <span className="project-tag">JavaScript</span>
                        <span className="project-tag">PHP</span>
                        <span className="project-tag">MySQL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section id="contact" className="section">
            <div className="container">
              <div className="contact-content">
                <h1 className="section-title">Contact Me</h1>
                <p>Feel free to reach out to me! I still am learning these frameworks and such.</p>
                
                <div className="contact-container">
                  <div className="contact-info">
                    <div className="contact-item">
                      <div className="contact-icon">📧</div>
                      <div className="contact-text">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Johnmatthewestrella@gmail.com">Johnmatthewestrella@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">📱</div>
                      <div className="contact-text">
                        <a href="#">09935913418</a>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">📍</div>
                      <div className="contact-text">
                        Imus Cavite, Philippines
                      </div>
                    </div>
                    
                    <div className="social-links">
                      <a href="https://github.com/johnmatthewcodes" className="social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                      <a href="https://www.facebook.com/mattiyooo/" className="social-link">
                        <img src = {facebook} alt="facebook logo" className="facebook-logo"/>
                      </a>
                      <a href="https://x.com/pondererachu" className="social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      </a>
                    </div>
                  </div>
                  
                  <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="from_name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        className="form-input"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="from_email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        className="form-input"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="submit-button"
                      disabled={formStatus.submitting}
                    >
                      {formStatus.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {formStatus.success && (
                      <div className="form-status success">
                        {formStatus.message}
                      </div>
                    )}
                    
                    {formStatus.error && (
                      <div className="form-status error">
                        {formStatus.message}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
    </>
  )
}

export default App
