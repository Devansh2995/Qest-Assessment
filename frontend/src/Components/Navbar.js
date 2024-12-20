
// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [featuresOpen, setFeaturesOpen] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="logo">
//         <span>
//           R<span className="rmax">Max</span>
//         </span>
//       </div>
//       <nav>
//         <ul>
//           <li><a href="#home"></a>Home</li>
//           <li
//             className="dropdown"
//             onMouseEnter={() => setFeaturesOpen(true)}
//             onMouseLeave={() => setFeaturesOpen(false)}
//           >
//             Features <i className="fas fa-chevron-down dropdown-icon"></i>
//             {featuresOpen && (
//               <div className="dropdown-menu features-menu">
//                 <div className="features-section">
//                   <h4>Discover</h4>
//                   <ul>
//                     <li>
//                       <i className="fas fa-laptop"></i> Custom Branded Website
//                     </li>
//                     <li>
//                       <i className="fas fa-mobile-alt"></i> User Mobile App
//                     </li>
//                     <li>
//                       <i className="fas fa-globe"></i> Business Webpage
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="features-section">
//                   <h4>Manage</h4>
//                   <ul>
//                     <li>
//                       <i className="fas fa-chalkboard-teacher"></i> Courses
//                     </li>
//                     <li>
//                       <i className="fas fa-calendar-alt"></i> Classes
//                     </li>
//                     <li>
//                       <i className="fas fa-file-invoice"></i> Appointments
//                     </li>
//                     <li>
//                       <i className="fas fa-users"></i> Staff Roles
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="features-section">
//                   <h4>Grow</h4>
//                   <ul>
//                     <li>
//                       <i className="fas fa-lightbulb"></i> AI Marketing Tools
//                     </li>
//                     <li>
//                       <i className="fas fa-chart-line"></i> Social Media
//                       Integration
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="features-footer">
//                   <button>See all features &gt;</button>
//                 </div>
//               </div>
//             )}
//           </li>
//           <li><a href="#pricing"></a> Pricing</li>
//           <li>Solutions</li>
//           <li>
//             <button className="login-btn">Login</button>
//           </li>
//           <li>
//             <button className="try-btn">Try For Free</button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;











import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="logo">
        <span>
          R<span className="rmax">Max</span>
        </span>
      </div>
      <nav>
        <ul>
          <li><a href="#home" onClick={() => handleScroll('home')}>Home</a></li>
          <li
            className="dropdown"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            Features <i className="fas fa-chevron-down dropdown-icon"></i>
            {featuresOpen && (
              <div className="dropdown-menu features-menu">
                <div className="features-section">
                  <h4>Discover</h4>
                  <ul>
                    <li>
                      <i className="fas fa-laptop"></i> Custom Branded Website
                    </li>
                    <li>
                      <i className="fas fa-mobile-alt"></i> User Mobile App
                    </li>
                    <li>
                      <i className="fas fa-globe"></i> Business Webpage
                    </li>
                  </ul>
                </div>
                <div className="features-section">
                  <h4>Manage</h4>
                  <ul>
                    <li>
                      <i className="fas fa-chalkboard-teacher"></i> Courses
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i> Classes
                    </li>
                    <li>
                      <i className="fas fa-file-invoice"></i> Appointments
                    </li>
                    <li>
                      <i className="fas fa-users"></i> Staff Roles
                    </li>
                  </ul>
                </div>
                <div className="features-section">
                  <h4>Grow</h4>
                  <ul>
                    <li>
                      <i className="fas fa-lightbulb"></i> AI Marketing Tools
                    </li>
                    <li>
                      <i className="fas fa-chart-line"></i> Social Media
                      Integration
                    </li>
                  </ul>
                </div>
                <div className="features-footer">
                  <button>See all features &gt;</button>
                </div>
              </div>
            )}
          </li>
          <li><a href="#pricing" onClick={() => handleScroll('pricing')}>Pricing</a></li>
          <li><a href="#solutions" onClick={() => handleScroll('solutions')}>Solutions</a></li>
          <li>
            <button className="login-btn">Login</button>
          </li>
          <li>
            <button className="try-btn">Try For Free</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
