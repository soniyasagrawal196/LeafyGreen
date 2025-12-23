import classes from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import FooterIcon from "./Logo.jpg";




function Footer() {
  return (
    <div className={classes.footerparentBox}>
      <div className={classes.BOX1}>
        <div className={classes.logoMaterial}>
        
          <img className={classes.mainLogo} src={FooterIcon} />

          

          <div className={classes.socialIcon}>
            <FaInstagramSquare className={classes.insta}/>
            <MdFacebook className={classes.fb}/>
            <RiWhatsappFill className={classes.wh}/>
          </div>
        </div>

        <div className={classes.email}>
          <div className={classes.emailLogo}>
            <MdEmail className={classes.emailIcon} />
          </div>
          <div className={classes.emailAddress}>basantgumasta@gmail.com</div>
        </div>

        <div className={classes.address}>
          <div className={classes.addressLogo}>
          <MdLocationPin className={classes.locationIcon} />
          </div>
          <div className={classes.detailsAddress}>
  A-22, Ocean View Apartments
  <br />
  Carter Road, Bandra West
  <br />
  Mumbai, Maharashtra – 400050
</div>

        </div>

        <div className={classes.phoneNumber}>
          <div className={classes.phoneLogo}>
            <MdCall className={classes.callIcon} />
          </div>
          <div className={classes.phone}>+91 987456664</div>
        </div>
      </div>

      <div className={classes.line}></div>

      {/* <div className={classes.BOX2}>
        <div className={classes.home}>Home</div>
        <div className={classes.home}>Products</div>
        <div className={classes.home}>Subscription</div>
        <div className={classes.home}>Contact Us</div>
        <div className={classes.home}>About</div>
      </div> */}

      <div className={classes.menuItems}>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#Subscriptions">Subscriptions</a>
                </li>
                <li>
                  <a href="#portfolio">Contact us</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
          

      <div className={classes.BOX3}>
        
        <div className={classes.copyRight}>
          Copyright © 2025 Leafy Green All rights reserved.
        </div>
      </div>

    </div>
  );
}

export default Footer;
