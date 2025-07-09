import React from "react";
import AiAgentBoxSlider from "./AiAgentBoxSlider";
import Typewriter from 'typewriter-effect';



const AiAgentsSection = () => {
  return (
    <section className="ai-agents-section text-white">
      <div className="container text-center">
        <div className="badge-section mb-4">
          <span className="badge rounded-pill px-3 py-2">AI Agents</span>
        </div>

        <h2 className="section-title   mb-3">
          Autonomous AI Agents That Work <br />
          Together
        </h2>

        <p className="section-description lead mx-auto mb-5">
          Deploy and orchestrate intelligent agents that can think, decide, and
          collaborate across tasks. Whether it's running workflows, calling
          tools, or chaining decisions, our AI agents operate autonomously to
          get things done—faster and smarter.
        </p>

        <div className="row justify-content-center g-4">
          {/* Left Card */}
          <div className="col-md-6">
            <div className="custom-card h-100">
              <p className=" mb-2 heading-para">Ready Agentic AI Solutions</p>
              <p className="small mb-4 description-para">
                Supercharge AI applications with global large language models,
                RAG pipelines, tools, agent strategies, and more.
              </p>
              <div className="first-icon-circle icon-circle mb-3">
                <i className="bi bi-lightning-charge-fill text-warning"></i>
              </div>

              <div className="chat-box ">
                <p className="text-white heading">
                  ✨ What’s the best model for summarizing legal documents?
                </p>
                <p className=" description">
                  <Typewriter
                    options={{
                      strings: [`The AI explains, suggests models, and can even refine responses based on feedback.`],
                      autoStart: true,
                      loop: true,
                      delay: 20,
                      deleteSpeed: 0,
                    }}
                  />
                </p>

                <div className="d-flex gap-2 mt-3 btns-wrapper ">
                  <button className="btn btn-outline-light btn-sm">
                    Add details
                  </button>
                  <button className="btn btn-outline-light btn-sm">
                    Suggest something else
                  </button>
                </div>
                <hr className="my-4" />
                <p className="mt-3 ask-question small ">
                  Ask another question ➝
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-md-6">
            <div className="custom-card h-100">
              <p className="mb-2 heading-para">
                AI Search with Verified References
              </p>
              <p className="small mb-4 description-para">
                Deliver answers backed by real-time citations from trusted
                sources. Our AI search engine not only finds relevant results...
              </p>
              <div className="second-icon-circle icon-circle mb-3  ">
                <i className="bi bi-search text-success"></i>
              </div>

              <div className="chat-box chat-box-second">
                <p className="  mb-2 heading">
                  Built-in the{" "}
                  <span className="text-success fw-semibold">
                    smart with Taam
                  </span>{" "}
                  AI Search.
                </p>

                <div className="references-box mt-3">
                  <strong className="text-info">📚 References</strong>
                  <ul className=" small mt-2 mb-3">
                    <li>Taam AI Blog</li>
                    <li>John Umbridge</li>
                    <li>c. 2022</li>
                  </ul>
                  <hr className="my-3" />
                  <div className="d-flex gap-2 btns-wrapper">
                    <button className="btn btn-outline-light btn-sm">
                      Most cited
                    </button>
                    <button className="btn btn-outline-light btn-sm">
                      Latest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="custom-card h-100">
              <p className=" mb-2 heading-para">Intelligent time management</p>
              <p className="small mb-4 description-para">
                Manage your AI usage like a pro. Visualize time spent across
                agents, endpoints, and models—so you can optimize latency,
                throughput, and productivity.
              </p>
              <div className="third-icon-circle icon-circle mb-3">
                <i className="bi bi-lightning-charge-fill third-icon"></i>
              </div>

              <div className="chat-box">
                <p className="text-white heading">
                  ✨ What’s the best model for summarizing legal documents?
                </p>
                <p className=" description">
                  The Ai Explain . What’s the best model for summarizing legal
                  documents.{" "}
                </p>

                <div className="d-flex gap-2 mt-3 btns-wrapper ">
                  <button className="btn btn-outline-light btn-sm">
                    Add details
                  </button>
                  <button className="btn btn-outline-light btn-sm">
                    Suggest something else
                  </button>
                </div>
                <hr className="my-4" />
                <p className="mt-3 ask-question small ">
                  Ask another question ➝
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="custom-card slider-holder h-100">
              <p className=" mb-2 heading-para">Seamless integrations</p>
              <p className="small mb-4 description-para">
                Supercharge AI applications with global large language models,
                RAG pipelines, tools, agent strategies, and more.
              </p>
              <div className=" fourth-icon-circle icon-circle mb-3">
                <i className="bi bi-lightning-charge-fill fourt-icon"></i>
              </div>
              {/* <AiAgentBoxSlider /> */}
              <div className=" badge">
                <p className="m-0">connected</p>
              </div>
              <div className="mt-5">
                <AiAgentBoxSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAgentsSection;
