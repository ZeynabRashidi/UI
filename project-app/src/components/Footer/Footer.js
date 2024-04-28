import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="footer-item"> عضویت</div>
        <div className="footer-item">تماس با اسنپ فود</div>
        <div className="footer-item">درباره اسنپ فود</div>
        <span class="material-symbols-outlined footer-item">
          emoji_food_beverage
        </span>
      </div>
    </footer>
  );
};

export default Footer;
