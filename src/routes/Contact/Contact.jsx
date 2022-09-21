import React from "react";
import "./Contact.scss";

function Contact(props) {
  return (
    <div>
      <div className="contactInfo">
        <h1>Get in Touch!</h1>
        <span>
          E-mail :
          <ul>
            <li>hector@medector.com</li>
            <li>hectormedina@uadec.edu.mx</li>
          </ul>
        </span>
        <span>
          <a href=""></a>
        </span>
      </div>
      <div className="socialmediacontainer">
        <a href="www.linkedin.com/in/medector">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/LinkedIn_icon_circle.svg.png?alt=media&token=25cc20f9-b609-4881-8cdf-729e611d52dc"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/Medector">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/githublogo.png?alt=media&token=7d4f8c12-13d0-4f21-9bef-6c1e8d4a3914"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
