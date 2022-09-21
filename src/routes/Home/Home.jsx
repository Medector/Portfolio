import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.scss";

function Home() {
  return (
    <div>
      <section className="textHome">
        <section className="homeHead">
          <h1>Hector Medina:</h1>
          <span className="typewritter-text">
            <Typewriter
              words={["Doctor of Medicine", "Digital Developer"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </section>
        <span className="introduction">
          <span className="introduction-p">
            <p>I'm Hector Medina, Doctor of Medicine and Programmer. </p>
            <p>
              <br />I got my bachelor's degree from: “Universidad Autónoma de
              Coahuila” as a Doctor of Medicine,
            </p>
            <br />
            <p className="introduction-p-last">
              I have been learning programming languages and computer science.
            </p>
            <br />
            <p className="introduction-p-last">
              I'm passionate about how the knowledge in both fields can
              concatenate and create incredible and groundbreaking novelties.
            </p>
          </span>
          <img
            className="brainGif"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/brainAI.gif?alt=media&token=c983f707-79dc-433e-b512-33ce64e7e5d3"
            alt="BrainGif"
          />
        </span>
      </section>
    </div>
  );
}

export { Home };
