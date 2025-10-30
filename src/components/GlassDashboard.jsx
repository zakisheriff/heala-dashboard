import React, { useState, useEffect } from 'react';
// Lucide Icons Import
import { 
  Heart, Pill, FlaskConical, ClipboardCheck, FileText, Apple, Car, Video, 
  Bell, TrendingUp, Activity, ChevronRight, Settings, Calendar, DollarSign,
  Monitor, Info, Download
} from 'lucide-react';

// Import the external CSS file
import "./GlassDashboard.css"

// --- Reusable Feature Card Component ---
const FeatureCard = ({ title, subtitle, icon: Icon, description, className = '' }) => (
    <div 
      className={`heala-card ${className}`}
    >
      <div className="card-header">
        <div>
          <p className="card-subtitle">{title}</p>
          <h3 className="card-title-small">{subtitle}</h3>
        </div>
        <div className="card-icon">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      </div>
      <div className="card-body">
        <p className="card-description">{description}</p>
      </div>
    </div>
);

// --- Unified Patient Record Feature Card (Larger) ---
const UnifiedPatientRecordFeature = () => (
    <div 
      className="heala-card large-card flex flex-col justify-between"
    >
      <div className="card-header">
        <div>
          <p className="card-subtitle">Comprehensive Data</p>
          <h3 className="card-title-small">Unified Patient Record</h3>
        </div>
        <div className="card-icon static-icon"> 
          <FileText size={28} strokeWidth={1.5} />
        </div>
      </div>
      <div className="card-body">
        <p className="card-description-large">
          **All medical data in one secure timeline.** Aggregates history from all providers and connected devices.
        </p>
        <div className="record-grid">
          <div className="record-item">
            <div className="record-label">Secure Access</div>
            <div className="record-value">HIPAA Compliant</div>
          </div>
          <div className="record-item">
            <div className="record-label">Searchable History</div>
            <div className="record-value">Instantly Retrieve Data</div>
          </div>
        </div>
        <button className="view-timeline-btn">
          See Data Security Details
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
);

// --- Dashboard Grid Content (Features list) ---
const FeaturesOverview = ({ time }) => (
    <div className="main-content">
      <div className="content-header">
        <div className="header-text">
          <h2 className="welcome-title">Heala App Features</h2>
          <p className="welcome-subtitle">Discover the powerful tools for proactive health management.</p>
        </div>
        <div className="header-stats">
          <div className="stat-badge">
            <Activity size={16} />
            <span>Modern UI</span>
          </div>
          <div className="stat-badge">
            <TrendingUp size={16} />
            <span>High Fidelity</span>
          </div>
        </div>
      </div>

      <div className="heala-grid">
        
        {/* Unified Record is the central feature */}
        <UnifiedPatientRecordFeature />

        <FeatureCard 
            title="Immediate Action" 
            subtitle="Prescription Reminders" 
            icon={Pill}
            description="Never miss a dose. Get timely alerts for medication schedules and automatic refill requests."
        />

        <FeatureCard 
            title="Test Results" 
            subtitle="Lab Report Notifications" 
            icon={FlaskConical}
            description="Receive new lab results instantly with clear, easy-to-understand explanations and insights."
        />

        <FeatureCard 
            title="Goal Tracking" 
            subtitle="Daily Wellness Summary" 
            icon={ClipboardCheck}
            description="Track adherence to daily goals, including sleep, steps, and hydration, with a clear score."
        />

        <FeatureCard 
            title="Proactive Health" 
            subtitle="Nutrition & Calorie Log" 
            icon={Apple}
            description="Effortlessly log meals, track calories, and monitor macro-nutrients against personalized targets."
        />

        <FeatureCard 
            title="Consultation" 
            subtitle="Virtual Appointments" 
            icon={Video}
            description="Seamless integration for scheduling and attending virtual video visits with your healthcare providers."
        />
        
        <FeatureCard 
            title="Logistics" 
            subtitle="Medical Transport Booking" 
            icon={Car}
            description="Integrated ride-booking services to ensure reliable transport to and from scheduled appointments."
        />
      </div>
    </div>
);
  
// --- Top Navigation Bar ---
const TopNavigation = ({ time }) => {
    return (
      <header className="top-navigation">
        <a href="#">
            <div className="nav-brand">
                <h1>heala</h1>
            </div>
        </a>
        
        <div className="header-actions">
          <div className="time-display">{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div> 
          
          {/* Download Button: NOTE: APK file must be in the public folder */}
          <a 
            href="/" 
            className="download-btn"
            // Removing e.preventDefault() to allow the file download to happen
          >
            <Download size={20} />
            Download App
          </a>

          <button className="icon-btn">
            <Bell size={18} />
            <span className="notification-dot"></span>
          </button>
          <button className="icon-btn avatar">U</button>
        </div>
      </header>
    );
};
  
// --- Footer Component ---
const Footer = () => (
    <footer className="dashboard-footer">
      <div className="footer-content">
        <p>© 2025 Heala Health. Empowering your journey to wellness.</p>
        <div className="footer-links">
          <a href="#"><Monitor size={16} /> Terms of Service</a>
          <a href="#"><Info size={16} /> Privacy Policy</a>
        </div>
      </div>
    </footer>
);

// --- Main Dashboard Component ---
const GlassDashboard = () => {
  const [time, setTime] = useState(new Date()); 

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // --- Main Render ---
  return (
    <div className="dashboard-wrapper">
      <TopNavigation time={time} />
      <FeaturesOverview time={time} />
      <Footer />
    </div>
  );
};

export default GlassDashboard;