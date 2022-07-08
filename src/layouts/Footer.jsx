import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <p>
        &copy;
        {new Date().getFullYear()}
        <span> Movie App | All Rights Reserved </span>
      </p>
    </footer>
  );
};

export default Footer;
