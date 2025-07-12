import React, { useEffect } from "react";
import AiAgentBoxSlider from "./AiAgentBoxSlider";
import Typewriter from 'typewriter-effect';
import AOS from 'aos';


const AiAgentsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <section className="ai-agents-section text-white">
      <div className="container text-center">
        <div className="badge-section mb-4" data-aos="fade-up" data-aos-delay="100">
          <span className="badge rounded-pill px-3 py-2">AI Agents</span>
        </div>

        <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="200">
          Autonomous AI Agents That Work <br />
          Together
        </h2>

        <p className="section-description lead mx-auto mb-5" data-aos="fade-up" data-aos-delay="300">
          Deploy and orchestrate intelligent agents that can think, decide, and
          collaborate across tasks. Whether it's running workflows, calling
          tools, or chaining decisions, our AI agents operate autonomously to
          get things done—faster and smarter.
        </p>

        <div className="row justify-content-center g-4 px-4">
          {/* Left Card */}
          <div className="col-lg-6">
            <div className="solution-card h-100">
              <div className="custom-card-body">
                <p className=" mb-2 heading-para">Ready Agentic AI Solutions</p>
                <p className="small mb-4 description-para">
                  Supercharge AI applications with global large language models,
                  RAG pipelines, tools, agent strategies, and more.
                </p>
                <div className="first-icon-circle icon-circle mb-2">
                  <div className="inner-icon-div">
                    <div className="border-div">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" color="rgb(255, 150, 75)" style={{ userSelect: 'none', width: '100%', height: '100%', display: 'inline-block', fill: 'rgb(255, 150, 75)', color: 'rgb(255, 150, 75)', flexShrink: 0 }}><g color="rgb(255, 150, 75)" weight="regular"><path d="M132,24A100.11,100.11,0,0,0,32,124v84.33A15.69,15.69,0,0,0,47.67,224H132a100,100,0,0,0,0-200Zm0,184H48V124a84,84,0,1,1,84,84Zm12-80a12,12,0,1,1-12-12A12,12,0,0,1,144,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,100,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,188,128Z"></path></g></svg>
                    </div>
                  </div>
                  <div class="icon-bottom-line" ></div>
                </div>

                <div className="chat-box ">
                  <div className="chat-box-bg">
                    <div className="bottom-gradient"></div>
                    <div className="bottom-dot-bg">
                      <svg width="100%" height="100%" class="text-muted-strong-background inset-0"><defs><pattern id="«R1bacj3kmdb»" width="22" height="22" patternUnits="userSpaceOnUse"><rect x="5.5" y="5.5" width="1" height="1" fill="currentColor"></rect></pattern></defs><rect width="100%" height="100%" fill="url(#«R1bacj3kmdb»)"></rect></svg>
                    </div>
                  </div>
                  <div className="bg-hover-shadow"></div>
                  <div className="inner-chat-box">
                    <div className="d-flex flex-column gap-0 h-100">
                      <div className="p-3 flex-grow-1 content-div">

                        <div className="content-inner-heading">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
                            <path d="M 18.75 12.485 C 14.41 12.485 12.5 14.395 12.5 18.735 C 12.5 14.395 10.59 12.485 6.25 12.485 C 10.59 12.485 12.5 10.575 12.5 6.235 C 12.5 10.575 14.41 12.485 18.75 12.485 Z" fill="transparent" stroke="rgb(255,150,75)" stroke-linejoin="round" stroke-dasharray=""></path>
                            <path d="M 9.583 5.402 C 6.69 5.402 5.417 6.675 5.417 9.568 C 5.417 6.675 4.144 5.402 1.25 5.402 C 4.144 5.402 5.417 4.128 5.417 1.235 C 5.417 4.128 6.69 5.402 9.583 5.402 Z" fill="transparent" stroke="rgb(255,150,75)" stroke-linejoin="round" stroke-dasharray=""></path>
                          </svg>
                          <h2 className="heading">What’s the best model for summarizing legal documents?</h2>
                        </div>

                        <div className="main-content">
                          <Typewriter
                            options={{
                              strings: [`The AI explains, suggests models, and can even refine responses based on feedback.`],
                              autoStart: true,
                              loop: true,
                              delay: 20,
                              deleteSpeed: 0,
                            }}
                          />
                        </div>

                        <div className="buttons-div">
                          <button>Add details</button>
                          <button>Suggest something else</button>
                        </div>
                      </div>
                      <div className="p-3 border-light-2">
                        <div className="d-flex gap-3 justify-content-between">
                          <div className="moveable-content flex-grow-1">
                            <span>Ask another question</span>
                          </div>
                          <div className="icon-div flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" /><path d="M6.5 12h14.5" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="reference-card h-100">
              <div className="custom-card-body">
                <p className=" mb-2 heading-para">AI Search with Verified References</p>
                <p className="small mb-4 description-para">
                  Deliver answers backed by real-time citations from trusted sources. Our AI search engine not only finds relevant results
                </p>
                <div className="first-icon-circle icon-circle mb-2">
                  <div className="inner-icon-div">
                    <div className="border-div">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(127, 247, 189)" style={{ userSelect: 'none', width: '100%', height: '100%', display: 'inline-block', fill: 'rgb(127, 247, 189)', color: 'rgb(127, 247, 189)', flexShrink: 0 }}><g color="rgb(127, 247, 189)" weight="regular"><path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.69,147.32,64l24-24L216,84.69Z"></path></g></svg>
                    </div>
                  </div>
                  <div class="icon-bottom-line" ></div>
                </div>

                <div className="pre-chat-box">
                  Built-in  the <span className="text-green">smart with</span> Taam AI Search
                </div>

                <div className="chat-box ">
                  <div className="chat-box-bg">
                    <div className="bottom-gradient"></div>
                    <div className="bottom-dot-bg">
                      <svg width="100%" height="100%" class="text-muted-strong-background inset-0"><defs><pattern id="«R1bacj3kmdb»" width="22" height="22" patternUnits="userSpaceOnUse"><rect x="5.5" y="5.5" width="1" height="1" fill="currentColor"></rect></pattern></defs><rect width="100%" height="100%" fill="url(#«R1bacj3kmdb»)"></rect></svg>
                    </div>
                  </div>
                  <div className="bg-hover-shadow"></div>
                  <div className="inner-chat-box">
                    <div className="d-flex flex-column gap-0 h-100">
                      <div className="p-3 flex-grow-1 content-div">

                        <div className="content-inner-heading">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18">
                            <path d="M 11.499 6.917 L 7.749 11.5 L 6.082 9.833 M 16.915 9 C 16.915 13.372 13.371 16.917 8.999 16.917 C 4.626 16.917 1.082 13.372 1.082 9 C 1.082 4.628 4.626 1.083 8.999 1.083 C 13.371 1.083 16.915 4.628 16.915 9 Z" fill="transparent" stroke="rgb(127,247,189)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path>
                          </svg>
                          <h2 className="heading">References</h2>
                        </div>

                        <div className="content-inner-heading flex-column align-items-start w-100">
                          <h2 className="heading">LLM transformer models</h2>
                          <ul className="content-list mb-0">
                            <li>Taam AI Blog</li>
                            <li>John Umbridge</li>
                            <li>c. 2022</li>
                          </ul>
                        </div>


                      </div>
                      <div className="p-3 border-light-2">
                        <div className="buttons-div">
                          <button>Most cited</button>
                          <button>Latest</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="management-card h-100">
              <div className="custom-card-body">
                <p className=" mb-2 heading-para">Intelligent time management</p>
                <p className="small mb-4 description-para">
                  Manage your AI usage like a pro. Visualize time spent across agents, endpoints, and models—so you can optimize latency, throughput, and productivity.
                </p>
                <div className="first-icon-circle icon-circle mb-2">
                  <div className="inner-icon-div">
                    <div className="border-div">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(181, 127, 247)" style={{ userSelect: 'none', width: '100%', height: '100%', display: 'inline-block', fill: 'rgb(181, 127, 247)', color: 'rgb(181, 127, 247)', flexShrink: 0 }}><g color="rgb(181, 127, 247)" weight="regular"><path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64ZM184,216H72V180l56-42,56,42.35Zm0-140.36L128,118,72,76V40H184Z"></path></g></svg>
                    </div>
                  </div>
                  <div class="icon-bottom-line" ></div>
                </div>

                <div className="chat-box ">
                  <div className="chat-box-bg">
                    <div className="bottom-gradient"></div>
                    <div className="bottom-dot-bg">
                      <svg width="100%" height="100%" class="text-muted-strong-background inset-0"><defs><pattern id="«R1bacj3kmdb»" width="22" height="22" patternUnits="userSpaceOnUse"><rect x="5.5" y="5.5" width="1" height="1" fill="currentColor"></rect></pattern></defs><rect width="100%" height="100%" fill="url(#«R1bacj3kmdb»)"></rect></svg>
                    </div>
                  </div>
                  <div className="bg-hover-shadow"></div>
                  <div className="inner-chat-box">
                    <div className="d-flex flex-column gap-0 h-100">
                      <div className="d-flex flex-column p-25 pt-30 flex-grow-1">
                        <div class="content-inner-heading">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
                            <path d="M 15.036 6.148 C 14.652 3.467 12.532 1.346 9.851 0.963 L 9.851 6.148 Z" fill="transparent" stroke-width="0.8888888888888888" stroke="rgb(181,127,247)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path>
                            <path d="M 13.554 8.741 C 13.554 12.218 10.735 15.037 7.258 15.037 C 3.781 15.037 0.962 12.218 0.962 8.741 C 0.962 5.263 3.781 2.444 7.258 2.444 C 7.382 2.444 7.506 2.448 7.628 2.455 L 7.628 8.37 L 13.544 8.37 C 13.551 8.493 13.554 8.616 13.554 8.741 Z" fill="transparent" stroke-width="0.8888888888888888" stroke="rgb(181,127,247)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path>
                          </svg>
                          <h2 class="heading">TIme spent</h2>
                        </div>
                        <div className="row g-3">
                          <div className="col-4 list-content d-flex flex-column gap-0">
                            <p className="mb-1" style={{ color: '#c9c9c9', fontSize: '13px', textAlign: 'left' }}>person</p>
                            <div className="d-flex gap-3 justify-content-start align-items-center">
                              <div className="moveable-div">
                                <div className="top-move">.</div>
                                <div className="bottom-move">
                                  2.5
                                </div>
                              </div>
                              <span style={{ fontSize: 16 }}>Hours</span>
                            </div>
                          </div>
                          <div className="col-4 list-content d-flex flex-column gap-0">
                            <p className="mb-1" style={{ color: '#c9c9c9', fontSize: '13px', textAlign: 'left' }}>person</p>
                            <div className="d-flex gap-3 justify-content-start align-items-center">
                              <div className="moveable-div ">
                                <div className="top-move">.</div>
                                <div className="bottom-move">
                                  2.5
                                </div>
                              </div>
                              <span style={{ fontSize: 16 }}>Hours</span>
                            </div>
                          </div>
                          <div className="col-4 list-content d-flex flex-column gap-0">
                            <p className="mb-1" style={{ color: '#c9c9c9', fontSize: '13px', textAlign: 'left' }}>person</p>
                            <div className="d-flex gap-3 justify-content-start align-items-center">
                              <div className="moveable-div">
                                <div className="top-move">.</div>
                                <div className="bottom-move">
                                  2.5
                                </div>
                              </div>
                              <span style={{ fontSize: 16 }}>Hours</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="bottom-area">

                    <div className="first-line d-flex align-items-center justify-content-between">
                      <div className="left"> .
                        {` John <> Studio Meet`}
                      </div>
                      <div className="right">Today 12:00pm</div>
                    </div>
                    <div className="second-line d-flex align-items-center justify-content-between">
                      <div className="left">
                        .  Engineering All-Hands
                      </div>
                      <div className="right">Today 12:00pm</div>
                    </div>
                    <div className="button-wrapper">
                      <button>
                        <div className="moveable-div last">
                          <div className="top-move">Analysing time</div>
                          <div className="bottom-move">
                            Resechude
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="integration-card h-100">
              <div className="custom-card-body">
                <p className=" mb-2 heading-para">Seamless integrations</p>
                <p className="small mb-4 description-para">
                  Connect your AI apps with powerful tools and external APIs effortlessly.
                  Integrate logging, analytics, vector databases
                </p>
                <div className="first-icon-circle icon-circle mb-2">
                  <div className="inner-icon-div">
                    <div className="border-div">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(84, 158, 255)" style={{ userSelect: 'none', width: '100%', height: '100%', display: 'inline-block', fill: 'rgb(84, 158, 255)', color: 'rgb(84, 158, 255)', flexShrink: 0 }}><g color="rgb(84, 158, 255)" weight="regular"><path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path></g></svg>
                    </div>
                  </div>
                  <div class="icon-bottom-line" ></div>
                </div>

                <div className="chat-box ">
                  <div className="chat-box-bg">
                    <div className="bottom-gradient"></div>
                    <div className="bottom-dot-bg">
                      <svg width="100%" height="100%" class="text-muted-strong-background inset-0"><defs><pattern id="«R1bacj3kmdb»" width="22" height="22" patternUnits="userSpaceOnUse"><rect x="5.5" y="5.5" width="1" height="1" fill="currentColor"></rect></pattern></defs><rect width="100%" height="100%" fill="url(#«R1bacj3kmdb»)"></rect></svg>
                    </div>
                  </div>
                  <div className="bg-hover-shadow"></div>
                  <div className="inner-chat-box">
                    <div className="d-flex flex-column gap-0 h-100">
                      <div className="d-flex flex-column connecting flex-grow-1">

                        connecting
                      </div>

                      {/* <div className="p-3  border-light-2"></div> */}
                    </div>
                  </div>
                </div>
{/* <AiAgentBoxSlider/> */}


              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AiAgentsSection;
