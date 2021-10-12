import React from "react";
import Male from "../../../Images/man.png";
import { useParams } from "react-router-dom";
import "./Quiz.css";
import QuizImage from "../../../Images/Quiz.png";
import ProblemImage from "../../../Images/problem.png";
const Quiz = () => {
  const location = useParams();
  console.log(location);
  //   const [room,setRoom] = React.useState(location);
  return (
    <div className="container-fluid dashboard">
      <div className="user-info position-relative mb-5">
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
      <p className="text-left ml-5 dash-title-category">
        ROOM CODE : {location.id}
      </p>
      <p className="text-left ml-5 dash-title-category">QUIZZES</p>
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        <div className="dcard mr-5 mb-5 d-flex align-items-center justify-content-center">
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="card">
            <img
              src={QuizImage}
              alt="Quiz-image"
              height="150px"
              width="150px"
              style={{
                position: "absolute",
                transform: "translate(50%,-115%)",
              }}
            />
            <div className="frame">
              <div className="d-flex flex-column ml-4 mt-2 pt-0">
                <span className="quiz-warm-span">Python warmup MCQ's</span>
                <span>
                  No. of questions : <b>10</b>
                </span>
              </div>
              <div className="">
                <div id="play">
                  <div id="me"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="dcard mr-5 mb-5 d-flex align-items-center justify-content-center">
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="card">
            <img
              src={QuizImage}
              alt="Quiz-image"
              height="150px"
              width="150px"
              style={{
                position: "absolute",
                transform: "translate(50%,-115%)",
              }}
            />
            <div className="frame">
              <div className="d-flex flex-column ml-4 mt-2 pt-0">
                <span className="quiz-warm-span">Python warmup MCQ's</span>
                <span>
                  No. of questions : <b>10</b>
                </span>
              </div>
              <div className="">
                <div id="play">
                  <div id="me"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="dcard mr-5 mb-5 d-flex align-items-center justify-content-center">
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="card">
            <img
              src={QuizImage}
              alt="Quiz-image"
              height="150px"
              width="150px"
              style={{
                position: "absolute",
                transform: "translate(50%,-115%)",
              }}
            />
            <div className="frame">
              <div className="d-flex flex-column ml-4 mt-2 pt-0">
                <span className="quiz-warm-span">Python warmup MCQ's</span>
                <span>
                  No. of questions : <b>10</b>
                </span>
              </div>
              <div className="">
                <div id="play">
                  <div id="me"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="dcard mr-5 mb-5 d-flex align-items-center justify-content-center">
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="card">
            <img
              src={QuizImage}
              alt="Quiz-image"
              height="150px"
              width="150px"
              style={{
                position: "absolute",
                transform: "translate(50%,-115%)",
              }}
            />
            <div className="frame">
              <div className="d-flex flex-column ml-4 mt-2 pt-0">
                <span className="quiz-warm-span">Python warmup MCQ's</span>
                <span>
                  No. of questions : <b>10</b>
                </span>
              </div>
              <div className="">
                <div id="play">
                  <div id="me"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="dcard mr-5 mb-5 d-flex align-items-center justify-content-center">
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="card">
            <img
              src={QuizImage}
              alt="Quiz-image"
              height="150px"
              width="150px"
              style={{
                position: "absolute",
                transform: "translate(50%,-115%)",
              }}
            />
            <div className="frame">
              <div className="d-flex flex-column ml-4 mt-2 pt-0">
                <span className="quiz-warm-span">Python warmup MCQ's</span>
                <span>
                  No. of questions : <b>10</b>
                </span>
              </div>
              <div className="">
                <div id="play">
                  <div id="me"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <p className="text-left ml-5 problem-article">PROBLEMS</p>
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        <div className="dcard mr-5 mb-5 d-flex align-items-center justify-content-center">
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="card-code">
            <img
              src={ProblemImage}
              alt="Quiz-image"
              height="150px"
              width="150px"
              style={{
                position: "absolute",
                transform: "translate(50%,-115%)",
              }}
            />
            <div className="frame">
              <div className="d-flex flex-column ml-4 mt-2 pt-2">
                <span className="quiz-blue-span">Python warmup MCQ's</span>
                <span>
                  No. of que : <b>10</b>
                </span>
              </div>
              <div className="">
                <div id="play">
                  <div id="me"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="dcard mr-5 mb-5 d-flex align-items-center justify-content-center">
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="card-code">
            <img
              src={ProblemImage}
              alt="Quiz-image"
              height="150px"
              width="150px"
              style={{
                position: "absolute",
                transform: "translate(50%,-115%)",
              }}
            />
            <div className="frame">
              <div className="d-flex flex-column ml-4 mt-2 pt-2">
                <span className="quiz-blue-span">Python warmup MCQ's</span>
                <span>
                  No. of que : <b>10</b>
                </span>
              </div>
              <div className="">
                <div id="play">
                  <div id="me"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="dcard mr-5 mb-5 d-flex align-items-center justify-content-center">
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="card-code">
            <img
              src={ProblemImage}
              alt="Quiz-image"
              height="150px"
              width="150px"
              style={{
                position: "absolute",
                transform: "translate(50%,-115%)",
              }}
            />
            <div className="frame">
              <div className="d-flex flex-column ml-4 mt-2 pt-2">
                <span className="quiz-blue-span">Python warmup MCQ's</span>
                <span>
                  No. of que : <b>10</b>
                </span>
              </div>
              <div className="">
                <div id="play">
                  <div id="me"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="dcard mr-5 mb-5 d-flex align-items-center justify-content-center">
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="trigger"></div>
          <div className="card-code">
            <img
              src={ProblemImage}
              alt="Quiz-image"
              height="150px"
              width="150px"
              style={{
                position: "absolute",
                transform: "translate(50%,-115%)",
              }}
            />
            <div className="frame">
              <div className="d-flex flex-column ml-4 mt-2 pt-2">
                <span className="quiz-blue-span">Python warmup MCQ's</span>
                <span>
                  No. of que : <b>10</b>
                </span>
              </div>
              <div className="">
                <div id="play">
                  <div id="me"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Quiz;

/* <div className="d-flex flex-wrap align-items-center justify-content-center">
        <div className="box mr-5">
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div
            className="hover-point bg-white d-flex flex-column align-items-center"
            style={{ borderRadius: "0 0 0 50px" }}
          >
            <span>6</span>
            <span>Chapters</span>
          </div>
          <div className="hover-point bg-white d-flex flex-column align-items-center">
            <span>6</span>
            <span>Chapters</span>
          </div>
          <div
            className="hover-point bg-white d-flex flex-column align-items-center"
            style={{ borderRadius: "0 0 50px 0" }}
          >
            <span>6</span>
            <span>Chapters</span>
          </div>

          <div className="box-contents"></div>
        </div>
        <div className="box mr-5">
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="box-contents"></div>
        </div>
        <div className="box mr-5">
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="box-contents"></div>
        </div>
        <div className="box mr-5">
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="box-contents"></div>
        </div>
      </div>
     */
