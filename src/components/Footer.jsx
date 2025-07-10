import React from 'react';
import logoImg from "../assets/images/logo1.svg";
const Footer = () => {
  return (
    <footer class="text-white py-5 px-5 container" style={{ backgroundColor: "#05010d", borderTop: '1px solid rgb(255, 255, 255, 0.1)' }}>
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-start  gap-5 gap-md-4">

        <div>
          <div className="img-wrapper d-flex gap-1 gap-md-2 my-2 align-items-center">
              <img src={logoImg} alt="Logo" width={25} height={25}/>
              <span className='logo-title'>Taam AI</span>
            </div>
          <p class="text-secondary small mb-1 mb-md-auto">Use LLMs Faster, Scale Easier</p>
          <div class="d-flex gap-3 mt-1 mt-md-2">
            <a href="#"><i class="bi bi-facebook fs-5 text-white hover-opacity"></i></a>
            <a href="#"><i class="bi bi-twitter fs-5 text-white hover-opacity"></i></a>
            <a href="#"><i class="bi bi-linkedin fs-5 text-white hover-opacity"></i></a>
          </div>
        </div>
        <div class="d-flex custom-gap small col-12 col-md-auto">
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
