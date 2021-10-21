import { Button } from "@material-ui/core";
import React from "react";
import "./McqLength.css";
import { useParams, useHistory } from "react-router-dom";
import Timer from "../../../../../Images/timer.png";
import Male from "../../../../../Images/man.png";
const Mcq = () => {
  const location = useParams();
  const history = useHistory();
  console.log(location);
  return (
    <div className="container-fluid p-0">
      <div className="user-info position-relative">
        <div className="d-flex mx-4 pt-3 user-det justify-content-end">
          <div className="gender-info mr-3">
            <img src={Male} alt="male" height="50" width="50" />
          </div>
          <div className="user-profile d-flex flex-column">
            <span className="user-name">Dhanush Karthick S</span>
            <span className="register-no">1813015</span>
          </div>
        </div>
      </div>
      <div className="d-flex p-2" style={{marginTop:'40px'}}>
        <div className="col-md-8 p-3 pl-5">
          <p className="text-left dash-title-category">
            ROOM CODE : {location.id}
          </p>
          <p className="text-left problem-article">Python warmup MCQ's</p>
          <div className="col p-0">
            <div className="col question-outoff p-0">
              <span className="question-order">Question 1/75</span>
            </div>
            <div className="hr">
              <hr className="co p-0l" />
            </div>
            <div className="col question-outoff p-0 mb-3">
              <span>
                Note: Choosen answer boxes are turned into Green color
              </span>
            </div>
          </div>
          <div className="d-flex flex-column quizzes pt-4 pb-4">
            <div className="d-flex">
              <div class="numberCircle ml-3">1</div>
              <div className="question-up ml-3">
                <span className="span-question">
                  What is the maximum possible length of an identifier ?
                </span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center mt-3">
              <div className="d-flex m-2">
                <button className="option-1 text-left pr-2 pl-3 pt-2 pb-2 mb-1 mr-3">
                  A . 16
                </button>
                <button className="option-2 text-left pr-2 pl-3 pt-2 pb-2 mb-1">
                  B . 32
                </button>
              </div>
              <div className="d-flex">
                <button className="option-1 text-left pr-2 pl-3 pt-2 pb-2 mb-1 mr-3">
                  C . Quiz is so long to use the buddy
                </button>
                <button className="option-2 text-left pr-2 pl-3 pt-2 pb-2 mb-1">
                  D . None of these
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column quizzes align-items-center justify-content-center mt-2 mb-2 p-3">
              <img src={Timer} alt="timer" height="100" width="100" className="img-fluid mt-2" />
              <span className="text-left dash-title-category">Timer</span>
              <h2 className="timer-text">00.15.00</h2>
              <p>remaining</p>
              <div className="d-flex">
                <span className="timer-hand mr-2 ml-3">Hours</span>
                <span className="timer-hand mr-2">Minutes</span>
                <span className="timer-hand mr-2">Seconds</span>
              </div>
            </div>
            <div className="d-flex mt-2 mb-2 p-3 flex-column align-items-center quizzes">
              <span className="span-question mt-2 mb-3">Question Path</span>
              <div className="d-flex flex-wrap">
                {Array.apply(0, Array(25)).map(function (x, i) {
                  return <button class="que-path ml-3 mb-2">{i + 1}</button>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcq;

/* 
 <div className="container">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ marginTop: "120px" }}
      >
        {Array.apply(0, Array(10)).map(function (x, i) {
          return (
            <ul>
              <li className="connector">{i + 1}</li>
            </ul>
          );
        })}
      </div>
    </div>
*/
