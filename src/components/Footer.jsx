import React from 'react';
import logoImg from "../assets/images/logo.svg";
const Footer = () => {
  return (
    <footer class="text-white py-5 px-5 container" style={{backgroundColor: "#06010d"}}>
<div class="container d-flex flex-column flex-md-row justify-content-between align-items-start  gap-4">
    
    <div>
      <div class="d-flex align-items-center mb-3">
        <img src={logoImg} alt="Logo" width="100" height="24" class="me-2"/>
        
      </div>
      <p class="text-secondary small">Use LLMs Faster, Scale Easier</p>
      <div class="d-flex gap-3 mt-2">
        <a href="#"><i class="bi bi-facebook fs-5 text-white hover-opacity"></i></a>
        <a href="#"><i class="bi bi-twitter fs-5 text-white hover-opacity"></i></a>
        <a href="#"><i class="bi bi-linkedin fs-5 text-white hover-opacity"></i></a>
      </div>
    </div>
    <div class="d-flex gap-5 small">
      <div>
        <h6 class="text-secondary mb-2">Product</h6>
        <ul class="list-unstyled">
          <li className='py-1'><a href="#" class="text-white text-decoration-none">Home</a></li>
          <li className='py-1'><a href="#" class="text-white text-decoration-none">AI gateway</a></li>
          <li className='py-1'><a href="#" class="text-white text-decoration-none">Plans</a></li>
          <li className='py-1'><a href="#" class="text-white text-decoration-none">Feature</a></li>
          <li className='py-1'><a href="#" class="text-white text-decoration-none">Download</a></li>
        </ul>
      </div>
      <div>
        <h6 class="text-secondary mb-2">Resource</h6>
        <ul class="list-unstyled">
          <li className='py-1'><a href="#" class="text-white text-decoration-none">Contact</a></li>
          <li className='py-1'><a href="#" class="text-white text-decoration-none">Blog</a></li>
        </ul>
      </div>
    </div>

  </div>
  
    </footer>

  );
};

export default Footer;
