import React, { useState } from "react";
import message from "../assets/message.svg";
import speak from "../assets/speak.svg";
import listen from "../assets/listen.svg";
import { FaCheckCircle } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

import { HiX } from "react-icons/hi";
import Record from "./Record";

const Test = () => {
  const [value, setValue] = useState({
    page1: true,
    page2: false,
  });

  const { page1, page2 } = value;

  const startTest = () => {
    setValue({ page1: false, page2: true });
  };
  return (
    <div>
      {page1 && (
        <div className="container">
          <h4 className="text-center font-weight-bolder mt-5">
            HOW TO TAKE THIS TEST
          </h4>
          <h5 className="text-center font-weight-bold">
            Record a word that has the meaning opposite to the word provided
          </h5>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src={message} alt="" className="responsive" />
              <p className="text-center mt-4">Listen/Read</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src={speak} alt="" className="responsive" />
              <p className="text-center mt-4">Press to start</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src={listen} alt="" className="responsive" />
              <p className="text-center mt-4">Speak</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <img src={speak} alt="" className="responsive" />
              <p className="text-center mt-4">Press to stop</p>
            </div>
          </div>
          <div className="row ml-lg-5">
            <div className="col-sm-12 col-md-6 col-lg-5 first-background ml-lg-5">
              <div className="d-flex justify-content-start mt-3 font-weight-bolder mb-2">
                DO'S
              </div>
              <p>Feel free to make a guess as there are no negative marks</p>
              <p>
                <FaCheckCircle />{" "}
                <span className="ml-3">This Test has 5 questions</span>
              </p>
              <p>
                <FaCheckCircle />{" "}
                <span className="ml-3">Total Test Duration - 2.5 minutes</span>
              </p>
              <p>
                <FaCheckCircle />{" "}
                <span className="ml-3">
                  Time to answer each question - 30 seconds
                </span>
              </p>
              <p>
                <FaCheckCircle />{" "}
                <span className="ml-3">
                  Each question might carry different marks
                </span>
              </p>
              <p>
                <FaCheckCircle />{" "}
                <span className="ml-3">Attempt as many as you can</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5 second-background ml-lg-3">
              <div className="d-flex justify-content-start mt-3 font-weight-bolder mb-2 text-center">
                DONT'S
              </div>
              <p>Your test will end if -</p>
              <p>
                <HiX />
                <span className="ml-3">
                  You minimise the app or go away from test screen
                </span>
              </p>
              <p>
                <HiX />
                <span className="ml-3">
                  You do not answer 5 question in a row.
                </span>
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              className="btn btn-warning btn-lg mr-3 mb-2"
              style={{
                color: "white",
                borderRadius: "20px",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              Take Demo <FaGreaterThan />
            </button>
            <button
              className="btn btn-warning btn-lg mr-3 mb-2"
              style={{
                color: "white",
                borderRadius: "20px",
                fontWeight: "600",
                fontSize: "13px",
              }}
              onClick={startTest}
            >
              Start Test <FaGreaterThan />
            </button>
          </div>
        </div>
      )}
      {page2 && <Record />}
    </div>
  );
};

export default Test;
