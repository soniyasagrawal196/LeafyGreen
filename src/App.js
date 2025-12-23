import logo from "./logo.svg";
import classes from "./App.module.css";

import CompanyDetails from "./Company/CompanyDetails";
import Contact from "./Contact/Contact";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Subscription from "./Subscription/Subscription";
import Product from "./Product/Product";
import Microgreen from "./Microgreen/Microgreen";
import headericon from "./headlogo.jpg";
import { useState } from "react";

function App() {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
   

    <div className={classes.mainBlock}>
      <div className={classes.subBlock}>
        

        <header className={classes.header}>
          <nav className={classes.navbar}>
 {/* Logo */}
            <div className={classes.logo}>
              <img src={headericon} alt="Logo" />
            </div>

            {/* Hamburger Icon */}
            <div
              className={classes.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Menu Items */}
            <div
              className={`${classes.menuItems} ${
                menuOpen ? classes.showMenu : ""
              }`}
            >
            {/* Left side menu items */}

              <ul>
                <li>
                  <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                </li>
                <li>
                  <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
                </li>
                <li>
                  <a href="#Subscriptions" onClick={() => setMenuOpen(false)}>Subscriptions</a>
                </li>
                <li>
                  <a href="#portfolio" onClick={() => setMenuOpen(false)}>Contact us</a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </li>
              </ul>
            </div>


          </nav>
        </header>

        <CompanyDetails /> 
          <Microgreen /> 

         <div id="products">
        <Product />
        </div>
        <div id="Subscriptions">
        <Subscription /> 
        </div>
        <div id="FAQ"></div>
        <Faq/>

      
        <div id="contact">
          <Contact />
        </div>  

       
      
      {/* <Product/> 

  <Subscription/>  */}
      {/* <Contact/> 
<Faq/>  */}

      </div>
     <Footer> 
        
         </Footer>  
    </div>
  );
}

export default App;