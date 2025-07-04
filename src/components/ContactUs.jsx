import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import 'bootstrap-icons/font/bootstrap-icons.css';

const ConatactUs = () => {
  return (
    <div>
      <Header />


      <div className="contact-page">
        <div className="container py-5">

          <div className="breadcrumb">
            <Link to="/" className=" text-decoration-none">Home</Link>
            <span className="mx-1">/</span>
            <Link to="/ContactUs" className=" text-decoration-none">Contact Us</Link>
          </div>

          <h1 className="display-4 fw-bold text-center mb-5">Get in Touch</h1>
          <div className="row g-4">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="card shadow-sm rounded-4 mb-4">
                <h5 className='m-0'>Contact Sales Team</h5>
                <p className='m-0'>
                  Have questions about pricing, enterprise plans, or which solution best fits your business needs?
                  Don't be shy, our team is ready to help you find the perfect fit for your organization.
                </p>
                <a href="#" className="text-decoration-none ">Book a Call →</a>
              </div>

              <div className="card shadow-sm rounded-4">
                <h5 className='m-0'>Get API Support</h5>
                <p className='m-0'>
                  Don't worry, our support team is here to assist with all your questions –
                  from setting up your API key and troubleshooting integration problems to optimizing your implementation.
                </p>
                <a href="#" className="text-decoration-none ">Contact Support →</a>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <div className="card shadow-sm rounded-4 form-card">
                <h5 className="text-center m-0">Don't Have Time to Talk?</h5>
                <p className="text-center">
                  Simply fill out our quick contact form below, and we'll get back to you with the answers you need.
                </p>
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Company Name" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col-md-6">
                      <select className="form-control">
                        <option>Subject type</option>
                        <option>Sales</option>
                        <option>Support</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Linkedin (optional)" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" placeholder="Message field" rows="2"></textarea>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-dark px-4 mt-3">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

       
   <div className="footer-links">
      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/help-center">Help Center</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/enterprise-plans">Enterprise Plans</Link></li>
          <li><Link to="/affiliate-program">Affiliate Program</Link></li>
          <li><Link to="/startup-program">Startup Program</Link></li>
          <li><Link to="/ai-ml-api-academy">AI/ML API Academy</Link></li>
          <li><Link to="/brand-guidelines">Brand Guidelines</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Developer</h4>
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/playground">AI Playground</Link></li>
          <li><Link to="/billing">Billing</Link></li>
          <li><Link to="/key-management">Key Management</Link></li>
          <li><Link to="/docs">API Documentation</Link></li>
          <li><Link to="/github">GitHub</Link></li>
          <li><Link to="/changelog">Changelog</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Models</h4>
        <ul>
          <li><Link to="/models/mistral-7b">Mistral 7B Instruct</Link></li>
          <li><Link to="/models/stable-diffusion-3-5">Stable Diffusion 3.5</Link></li>
          <li><Link to="/models/llama-3-405b">LLaMA 3 405B</Link></li>
          <li><Link to="/models/chatgpt-4o">ChatGPT 4o</Link></li>
          <li><Link to="/models/chatgpt-4o-mini">ChatGPT 4o mini</Link></li>
          <li><Link to="/models/stable-diffusion-3">Stable Diffusion 3</Link></li>
          <li><Link to="/models/qwen-2">Qwen 2</Link></li>
          <li><Link to="/models/chatgpt-3-5">ChatGPT 3.5 turbo</Link></li>
          <li><Link to="/models/code-llama">Code Llama</Link></li>
          <li><Link to="/models/claude-3-5">Claude 3.5 Sonnet</Link></li>
          <li><Link to="/models/flux1-schnell">FLUX1 [schnell]</Link></li>
          <li><Link to="/models/flux11-pro">FLUX1.1 [pro]</Link></li>
          <li><Link to="/models/gemini-flash">Gemini 1.5 Flash</Link></li>
          <li><Link to="/models/qwen-2-57b">Qwen 2.5 7B Instruct</Link></li>
          <li><Link to="/models/llama-3-32b">LLaMA 3 32B Instruct</Link></li>
          <li><Link to="/models/qwen-2-728">Qwen 2.5 72B Instruct</Link></li>
          <li><Link to="/models/claude-3-5-new">Claude 3.5 Sonnet (New)</Link></li>
          <li><Link to="/models/grok-2-beta">Grok-2 Beta</Link></li>
          <li><Link to="/models">All Models</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Product</h4>
        <ul>
          <li><Link to="/use-cases">Explore Use-Cases</Link></li>
          <li><Link to="/low-code-api">AI API for Low-Code</Link></li>
          <li><Link to="/chatgpt-5-api">ChatGPT-5 AI API</Link></li>
          <li><Link to="/openai-api-key">OpenAI API Key</Link></li>
          <li><Link to="/llama-3-api">Meta's LLaMA 3 API</Link></li>
          <li><Link to="/stable-diffusion-api">Stable Diffusion API</Link></li>
          <li><Link to="/crypto-ai">Get AI API with Crypto</Link></li>
          <li><Link to="/free-api">Best AI API for Free</Link></li>
          <li><Link to="/suno-api">Suno AI API</Link></li>
          <li><Link to="/openai-gpt-4o">OpenAI GPT 4-o</Link></li>
          <li><Link to="/claude-3-api">Get Claude 3 API</Link></li>
          <li><Link to="/ocr-api">OCR AI API</Link></li>
          <li><Link to="/luma-api">Luma AI API</Link></li>
          <li><Link to="/flux-api">FLUX1 API</Link></li>
          <li><Link to="/gemini-pro-api">Gemini 1.5 PRO API</Link></li>
          <li><Link to="/openai-o1">OpenAI o1 series API</Link></li>
          <li><Link to="/gcp">GPU Cloud Service</Link></li>
          <li><Link to="/recraft-v3-api">Recraft v3 API</Link></li>
          <li><Link to="/ai-healthcare">AI in Healthcare</Link></li>
          <li><Link to="/runway-api">Runway API</Link></li>
          <li><Link to="/grok-2-api">Grok-2 API</Link></li>
          <li><Link to="/kling-ai-api">Kling AI API</Link></li>
          <li><Link to="/llama-3">Create with LLaMA 3.3</Link></li>
          <li><Link to="/minimax-api">MiniMax Music API</Link></li>
          <li><Link to="/gemini-2-api">Gemini 2.0 API</Link></li>
          <li><Link to="/openai-o3-api">OpenAI o3 series API</Link></li>
          <li><Link to="/chatgpt-3-5-api">OpenAI GPT-3.5</Link></li>
          <li><Link to="/speech-to-text">Speech to Text API</Link></li>
          <li><Link to="/deepseek-v3">Deepseek v3 API</Link></li>
          <li><Link to="/qwen-api">Build with Qwen API</Link></li>
        </ul>
      </div>
    {/* <div className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top">
        <p className="mb-0">© Copyright AI/ML 2025</p>
        <div className="d-flex align-items-center gap-3">
          <a href="mailto:help@aimlapi.com" className="text-decoration-none">help@aimlapi.com</a>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
          <a href="#"><i className="bi bi-discord"></i></a>
        </div>
      </div> */}
      <div className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top">
      <p className="mb-0">© Copyright AI/ML 2025</p>

      <div className="d-flex align-items-center gap-3">
        {/* Email link */}
        <a href="mailto:help@aimlapi.com" className="text-decoration-none">
          help@aimlapi.com
        </a>

        {/* Social Icons */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-discord"></i>
        </a>
      </div>
    </div>
    </div>
    </div>
  )
}

export default ConatactUs
