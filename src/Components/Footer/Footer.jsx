import React from "react";
import "./footer.css";

class FooterCont extends React.Component {
  render() {
    return (
        <div className="footer-cont">
            <div className="info-footer">
            <div className="footer-about">
                <h2 className="about-footer">About</h2>
                <h3 className="txt-about-footer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui facere quidem laudantium! Expedita nemo qui, necessitatibus earum quibusdam veritatis? Atque nobis cumque nemo architecto similique omnis quaerat aliquid, quia nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui facere quidem laudantium! Expedita nemo qui, necessitatibus earum quibusdam veritatis? Atque nobis cumque nemo architecto similique omnis quaerat aliquid, quia nulla!</h3>
            </div>
            <div className="footer-links">
            <ul class="links-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
            </div>
            </div>
            <hr/>
            <div className="footer-end">
              <h1 class="copyright-text">Copyright &copy; 2020 All Rights Reserved by Me</h1>
              <div className="social-contain">
                <div class="social-icons">
                  <img src="https://image.flaticon.com/icons/svg/889/889102.svg"/>
                  <img src="https://image.flaticon.com/icons/svg/889/889147.svg"/>  
                  <img src="https://image.flaticon.com/icons/svg/889/889094.svg"/>  
                  <img src="https://image.flaticon.com/icons/svg/889/889122.svg"/>    
                </div>
              </div>
            </div>
        </div>
    );
  }
}
export default FooterCont;