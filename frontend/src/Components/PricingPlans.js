import React from "react";
import "./PricingPlans.css";

const PricingPlans = () => {
  return (
    <div id="pricing" className="pricing-container">
      <h2 className="pricing-title">Choose Plan</h2>
      <h3 className="pricing-subtitle">That’s Right For You</h3>
      <p className="pricing-description">
        Simple and transparent pricing. Start for free, upgrade when you love it.
        <br />
        <span className="highlight">30 day free trial in a button</span>
      </p>

      <div className="toggle-container">
        <span className="toggle-label">Monthly</span>
        <label className="toggle-switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span className="toggle-label">Yearly</span>
        <span className="discount-badge">SAVE 25%</span>
      </div>

      <div className="plans-container">
        {/* Starter Plan */}
        <div className="plan-card">
          <h4 className="plan-title">STARTER</h4>
          <p className="plan-price">$17</p>
          <p className="plan-duration">/ month</p>
          <ul className="plan-features">
            <li>✅ Commercial License</li>
            <li>✅ 100+ HTML UI Elements</li>
            <li>✅ Unlimited Domain Support</li>
            <li className="unavailable">❌ 6 Month Premium Support</li>
            <li className="unavailable">❌ Life Time Updates</li>
          </ul>
          <button className="plan-button">Get Started</button>
          <p className="no-credit-card">No credit card required</p>
        </div>

        {/* Premium Plan */}
        <div className="plan-card">
          <h4 className="plan-title">PREMIUM</h4>
          <p className="plan-price">$88</p>
          <p className="plan-duration">/ month</p>
          <ul className="plan-features">
            <li>✅ Commercial License</li>
            <li>✅ 100+ HTML UI Elements</li>
            <li>✅ Unlimited Domain Support</li>
            <li>✅ 6 Month Premium Support</li>
            <li>✅ Life Time Updates</li>
          </ul>
          <button className="plan-button">Get Started</button>
          <p className="no-credit-card">No credit card required</p>
        </div>
      </div>

      <a href="#" className="explore-link">
        Explore In-Depth Differences
      </a>
    </div>
  );
};

export default PricingPlans;
