import React, { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ReactGA from "react-ga";
import "./problemstatement.css";

const ProblemStatement = () => {
  const handleArrow = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });
    const elementVisible = element.currentTarget.querySelector(
      ".content-description"
    );
    const arrow = element.currentTarget.querySelector(".faqs-arrow");

    elementVisible.classList.toggle("visible");
    arrow.classList.toggle("arrow-transform");
  };

  const styles = {
    container: {
      position: "relative",
      zIndex: "-1",
      fontSize: "2.5vw",
      transition: "all 0.3s linear",
      cursor: "pointer",
    },
  };

  if (window.innerWidth <= 768) {
    styles.container = {
      ...styles.container,
      fontSize: "5vw",
    };
  }

  return (
    <React.Fragment>
      <div id="problem-statements" className="parent-content">
        <h1 className="content-title">
          <img src="/images/BulletPoint.svg" alt="arrow-logo" id="arrow-logo-problem-statement" />
          Code Cubicle 2.0 Problem Statements
        </h1>

        <div className="content-section">
          <div className="content" onClick={handleArrow}>
            <h1 className="content-title">
              Healthcare
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <div className="content-description">
              <h2>Affordability:</h2>
              <p>
                Rising healthcare costs make it difficult for individuals and families in rural areas to afford necessary medical treatments, medications, and insurance premiums. Can you ponder upon this problem and find some unique solutions?
              </p>
              <br></br>
              <h2>Rehabilitation:</h2>
              <p>
                Can you find ways to incorporate enjoyable activities into the recovery process so that it can provide a sense of accomplishment, help reduce stress, and provide a sense of purpose and meaning in life to people recovering from various problems such as addiction, therapies etc?
              </p>
            </div>
          </div>

          <div className="content" onClick={handleArrow}>
            <h1 className="content-title">
              EdTech
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <div className="content-description">
              <h2>Personalized Learning:</h2>
              <p>
                Traditional education often follows a one-size-fits-all approach, which may not cater to the diverse learning needs of students. Technology can facilitate personalized learning experiences by utilizing adaptive learning platforms, AI-driven tutors, and learning analytics to tailor educational content and pace to individual student abilities and preferences.
              </p>
              <br></br>
              <h2>Gamified Homework Assignments:</h2>
              <p>
                Design a gamified homework platform that transforms traditional assignments into interactive quests, challenges, or simulations, incentivizing students to complete tasks, review concepts, and earn rewards while having fun and learning.
              </p>
            </div>
          </div>

          <div className="content" onClick={handleArrow}>
            <h1 className="content-title">
              FinTech
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <div className="content-description">
              <h2>Money Management for Young Adults:</h2>
              <p>
                Young adults (aged 18-25) are financially savvy but lack the tools and guidance to confidently navigate their financial futures. Design an inclusive FinTech solution that empowers them to manage their money effectively and build a secure financial foundation.
              </p>
              <br></br>
              <h2>Fraud and Security:</h2>
              <p>
                Financial fraud, including identity theft, payment fraud, and cyberattacks, are really common these days. Can blockchain or tech in general help in this matter?
              </p>
            </div>
          </div>

          <div className="content" onClick={handleArrow}>
            <h1 className="content-title">
              Open Innovation
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <div className="content-description">
              <h2>Microsoft Challenge:</h2>
              <p>
                Since the final round of this hack will be conducted in Microsoft Office in Gurugram (not the software lol), it is fit that we have a special section for the teams that use the most microsoft owned products, be it tools like npm, GitHub, VSCode or languages like Typescript, whatever you use, just keep a count and let us know. Bonus points if you use a Windows Vistas operating system.
              </p>
              <br></br>
              <h2>Open Open Innovation:</h2>
              <p>
                This is the real “open” open innovation, just build anything that solves a real world problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProblemStatement;
