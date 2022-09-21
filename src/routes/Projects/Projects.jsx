import React from "react";
import { useState } from "react";
import { Modal } from "../../components/organisms/Modal";
import "./Projects.scss";
import Todosinfo from "../../components/molecules/Todosinfo.jsx";
import HangmanInfo from "../../components/molecules/HangmanInfo";
import CampInfo from "../../components/molecules/CampInfo";
import TurnCallerInfo from "../../components/molecules/TurnCallerInfo";
import IsPalindormeInfo from "../../components/molecules/IsPalindromeInfo";
import ReactPlayer from "react-player";
// import { Player } from "video-react";
function Projects() {
  const [openModal, setOpenModal] = React.useState(false);
  const [appInfo, setAppInfo] = React.useState("");

  return (
    <div className="textProjects">
      <div>
        <h1>Projects</h1>
        <h2>Welcome!</h2>
        <p>
          Welcome Here you can find some projects I've made to practice
          different skills. The making of these projects has helped me
          crystalize and put into practice my knowledge.
        </p>
        <span>Thank you for visiting, and feel free to explore around!</span>
      </div>
      <section className="project-libary">
        <ul className="project-libary-list">
          <li>
            <h3>Camp Page</h3>
            <a href="https://medector.github.io/Camp/">
              <img
                className="projectImg"
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/campScreenShot.png?alt=media&token=740eb7e5-5416-4b32-96b5-cfe240fc8019"
                alt=""
              />
            </a>
            <button
              onClick={() => {
                setAppInfo(CampInfo), setOpenModal(true);
              }}
            >
              Learn More
            </button>
          </li>

          <li>
            <h3>ToDo List Webapp</h3>
            <a href="https://medector.github.io/todo-list/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/TodoListScreenShot.png?alt=media&token=c94301a8-8c91-4d6f-88f9-77d06ed8a3d5"
                alt="Shot from ToDo app"
              />
            </a>
            <button
              onClick={() => {
                setAppInfo(Todosinfo), setOpenModal(true);
              }}
            >
              Learn More
            </button>
          </li>

          <li>
            <h3>Guess the Word</h3>
            <ReactPlayer
              className="projectVideo"
              controls
              url="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/Hangman%20Python%20Demo%20s%20-%20SD%20480p.mov?alt=media&token=ea1a8274-b750-4ada-a74b-5a305dca5127"
            />
            <button
              onClick={() => {
                setAppInfo(HangmanInfo), setOpenModal(true);
              }}
            >
              Learn More
            </button>
          </li>

          <li>
            <h3>Turn Caller App</h3>
            <ReactPlayer
              className="projectVideo"
              id="turncallervideo"
              controls
              url="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/Turn%20Caller%20Demo%20-%20SD%20480p.mov?alt=media&token=1742caf8-49c1-4b86-8ac3-36c44e2cda9e"
            />
            <button
              onClick={() => {
                setAppInfo(TurnCallerInfo), setOpenModal(true);
              }}
            >
              Learn More
            </button>
          </li>

          <li>
            <h3>Is Palindrome?</h3>
            <ReactPlayer
              className="projectVideo"
              controls
              url="https://firebasestorage.googleapis.com/v0/b/portfolio-f1706.appspot.com/o/isPalindrome%20Demo%20-%20SD%20480p.mov?alt=media&token=458d72d9-a7f6-471a-a714-33b4b26879c0"
            />
            <button
              onClick={() => {
                setAppInfo(IsPalindormeInfo), setOpenModal(true);
              }}
            >
              Learn More
            </button>
          </li>
        </ul>
      </section>
      {!!openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          {<text>{appInfo}</text>}
        </Modal>
      )}
    </div>
  );
}

export default Projects;
