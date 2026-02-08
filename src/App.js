import React, { useState, useEffect } from 'react';
import './App.css';
import taxarowLogo from './assets/images/taxarowLogo.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <img src={taxarowLogo} alt="Taxarow Logo" className="logo-image" />
          </div>
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav>
            <ul className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Professional Accounting & Tax Outsourcing Services Coming Soon</h1>
          <p className="hero-subtitle">
            Serving businesses across India, US, Australia & UK with accuracy, compliance, and trust.
          </p>
          <button className="cta-button">Launching Soon</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <h2 className="section-title">About Taxarow</h2>
        <div className="about-content">
          <p>
            <strong>Taxarow</strong> is a professional outsourcing firm providing end-to-end solutions in 
            <strong> bookkeeping, accounting, and taxation</strong> for businesses and professional firms 
            across India, the US, Australia, and the UK.
          </p>
          <p>
            We specialize in delivering <strong>accurate, timely, and technology-driven financial services</strong> that 
            help organizations maintain compliance, streamline operations, and make informed decisions.
          </p>
          <p>
            Our qualified team ensures that every client receives <strong>personalized attention, reliable support, 
            and measurable value</strong> — enabling them to focus on their core business while we handle the 
            financial precision behind the scenes.
          </p>
          <p>
            At Taxarow, we are committed to maintaining the highest standards of <strong>integrity, confidentiality, 
            and professionalism</strong> in every engagement.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <ServiceCard 
            icon="📊"
            title="Bookkeeping & Accounting"
            description="Comprehensive bookkeeping solutions for accurate financial records"
          />
          <ServiceCard 
            icon="💼"
            title="CPA Firms"
            description="Efficient Back-Office Solution"
          />
          <ServiceCard 
            icon="🌍"
            title="Offshore Accounting Support"
            description="Cost-effective offshore accounting services with global expertise"
          />
          <ServiceCard 
            icon="🇺🇸"
            title="US Taxation & Compliance"
            description="Specialized US tax preparation and compliance services"
          />
          <ServiceCard 
            icon="💰"
            title="Payroll Processing"
            description="Accurate and timely payroll management solutions"
          />
          <ServiceCard 
            icon="📈"
            title="Financial Reporting & Analysis"
            description="Detailed financial reports for informed business decisions"
          />
          <ServiceCard 
            icon="🌐"
            title="Virtual Accounting Support"
            description="Dedicated virtual accounting support for CA, CPA & ACCA firms"
          />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section why-choose">
        <h2 className="section-title">Why Choose Taxarow</h2>
        <div className="features-list">
          <FeatureItem 
            icon="✓"
            text="Experienced accounting professionals"
          />
          <FeatureItem 
            icon="✓"
            text="Confidential & secure processes"
          />
          <FeatureItem 
            icon="✓"
            text="Global compliance expertise"
          />
          <FeatureItem 
            icon="✓"
            text="Cost-effective outsourcing"
          />
          <FeatureItem 
            icon="✓"
            text="Technology-driven workflows"
          />
          <FeatureItem 
            icon="✓"
            text="Personalized client attention"
          />
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section id="contact" className="coming-soon-notice">
        <div className="notice-icon">🚧</div>
        <h2>We're Building Something Powerful</h2>
        <p>
          Our full website and service offerings will be live soon. 
          Stay tuned for comprehensive accounting and tax outsourcing solutions.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">Taxarow Global Business Solution Pvt. Ltd.</div>
          <div className="footer-tagline">Precision. Compliance. Confidence.</div>
          <div className="footer-keywords">
            Bookkeeping | Accounting | Offshore Accounting | Outsourcing | US Taxation | 
            Accounting Outsourcing | Virtual Accounting | Payroll Processing | 
            Financial Reporting | Tax Compliance
          </div>
          <div className="footer-countries">
            India | US | Australia | UK
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Taxarow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Service Card Component
function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon" role="img" aria-label={title}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Feature Item Component
function FeatureItem({ icon, text }) {
  return (
    <div className="feature-item">
      <div className="feature-icon" role="img" aria-label="checkmark">{icon}</div>
      <div className="feature-text">{text}</div>
    </div>
  );
}

export default App;
