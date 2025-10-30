import React from 'react';
import './LiquidGlassDashboard.css';

// Handler for the Download button
const handleDownload = () => {
  alert('Download initiated! (In a real app, this would trigger a file download)');
};

// Component for a single glass card
const GlassCard = ({ title, value, children }) => (
  <div className="glass-card">
    <div className="card-content">
      <p className="card-title">{title}</p>
      <h2 className="card-value">{value}</h2>
      {children}
    </div>
  </div>
);

// Main Dashboard Component
const LiquidGlassDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Dynamic Background: The 'liquid' effect is created by the CSS animation */}
      <div className="liquid-background"></div>

      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Apple UI Dashboard</h1>
          <button className="download-button" onClick={handleDownload}>
            <i className="fas fa-download"></i> Download Report
          </button>
        </header>

        <section className="stats-grid">
          <GlassCard title="Total Users" value="12,540" />
          <GlassCard title="Revenue (MTD)" value="$8,901" />
          <GlassCard title="Engagement Rate" value="68.2%" />
          <GlassCard title="Active Projects" value="14">
            <p className="card-detail">Last update 5 mins ago</p>
          </GlassCard>
        </section>
        
        {/* Larger Card for a chart or main content */}
        <div className="glass-main-panel">
          <h3>Activity Overview</h3>
          <p>This is a larger, beautiful glass panel for charts or detailed information.</p>
          <div style={{ height: '150px', background: 'rgba(255, 255, 255, 0.1)' }}>
            {/* Placeholder for a chart component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidGlassDashboard;