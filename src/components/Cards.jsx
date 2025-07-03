import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Cards.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
    background: "#1a1b26",
    borderRadius: "8px",
    overflow: "hidden",
    width: "800px",
    margin: "0 auto",
    marginBottom: "100px",
  };
  const code = `
      import { TaamCloud } from 'taam-cloud';

      // Initialize the client
      const client = new TaamCloud({
        apiKey: process.env.TAAM_API_KEY
      });

      async function main() {
        // Chat completion
        const chatResponse = await client.chat.completions.create({
          model: "gpt-4-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "What is artificial intelligence?" }
          ]
        });

        console.log(chatResponse.choices[0].message.content);

        // Generate embeddings
        const embeddingResponse = await client.embeddings.create({
          model: "text-embedding-3-small",
          input: "Represent this text as an embedding vector"
        });

        console.log(embeddingResponse.data[0].embedding.slice(0, 5));
      }

      main().catch(console.error);
        `;
  return (
    <section className={styles.cards} style={{padding:"0px"}}>
      <div className="integrate-in-minutes-container">
        <div className="inner-wrapper">
          <div className=" text-center justify-content-centermt-5">
          <h3 className="fw-bold display-6 mb-3" style={{fontFamily:'inter'}}>Integrate in Minutes</h3>
          <p
            style={{ maxWidth: "100%", width: "360px", color: "#d9d9d9" ,fontFamily:'inter',fontSize:'15px'}}
            className="mx-auto  mb-5"
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
                color: "#9aa5ce",
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
              }}
            >
              {code}
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
