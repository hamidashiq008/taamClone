import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTASection";
import ObsImg from "../assets/images/obsPageImg.png";
import gatewayImg1 from "../assets/images/gateway1.png";
import gatewayImg2 from "../assets/images/gateway2.png";
import gatewayImg3 from "../assets/images/gateway3.png";
import AiModals from "../components/AiModals";
import { SimpleButton, SimpleLink, GradientButton, GradientLink } from '../Partials/CustomButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  IconDatabase,
  IconCloudUpload,
  IconWaveSine,
  IconFileText,
  IconCode,
  IconChevronRight,
  IconLoader,
  IconCpu,
} from "@tabler/icons-react";
const Observability = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <div>
      <div>
        <Header />
        <div className="observability-page-wrapper">
          <section className="fullStack-observability">
            <div className="container">
              <h2 className="text-center hero-heading" data-aos="fade-up"
                data-aos-delay="100">
                Full-stack AI logs & Observability
              </h2>
              <p className="text-center hero-desc" data-aos="fade-up"
                data-aos-delay="100">
                Real-time visibility, actionable metrics, and built-in debugging
                for every LLM request Stay on top of performance, cost, and
                quality with tools designed to optimize AI workflows.
              </p>

              <div className="row custom-row g-4">
                <div className="col-lg-6">
                  <div className="card-1 h-100">
                    <div className="code-wrapper">
                      <div className=" code-parent" data-aos="fade-up"
                        data-aos-delay="100">
                        {/* <p>
                            <strong>User:</strong> What is artificial
                            intelligence?
                          </p>
                          <p className="mt-2">
                            <strong>Assistant:</strong> Artificial Intelligence
                            (AI) is the simulation of human intelligence
                            processes by machines, especially computer systems.
                            These processes include learning, reasoning, and
                            self-correction.
                          </p> */}
                        <pre className="m-0">
                          <code>
                            <span style={{ color: '#D73A49', fontWeight: 'bold' }}>import</span>
                            {` os \n`}

                            <span style={{ color: '#D73A49', fontWeight: 'bold' }}>from</span>
                            {` taam_cloud `}

                            <span style={{ color: '#D73A49', fontWeight: 'bold' }}>import</span>
                            {` TaamCloud\n\n`}


                            {`# Initialize the client\n`}
                            {`client = TaamCloud(api_key=`}
                            <span >os</span>
                            {`.environ.get("TAAM_API_KEY"))\n\n`}
                            {`# Chat completion\n`}
                            {`response = client.chat.create(\n`}
                            {`    model="gpt-4-turbo",\n`}
                            {`    messages=[\n`}
                            {`        {"role": "system", "content": "You are a helpful assistant."},\n`}
                            {`        {"role": "user", "content": "What is artificial intelligence?"}\n`}
                            {`    ]\n`}
                            {`)`}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <h4>Fast track development</h4>
                    <p>
                      Eliminate development friction, boilerplate code, and
                      avoidable errors in applications consuming LLM APIs
                    </p>
                    <div className="buttons-wrapper  gap-4   ">
                      {/* <button className="subscribe-btn">
                        Get Started <IconChevronRight size={"15px"} />
                      </button> */}
                      <SimpleButton text={'Get Started'} />

                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-2 h-100">
                    <div className="img-wrapper">
                      <img src={ObsImg} alt="" />
                    </div>
                    <h4>Model performance</h4>
                    <p>
                      Improve response quality with Retrieval-Augmented
                      Generation (RAG) support directly in the gateway
                    </p>
                    <div className="buttons-wrapper  gap-4   ">
                      <SimpleButton text={'Get Started'} />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="aiStack">
            <div className="container">
              <div className="top-heading-area">
                <h2>Unlock full transparency across your AI stack</h2>
                <p>
                  Track performance, cost, and accuracy for every LLM request in
                  one powerful observability dashboard.
                </p>
              </div>
              <div className="row aiStackRow">
                <div className="col-lg-6">
                  <div className="col-inner">
                    <h4>Full Visibility with Deep Logging</h4>
                    <p>
                      Gain complete transparency into every request and response
                      with over 40 data points, including performance, accuracy,
                      and cost metrics—empowering precise monitoring and
                      diagnostics.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="col-inner">
                    <h4>Simplified Tracing for Faster Debugging</h4>
                    <p>
                      Track the full lifecycle of LLM interactions in a unified
                      timeline. Instantly identify bottlenecks, improve response
                      quality, and debug complex workflows with ease.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="col-inner">
                    <h4>Optimize AI Costs with FinOps</h4>
                    <p>
                      Build a smart FinOps strategy with real-time visibility
                      into AI usage and spending. Detect inefficiencies, enforce
                      budget controls, and streamline operations for
                      cost-effective AI deployment..
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="col-inner">
                    <h4>Instant Observability Without Complexity</h4>
                    <p>
                      Monitor your entire AI stack—frameworks, prompts, tool
                      calls, and agents—in one place. Get the insights you need
                      to debug faster, without adding overhead.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="col-inner">
                    <h4>End-to-End Tracing for Every Request</h4>
                    <p>
                      Visualize the full journey of your LLM workflows. Trace
                      calls across prompts, chains, tools, and agents in
                      real-time to quickly identify root causes and performance
                      issues.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="col-inner">
                    <h4>Response Evaluation & Feedback Collection</h4>
                    <p>
                      Improve model quality with structured feedback at the
                      request or session level. Analyze hallucinations,
                      completion accuracy, and user input to continuously
                      optimize your outputs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="gate-way-section">
            <div className="backgroundGradient"></div>
            <div className="bg-black text-white ">
              <div className="  gate-way-container-observability">
                {/* Heading */}
                <p className="top-intro" data-aos="fade-up"
                  data-aos-delay="100">\\ AI API GATEWAY \\</p>
                <div className="text-center d-flex justify-content-between heading-para-wrapper flex-column flex-lg-row" data-aos="fade-up"
                  data-aos-delay="200">
                  <h1 className="top-heading m-0 ">
                    Enterprise-grade AI Gateway
                  </h1>
                  <p className="m-0 top-desc-intro">
                    Connect, Manage, And Secure AI Interactions Across 1k+ LLMs
                    — With Control, Monitoring
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="row g-4 mt-5 mb-3">
                  {/* Card 1 */}
                  <div className="col-md-4  mt-3">
                    <div className=" cards-main-wrapper h-100" data-aos="fade-up"
                      data-aos-delay="300">
                      <div className="img-wrapper">
                        <img
                          src={gatewayImg1}
                          alt="Integrate"
                          className="img-fluid rounded mb-3"
                        />
                      </div>
                      <p className="text-purple small fw-bold styled-text">
                        EASILY SETUP
                      </p>
                      <h5 className="heading-tile mb-2">
                        Integrate in a minute
                      </h5>
                      <p className="text-secondary small desc-text">
                        Integrate Taam AI In Just 3 Lines Of Code - No Changes
                        To Your Existing Stack.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="col-md-4 mt-3">
                    <div className="cards-main-wrapper  h-100" data-aos="fade-up"
                      data-aos-delay="400">
                      <div className="img-wrapper">
                        <img
                          src={gatewayImg2}
                          alt="Models Access"
                          className="img-fluid rounded mb-3"
                        />
                      </div>
                      <p className="text-purple small fw-bold styled-text">
                        AI MODELS
                      </p>
                      <h5 className="heading-tile mb-2">AI Models Access</h5>
                      <p className="text-secondary small desc-text">
                        Taam AI Lets You Access 1,600+ LLMs Via A Unified API,
                        So You Can Focus On Building, Not Managing.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="col-md-4 mt-3">
                    <div className="cards-main-wrapper h-100" data-aos="fade-up"
                      data-aos-delay="500">
                      <div className="img-wrapper">
                        <img
                          src={gatewayImg3}
                          alt="Build Agents"
                          className="img-fluid rounded mb-3"
                        />
                      </div>
                      <p className="text-purple small fw-bold styled-text">
                        AI AGENTS
                      </p>
                      <h5 className="heading-tile mb-2">Build AI Agents</h5>
                      <p className="text-secondary small desc-text">
                        Build AI Agents That Can Use 1000+ Tools With Taam's
                        Model Context Protocol Client.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="row text-center text-white mt-5 updates-section">
                  <div className="col-6 col-md-3" data-aos="fade-up"
                    data-aos-delay="600">
                    <div className="modal-updates">5M+</div>
                    <div className="text-secondary names mt-2">
                      Tokens Processed Daily
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-3" data-aos="fade-up"
                    data-aos-delay="700">
                    <div className="modal-updates">99%</div>
                    <div className="text-secondary names mt-2">Uptime</div>
                  </div>
                  <div className="col-6 col-md-3 mb-3" data-aos="fade-up"
                    data-aos-delay="800">
                    <div className="modal-updates">24/7</div>
                    <div className="text-secondary names mt-2">Support</div>
                  </div>
                  <div className="col-6 col-md-3 mb-3" data-aos="fade-up"
                    data-aos-delay="900">
                    <div className="modal-updates">1200+</div>
                    <div className="text-secondary names mt-2">AI Models</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="aiModalSection">
            <AiModals />
          </section>
        </div>
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Observability;
