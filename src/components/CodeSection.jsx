import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../assets/css/Cards.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CodeBg from '../assets/images/Code-bg.png';
import '../assets/css/code.css';
import AOS from 'aos';



const Cards = () => {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="rgba(255,255,255,0.1)" />
          <path
            d="M24 14C18.477 14 14 18.477 14 24C14 29.523 18.477 34 24 34C29.523 34 34 29.523 34 24C34 18.477 29.523 14 24 14ZM24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24C31 27.866 27.866 31 24 31Z"
            fill="#fff"
          />
        </svg>
      ),
      title: "Access any model via a unified API",
      description:
        "Connect to 1K+ LLMs and providers across different modalities via the AI gateway.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="rgba(255,255,255,0.1)" />
          <path
            d="M34 19H14V16H34V19ZM34 26H14V23H34V26ZM34 33H14V30H34V33Z"
            fill="#fff"
          />
        </svg>
      ),
      title: "Optimize costs with caching",
      description:
        "Reduce latency and save costs with simple and semantic caching for repeat requests",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="rgba(255,255,255,0.1)" />
          <path
            d="M24 14L14 19V29L24 34L34 29V19L24 14ZM31 27.7L24 31.3L17 27.7V20.3L24 16.7L31 20.3V27.7Z"
            fill="#fff"
          />
        </svg>
      ),
      title: "Build AI Agents",
      description:
        "Build AI Agents That Can Use 1000+ Tools With Taam's Model Context Protocol Client",
    },
  ];


  const boxStyle = {
    maxWidth: "100%",
    height: "100%",
    background: "rgb(26 27 38 / 68%)",
    borderRadius: "8px",
    overflow: "hidden",
    width: "800px",
    margin: "0 auto",
    marginBottom: "100px",
  };

    useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className={styles.cards} style={{ padding: "0px" }}>
      <div className="integrate-in-minutes-container">
        <div className="inner-wrapper">
          <div className="text-center justify-content-center mt-5">
            <h3
              className="fw-700 display-6 mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Integrate in Minutes
            </h3>
            <p
              style={{ maxWidth: "100%", width: "360px", color: "#d9d9d9", fontFamily: 'inter', fontSize: '15px' }}
              className="mx-auto mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Add Taam AI to your stack with just 3 lines of code — no
              restructuring, no delays, just instant power.
            </p>
          </div>

          <div style={boxStyle}>
            <pre className="tokyo-night-dark" style={{ margin: 0 }}>
              <code
                className="hljs"
                style={{
                  color: "rgb(154, 165, 206)",
                  margin: 0,
                  padding: "30px",
                  overflowX: "auto",
                  display: "block",
                  lineHeight: 1.5,
                  fontVariantLigatures: "none",
                  fontFamily: "Menlo, monospace",
                  fontSize: "15px",
                  whiteSpace: "pre",
                  wordSpacing: "normal",
                  wordBreak: "normal",
                  wordWrap: "normal",
                  borderRadius: "8px",
                  opacity: '0.8',
                }}
              >
                <div className="d-flex">
                  <span>{`import { TaamCloud } `} </span>
                  <span className="hljs-keyword">from </span>
                  <span className="hljs-string">'taam-cloud'</span>
                  <span>{`;`}</span>
                </div>
                <br />
                <div className="d-flex">
                  <span className="hljs-comment">// Initialize the client</span>
                </div>
                <div className="d-flex">
                  <span className="hljs-keyword">const </span>
                  <span className="hljs-variable constant_">client</span>
                  <span>{` = `}</span>
                  <span className="hljs-keyword">new </span>
                  <span className="hljs-title class_">TaamCloud</span>
                  <span>{`({`}</span>
                </div>
                <div className="d-flex">
                  <span className='pl-20'>{`apiKey: process.env.TAAM_API_KEY`}</span>
                </div>
                <div className="d-flex">
                  <span>{`});`}</span>
                </div>
                <br />
                <div className="d-flex">
                  <span>{`async `}</span>
                  <span className="hljs-keyword">function </span>
                  <span className="hljs-title">main</span>
                  <span>{`() {`}</span>
                </div>
                <div className="pl-20">
                  <span className="hljs-comment">// Chat completion</span>
                  <div className="d-flex">
                    <span className="hljs-keyword">const </span>
                    <span className="hljs-variable constant_">chatResponse </span>
                    <span>{`= await client.chat.completions.`}</span>
                    <span className="hljs-title function_ invoke__">create</span>
                    <span>{`({`}</span>
                  </div>
                  <div className="pl-20">
                    <span className="hljs-attr">model</span>
                    <span>{`: `}</span>
                    <span className="hljs-string">"gpt-4-turbo"</span>
                    <span>{`,`}</span>
                  </div>
                  <div className="pl-20">
                    <span className="hljs-attr">messages</span>
                    <span>{`: [`}</span>
                  </div>
                  <div className="pl-40">
                    <span>{`{`}</span>
                    <span className="hljs-attr">role</span>
                    <span>{`: `}</span>
                    <span className="hljs-string">"system"</span>
                    <span>{`, `}</span>
                    <span className="hljs-attr">content</span>
                    <span>{`: `}</span>
                    <span className="hljs-string">"You are a helpful assistant."</span>
                    <span>{`},`}</span>
                  </div>
                  <div className="pl-40">
                    <span>{`{`}</span>
                    <span className="hljs-attr">role</span>
                    <span>{`: `}</span>
                    <span className="hljs-string">"user"</span>
                    <span>{`, `}</span>
                    <span className="hljs-attr">content</span>
                    <span>{`: `}</span>
                    <span className="hljs-string">"What is artificial intelligence?"</span>
                    <span>{`}`}</span>
                  </div>
                  <div className="pl-20">
                    <span>{`]`}</span>
                  </div>
                  <div>
                    <span>{`});`}</span>
                  </div>
                  <br />
                  <div>
                    <span>{`console.`}</span>
                    <span className="hljs-title function_ invoke__">log</span>
                    <span>{`(chatResponse.choices[`}</span>
                    <span className="hljs-number">0</span>
                    <span>{`].message.content);`}</span>
                  </div>
                  <br />
                  <div>
                    <span className="hljs-comment">// Generate embeddings</span>
                  </div>
                  <div>
                    <span className="hljs-keyword">const </span>
                    <span className="hljs-variable constant_">embeddingResponse </span>
                    <span>{`= await client.embeddings.`}</span>
                    <span className="hljs-title function_ invoke__">create</span>
                    <span>{`({`}</span>
                  </div>
                  <div className="pl-20">
                    <span className="hljs-attr">model</span>
                    <span>{`: `}</span>
                    <span className="hljs-string">"text-embedding-3-small"</span>
                    <span>{`,`}</span>
                  </div>
                  <div className="pl-20">
                    <span className="hljs-attr">input</span>
                    <span>{`: `}</span>
                    <span className="hljs-string">"Represent this text as an embedding vector"</span>
                  </div>
                  <div>
                    <span>{`)};`}</span>
                  </div>
                  <br />
                  <div>
                    <span>{`console.`}</span>
                    <span className="hljs-title function_ invoke__">log</span>
                    <span>{`(embeddingResponse.data[`}</span>
                    <span className="hljs-number">0</span>
                    <span>{`].embedding.`}</span>
                    <span className="hljs-title function_ invoke__">slice</span>
                    <span>{`(`}</span>
                    <span className="hljs-number">0</span>
                    <span>{`, `}</span>
                    <span className="hljs-number">5</span>
                    <span>{`));`}</span>
                  </div>
                </div>
                <div>
                  <span>{`}`}</span>
                </div>
                <br />
                <div>
                  <span className="hljs-title function_ invoke__">main</span>
                  <span>{`().`}</span>
                  <span className="hljs-keyword">catch</span>
                  <span>{`(console.error);`}</span>
                </div>
              </code>
            </pre>
          </div>
          <div className="code-cards-container">
            <Row>
              {features.map((feature, index) => (
                <Col key={index} md={4}>
                  <div className={styles.card}>
                    <div className={styles.icon}>{feature.icon}</div>
                    <h3 className={styles.title}>{feature.title}</h3>
                    <p className={styles.description}>{feature.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
