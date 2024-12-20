import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faLaptopCode, faCalendar, faCalendarDays, faStar, faMagic } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
import './midSection.css';

const midSection = () => {
  return (
    <div className="container">
      {/* Onboarding Steps Section */}
      <section className="onboarding-steps">
        <div className="onboarding-content">
          <h1>Onboard business in 3 simple steps</h1>
          <p>Quick assisted onboarding with 30-day free trial. No credit card needed.</p>
          <div className="steps">
            <div className="step">
              <div className="icon">
                <FontAwesomeIcon icon={faUser} size="2x" /> {/* Profile Icon */}
              </div>
              <h3>Claim your preset profile</h3>
              <p>
                Unlock tailored service and seamlessly elevate your experience by
                claiming your preset profile today.
              </p>
            </div>
            <div className="step">
              <div className="icon">
                <FontAwesomeIcon icon={faClipboardList} size="2x" /> {/* Add Services Icon */}
              </div>
              <h3>Add services</h3>
              <p>
                Make use of multiple scheduling, pricing options to add services.
                Choose from pre-created scheduling templates.
              </p>
            </div>
            <div className="step">
              <div className="icon">
                <FontAwesomeIcon icon={faLaptopCode} size="2x" /> {/* Website Icon */}
              </div>
              <h3>Build Website</h3>
              <p>
                Build your online storefront your way, seamlessly integrating all
                services for a cohesive and efficient client experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rmax Section */}
      <section id='solutions' className="why-rmax">
        <div className="why-rmax-content">
          <h2>Why Rmax?</h2>
          <p className='why-rmax-p'>
            Rmax is designed to simplify and transform the way service businesses
            operate. From onboarding, scheduling and billing to client management,
            payments and growth, Rmax integrates everything in one easy-to-use
            platform connecting all the stakeholders.
          </p>
          <div className="midfeatures">
            <div className="midFeature">
              <h3>Scheduling</h3>
              <div className="icon">
                <FontAwesomeIcon icon={faCalendarDays} size="1x" /> {/* Website Icon */}
              </div>
              <p>Manage appointments, classes, and events workshops with...</p>
              <a href="#">View details &gt;</a>
            </div>
            <div className="midFeature">
              <h3>Client Management & CRM</h3>
              <p>
                Keep track of customer data, preferences, and interactions to...
              </p>
              <a href="#">View details &gt;</a>
            </div>
            <div className="midFeature">
              <h3>AI Powered Insights</h3>
              <div className="icon">
                <FontAwesomeIcon icon={faStar} size="1x" /> {/* Website Icon */}
              </div>
              <p>
                Know exactly what is happening in business and get actionable...
              </p>
              <a href="#">View details &gt;</a>
            </div>
            <div className="midFeature">
              <h3>Billing & Payments</h3>
              <p>
                Streamline invoicing and payments with automated workflows,
                reducing...
              </p>
              <a href="#">View details &gt;</a>
            </div>
            <div className="midFeature">
              <h3>Marketing & Engagement Tools</h3>
              <div className="icon">
                <FontAwesomeIcon icon={faMagic} size="1x" /> {/* Website Icon */}
              </div>
              <p>
                Boost client retention and grow your business with integrated...
              </p>
              <a href="#">View details &gt;</a>
            </div>
            <div className="midFeature">
              <h3>Multi-Location Management</h3>
              <p>
                Manage multiple locations with ease, assigning roles and
                permissions...
              </p>
              <a href="#">View details &gt;</a>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default midSection;
