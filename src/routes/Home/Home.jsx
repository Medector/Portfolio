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

      <section>
        <h2>Skills</h2>
        <ul className="skills">
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/htmllogo.png?alt=media&token=446733b5-9f3e-4c46-b0c3-7fed573b5f04"
              alt="htmlogo"
            />
            <span>HTML</span>
          </li>
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/css%20logo.png?alt=media&token=60d9dfab-ebb4-4bf5-848e-a5e0911b1d97"
              alt="csslogo"
            />
            <span>CSS</span>
          </li>
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/linkedinlogo.png?alt=media&token=9c874fd9-2645-46de-84be-62570ef97afc"
              alt="jslogo"
            />
            <span>JavaScript</span>
          </li>
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/reactlogo.png?alt=media&token=01fed7e7-b2c9-4386-ab46-c6dce4263ac1"
              alt="reactlogo"
            />
            <span>React JS</span>
          </li>
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/mysqllogo.png?alt=media&token=799f96d3-9e71-4313-add8-175cacbe1da0"
              alt="mysqllogo"
            />
            <span>MY SQL</span>
          </li>
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/posgresslogo.png?alt=media&token=a449df08-0ced-42b9-9388-657e019970df"
              alt="PostgreSQLlogo"
            />
            <span>PostgreSQL</span>
          </li>
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/pythonlogo.png?alt=media&token=1139c464-2e0a-4e7f-a6ab-30bff2a0465d"
              alt="pythonlogo"
            />
            <span>Python</span>
          </li>
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/anacondalogo.png?alt=media&token=3c36981c-4ea6-433e-b95f-be15841af8b3"
              alt="anacondalogo"
            />
            <span>Anaconda</span>
          </li>
          <li>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/vsclog.png?alt=media&token=eeb40388-fb5b-4e79-9d27-908dba606d0a"
              alt="vsclogo"
            />
            <span>VSC</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export { Home };
