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
      <div className="container footer-links text-white py-5">
        <div className="row">
          {/* Resources */}
          <div className="col-md-2">
            <div className='heading-div'>Resources</div>
            <div className="d-flex flex-column">
              <Link to="/blog">Blog</Link>
              <Link to="/community">Community</Link>
              <Link to="/help-center">Help Center</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/enterprise-plans">Enterprise Plans</Link>
              <Link to="/affiliate-program">Affiliate Program</Link>
              <Link to="/startup-program">Startup Program</Link>
              <Link to="/ai-ml-api-academy">AI/ML API Academy</Link>
              <Link to="/brand-guidelines">Brand Guidelines</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div >
              <div className='heading-div'>Developer</div>
              <div className="d-flex flex-column">
                <Link to="/signup">Sign Up</Link>
                <Link to="/playground">AI Playground</Link>
                <Link to="/billing">Billing</Link>
                <Link to="/key-management">Key Management</Link>
                <Link to="/docs">API Documentation</Link>
                <Link to="/github">GitHub</Link>
                <Link to="/changelog">Changelog</Link>
              </div>
            </div>
          </div>

          {/* Developer */}


          {/* Models */}
          <div className="col-md-2">
            <div className='heading-div'>Models</div>
            <div className="d-flex flex-column">
              <Link to="/models/mistral-7b">Mistral 7B Instruct</Link>
              <Link to="/models/stable-diffusion-3-5">Stable Diffusion 3.5</Link>
              <Link to="/models/llama-3-405b">LLaMA 3 405B</Link>
              <Link to="/models/chatgpt-4o">ChatGPT 4o</Link>
              <Link to="/models/chatgpt-4o-mini">ChatGPT 4o mini</Link>
              <Link to="/models/stable-diffusion-3">Stable Diffusion 3</Link>
              <Link to="/models/qwen-2">Qwen 2</Link>
              <Link to="/models/chatgpt-3-5">ChatGPT 3.5 turbo</Link>
              <Link to="/models/code-llama">Code Llama</Link>
              <Link to="/models/claude-3-5">Claude 3.5 Sonnet</Link>
              <Link to="/models/flux1-schnell">FLUX1 [schnell]</Link>
              <Link to="/models/flux11-pro">FLUX1.1 [pro]</Link>
              <Link to="/models/gemini-flash">Gemini 1.5 Flash</Link>
              <Link to="/models/qwen-2-57b">Qwen 2.5 7B Instruct</Link>
              <Link to="/models/llama-3-32b">LLaMA 3 32B Instruct</Link>
              <Link to="/models/qwen-2-728">Qwen 2.5 72B Instruct</Link>
              <Link to="/models/claude-3-5-new">Claude 3.5 Sonnet (New)</Link>
              <Link to="/models/grok-2-beta">Grok-2 Beta</Link>
              <Link to="/models">All Models</Link>
            </div>
          </div>

          {/* Product */}
          <div className="col-md-2">
            <div className='heading-div'>Product</div>
            <div className="d-flex flex-column">
              <Link to="/use-cases">Explore Use-Cases</Link>
              <Link to="/low-code-api">AI API for Low-Code</Link>
              <Link to="/chatgpt-5-api">ChatGPT-5 AI API</Link>
              <Link to="/openai-api-key">OpenAI API Key</Link>
              <Link to="/llama-3-api">Meta's LLaMA 3 API</Link>
              <Link to="/stable-diffusion-api">Stable Diffusion API</Link>
              <Link to="/crypto-ai">Get AI API with Crypto</Link>
              <Link to="/free-api">Best AI API for Free</Link>
              <Link to="/suno-api">Suno AI API</Link>
              <Link to="/openai-gpt-4o">OpenAI GPT 4-o</Link>
              <Link to="/claude-3-api">Get Claude 3 API</Link>
              <Link to="/ocr-api">OCR AI API</Link>
              <Link to="/luma-api">Luma AI API</Link>
              <Link to="/flux-api">FLUX1 API</Link>
              <Link to="/gemini-pro-api">Gemini 1.5 PRO API</Link>
              <Link to="/openai-o1">OpenAI o1 series API</Link>
              <Link to="/gcp">GPU Cloud Service</Link>
              <Link to="/recraft-v3-api">Recraft v3 API</Link>
              <Link to="/ai-healthcare">AI in Healthcare</Link>
              <Link to="/runway-api">Runway API</Link>
              <Link to="/grok-2-api">Grok-2 API</Link>
              <Link to="/kling-ai-api">Kling AI API</Link>
              <Link to="/llama-3">Create with LLaMA 3.3</Link>
              <Link to="/minimax-api">MiniMax Music API</Link>
              <Link to="/gemini-2-api">Gemini 2.0 API</Link>
              <Link to="/openai-o3-api">OpenAI o3 series API</Link>
              <Link to="/chatgpt-3-5-api">OpenAI GPT-3.5</Link>
              <Link to="/speech-to-text">Speech to Text API</Link>
              <Link to="/deepseek-v3">Deepseek v3 API</Link>
              <Link to="/qwen-api">Build with Qwen API</Link>
              <Link to="/api/codestral">Codestral API</Link><br />
              <Link to="/api/minimax-text-01">MiniMax-Text-01 API</Link><br />
              <Link to="/api/minimax-video-01">MiniMax-Video-01 API</Link><br />
              <Link to="/api/deepseek-r1">DeepSeek R1 API</Link><br />
              <Link to="/api/kling-ai-1-6">Kling AI 1.6 API</Link><br />
              <Link to="/api/ai-web-search">AI Web Search</Link><br />
              <Link to="/api/claude-3-7-sonnet">Claude 3.7 Sonnet API</Link><br />
              <Link to="/api/wan-2-1">Wan 2.1 API</Link><br />
              <Link to="/api/chatgpt-4-5">ChatGPT 4.5 API</Link><br />
              <Link to="/api/qwq-32b">QwQ-32B API</Link><br />
              <Link to="/api/openai-assistants">OpenAI Assistants API</Link><br />
              <Link to="/api/gemini-2-5-pro">Gemini 2.5 Pro API</Link><br />
              <Link to="/api/mistral-ocr">Mistral AI OCR API</Link><br />
              <Link to="/api/o1-pro">o1-pro API</Link><br />
              <Link to="/api/llama-4">Llama 4 API</Link><br />
              <Link to="/api/runway-gen-4">RunWay Gen-4 API</Link><br />
              <Link to="/api/grok-3">Grok 3 API</Link><br />
              <Link to="/api/gpt-4-1">GPT-4.1 API</Link><br />
              <Link to="/api/chatgpt-o4-mini">ChatGPT o4-mini API</Link><br />
              <Link to="/api/gemini-2-5-flash">Gemini 2.5 Flash API</Link><br />
              <Link to="/api/qwen-3">Qwen 3 API</Link><br />
              <Link to="/api/deepseek-prover-v2">DeepSeek Prover V2 API</Link><br />
              <Link to="/api/veo-3">Veo 3 API</Link><br />
              <Link to="/api/claude-4">Claude 4 API</Link><br />
              <Link to="/api/lyria-realtime">Lyria RealTime API</Link><br />
              <Link to="/api/imagen-4">Imagen 4 API</Link><br />
              <Link to="/api/gemma-3n">Gemma 3n API</Link><br />
              <Link to="/api/image-1">Image 1 API</Link><br />
              <Link to="/api/o3">o3 API</Link><br />
              <Link to="/api/minimax-m1">MiniMax M1</Link><br />
              <Link to="/api/seedance-1">Seedance 1.0</Link><br />
            </div>
          </div>
          {/* Product */}
          <div className="col-md-3">
            <div className='heading-div'>Comparisons</div>
            <div className="d-flex flex-column ">
              <Link to="/comparisons">All Comparisons</Link>
              <Link to="/comparisons/llama3-vs-chatgpt3-5">LlaMa 3 vs. ChatGPT 3.5</Link>
              <Link to="/comparisons/qwen2-vs-llama3">Qwen 2 vs. LlaMa 3</Link>
              <Link to="/comparisons/qwen2-vs-chatgpt4o">Qwen 2 vs. ChatGPT 4o</Link>
              <Link to="/comparisons/claude3-5-vs-chatgpt4o">Claude 3.5 vs. ChatGPT 4o</Link>
              <Link to="/comparisons/llama3-1-8b-vs-chatgpt4o-mini">Llama 3.1 8B vs. ChatGPT-4o mini</Link>
              <Link to="/comparisons/llama3-1-405b-vs-mixtral-8x22b">Llama 3.1 405B vs. Mixtral 8x22B</Link>
              <Link to="/comparisons/llama-405b-vs-chatgpt4o">Llama 405B vs. ChatGPT-4o</Link>
              <Link to="/comparisons/flux1-vs-stable-diffusion3">FLUX.1 vs. Stable Diffusion 3</Link>
              <Link to="/comparisons/flux1-vs-dalle3">FLUX.1 vs. DALL-E 3</Link>
              <Link to="/comparisons/chatgpt4o-vs-gemini15">ChatGPT 4o vs. Gemini 1.5</Link>
              <Link to="/comparisons/chatgpt4o-vs-o1-mini">ChatGPT 4o vs. o1-mini</Link>
              <Link to="/comparisons/o1-preview-vs-o1-mini">o1-preview vs. o1-mini</Link>
              <Link to="/comparisons/triposr-vs-meshy">TripoSR vs. Meshy</Link>
              <Link to="/comparisons/llama3-2-vs-gpt4o-vision">Llama 3.2 vs GPT-4o Vision</Link>
              <Link to="/comparisons/llama3-1-405b-vs-commandr-plus">Llama 3.1 405B vs Command R+</Link>
              <Link to="/comparisons/gpt-o1mini-vs-claude3-5">Coding GPT-o1 mini vs Claude 3.5</Link>
              <Link to="/comparisons/qwen2-5-vs-claude3-5">Coding Qwen 2.5 Vs Claude 3.5</Link>
              <Link to="/comparisons/copilot-vs-cursor">AI Assistants Copilot vs Cursor</Link>
              <Link to="/comparisons/runway-gen3-vs-kling-pro">Runway Gen3 Turbo vs. Kling Pro</Link>
              <Link to="/comparisons/gemini2-vs-gpt-o1-preview">Gemini 2 vs GPT o1-preview</Link>
              <Link to="/comparisons/suno-vs-minimax">Suno AI vs Minimax Music</Link>
              <Link to="/comparisons/deepseek-vs-gpt-o1-preview">Deepseek R1 vs GPT o1-preview</Link>
              <Link to="/comparisons/openai">OpenAI Comparison</Link>
              <Link to="/comparisons/gpt4-5-vs-gpt-o3-mini">GPT-4.5 preview vs GPT-o3 mini</Link>
            </div>

          </div>
          <div className="col-md-3">
            <div className='heading-div'>© Copyright AI/ML 2025</div>

            <div className="d-flex align-items-center gap-3">

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook text-white"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin text-white"></i>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-discord text-white"></i>
              </a>

            </div>
            <p href="mailto:help@aimlapi.com" className="text-decoration-none text-white">
              help@aimlapi.com
            </p>
          </div>

        </div>


      </div>
    </div>
  )
}

export default ConatactUs
