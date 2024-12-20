// import "./App.css";
// import MidSection from "./Components/MidSection";
// import Navbar from "./Components/Navbar";
// import Empowering from "./Components/Empowering";
// import PricingPlans from "./Components/PricingPlans";
// import BusinessAppFAQ from "./Components/BusinessAppFAQ";
// const App = () => 
// {
//   return (
//     <div className="app">
//        <Navbar id="home"/>
//       <main className="hero-section">
//         <div className="ai-input-container">
//           <div className="ai-tag">
//             AI
//             <span>R
//             <span className="rmax">Max</span>
//             </span>
//           </div>
//           <div className="ai-placeholder">Curious? Let AI Uncover the Answers!</div>
//         </div>
//         <h1>
//           Maximize Your Impact <br />
//           <span className="highlight">Business with <span style={{color:"Black"}}>R<span className="rmax">Max</span></span></span>
//         </h1>
//         <p className="description">
//           Enhance your business with RMax's all-in-one platform—streamlining
//           client engagement, automating workflows, and fueling growth.
//         </p>
//         <div className="cta-buttons">
//           <button className="get-started">
//             Get Started <i className="fas fa-arrow-right"></i>
//           </button>
//           <button className="book-demo">Book A Demo</button>
//         </div>
//         <div className="features">
//           <div>Seamless Onboarding</div>
//           <div>Client Engagement</div>
//           <div>Generate Report</div>
//           <div>Revenue Growth</div>
//         </div>
//       </main>

//       <MidSection/>
//       <Empowering/>
//       <PricingPlans id="pricing"/>
//       <BusinessAppFAQ/>

//       <footer class="footer">
//         <div className="columns">
//         <div class="footer-column">
//             <h4>Company</h4>
//             <ul>
//                 <li><a href="#">About us</a></li>
//                 <li><a href="#">Contact us</a></li>
//                 <li><a href="#">Careers</a></li>
//             </ul>
//         </div>
//         <div class="footer-column">
//             <h4>Business Size</h4>
//             <ul>
//                 <li><a href="#">Entrepreneurs</a></li>
//                 <li><a href="#">SMBs</a></li>
//                 <li><a href="#">Growth Business</a></li>
//                 <li><a href="#">Household Services</a></li>
//                 <li><a href="#">Enterprise</a></li>
//             </ul>
//         </div>
//         <div class="footer-column">
//             <h4>Business Type</h4>
//             <ul>
//                 <li><a href="#">Health & Wellness</a></li>
//                 <li><a href="#">Sports</a></li>
//                 <li><a href="#">Learning Activities</a></li>
//                 <li><a href="#">Household Services</a></li>
//                 <li><a href="#">Miscellaneous</a></li>
//             </ul>
//         </div>
//         <div class="footer-column">
//             <h4>Download</h4>
//             <ul>
//                 <li><a href="#"><i class="fa-brands fa-apple"></i> Business App</a></li>
//                 <li><a href="#"><i class="fa-brands fa-google-play"></i> Business App</a></li>
//                 <br />
//                 <li><a href="#"><i class="fa-brands fa-apple"></i> User App</a></li>
//                 <li><a href="#"><i class="fa-brands fa-google-play"></i> User App</a></li>
//             </ul>
//         </div>
//         <div class="footer-column">
//             <h4>Legal</h4>
//             <ul>
//                 <li><a href="#">Privacy Policy</a></li>
//                 <li><a href="#">Terms & Conditions</a></li>
//                 <li><a href="#">Return Policy</a></li>
//             </ul>
//         </div>
//         <div class="footer-column">
//             <h4>Contact us</h4>
//             <ul>
//                 <li><a href="mailto:support@rmax.com">support@rmax.com</a></li>
//                 <li><a href="tel:+918459671235">+91-8459671235</a></li>
//             </ul>
//         </div>
//         </div>
       
//         <span className="line"></span>
//         <div class="footer-bottom">
//           <div className="copyright">
//           &copy; 2024 Copyright, All Rights Reserved @RMax
//           </div>
           
//             <div class="social-icons">
//                 <a href="#"><i class="fab fa-twitter"></i></a>
//                 <a href="#"><i class="fa-brands fa-instagram"></i></a>
//                 <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
//                 <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
//             </div>
//         </div>
//       </footer>
//     </div>
  
//   );
// };

// export default App;













import "./App.css";
import MidSection from "./Components/MidSection";
import Navbar from "./Components/Navbar";
import Empowering from "./Components/Empowering";
import PricingPlans from "./Components/PricingPlans";
import BusinessAppFAQ from "./Components/BusinessAppFAQ";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      
      <main className="hero-section" id="home">
        <div className="ai-input-container">
          <div className="ai-tag">
            AI
            <span>R
              <span className="rmax">Max</span>
            </span>
          </div>
          <div className="ai-placeholder">Curious? Let AI Uncover the Answers!</div>
        </div>
        <h1>
          Maximize Your Impact <br />
          <span className="highlight">Business with <span style={{ color: "Black" }}>R<span className="rmax">Max</span></span></span>
        </h1>
        <p className="description">
          Enhance your business with RMax's all-in-one platform—streamlining
          client engagement, automating workflows, and fueling growth.
        </p>
        <div className="cta-buttons">
          <button className="get-started">
            Get Started <i className="fas fa-arrow-right"></i>
          </button>
          <button className="book-demo">Book A Demo</button>
        </div>
        <div className="features">
          <div>Seamless Onboarding</div>
          <div>Client Engagement</div>
          <div>Generate Report</div>
          <div>Revenue Growth</div>
        </div>
      </main>

      <MidSection />
      <Empowering />
      <PricingPlans />
      <BusinessAppFAQ />

      <footer className="footer">
        <div className="columns">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Business Size</h4>
            <ul>
              <li><a href="#">Entrepreneurs</a></li>
              <li><a href="#">SMBs</a></li>
              <li><a href="#">Growth Business</a></li>
              <li><a href="#">Household Services</a></li>
              <li><a href="#">Enterprise</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Business Type</h4>
            <ul>
              <li><a href="#">Health & Wellness</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Learning Activities</a></li>
              <li><a href="#">Household Services</a></li>
              <li><a href="#">Miscellaneous</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Download</h4>
            <ul>
              <li><a href="#"><i className="fa-brands fa-apple"></i> Business App</a></li>
              <li><a href="#"><i className="fa-brands fa-google-play"></i> Business App</a></li>
              <br />
              <li><a href="#"><i className="fa-brands fa-apple"></i> User App</a></li>
              <li><a href="#"><i className="fa-brands fa-google-play"></i> User App</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Return Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact us</h4>
            <ul>
              <li><a href="mailto:devansh@gmail.com">devansh@gmail.com</a></li>
              <li><a href="tel:+9219717803">+91-9219717803</a></li>
            </ul>
          </div>
        </div>
        <span className="line"></span>
        <div className="footer-bottom">
          <div className="copyright">
            &copy; 2024 Copyright, All Rights Reserved @RMax
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
