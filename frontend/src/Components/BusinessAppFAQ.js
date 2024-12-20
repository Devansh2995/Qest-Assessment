// import React from "react";
// import "./BusinessAppFAQ.css"; // Assuming the CSS is in BusinessAppFAQ.css
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const BusinessAppFAQ = () => {
//   return (
//     <div className="faq-container">
//       {/* Manage Your Business Section */}
//       <div className="manage-business">
//         <h2>
//           <em>Manage Your Business </em>On the Go
//         </h2>
//         <p>
//           With the free Business Mobile App, you can manage your entire service
//           business from anywhere. Stay connected and stay in control, no matter
//           where your day takes you.
//         </p>
//         <div className="buttons">
//           <button className="app-store-button">
//             <span className="icon"></span>
//             <span>App Store</span>
//           </button>
//           <button className="google-play-button">
//             <span className="icon">▶️</span>
//             <span>Google Play</span>
//           </button>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="faq-section">
//         <h2>Frequently Asked Questions</h2>
//         <p>
//           Find answers to common questions about our services and features. For
//           more details, contact our support team.
//         </p>

//         {/* Search Bar */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Ask Q! e.g Tell me about key Features."
//           />
//           <button className="search-button"></button>
//         </div>

//         {/* FAQ Items */}
//         <div className="faq-items">
//           <details>
//             <summary>What is RMax?</summary>
//             <p>
//               Qest, is a SaaS platform/ecosystem that lets any small to medium
//               service business set up & manage their business quickly & easily.
//             </p>
//           </details>

//           <details>
//             <summary>How does it work?</summary>
//           </details>

//           <details>
//             <summary>How much does it cost?</summary>
//           </details>
//         </div>

//         <p className="contact-support">
//           Haven't got your answer?{' '}
//           <a href="#">Contact our support now</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BusinessAppFAQ;

import React from "react";
import "./BusinessAppFAQ.css"; // Assuming the CSS is in BusinessAppFAQ.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Import the search icon

const BusinessAppFAQ = () => {
  return (
    <div className="faq-container">
      {/* Manage Your Business Section */}
      <div className="manage-business">
        <h2>
          <em>Manage Your Business </em>On the Go
        </h2>
        <p>
          With the free Business Mobile App, you can manage your entire service
          business from anywhere. Stay connected and stay in control, no matter
          where your day takes you.
        </p>
        <div className="buttons">
          <img src="/App_store.png" alt="" />
          <img src="/Play_store.png" alt="" />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to common questions about our services and features. For
          more details, contact our support team.
        </p>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Ask Q! e.g Tell me about key Features."
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* FAQ Items */}
        <div className="faq-items">
          <details>
            <summary>What is RMax?</summary>
            <p>
              Qest, is a SaaS platform/ecosystem that lets any small to medium
              service business set up & manage their business quickly & easily.
            </p>
          </details>

          <details>
            <summary>How does it work?</summary>
          </details>

          <details>
            <summary>How much does it cost?</summary>
          </details>
        </div>

        <p className="contact-support">
          Haven't got your answer? <a href="#">Contact our support now</a>
        </p>
      </div>
    </div>
  );
};

export default BusinessAppFAQ;
