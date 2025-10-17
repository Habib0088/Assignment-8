import React from 'react';

const Footer = () => {
    return (
        <footer className=" grid grid-cols-1 md:grid-cols-3 bg-black text-white p-10 text-center md:text-start">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
  
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
   
  </nav>
</footer>
    );
};

export default Footer;