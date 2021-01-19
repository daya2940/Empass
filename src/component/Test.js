import React from "react";
import message from "../assets/message.svg";
import speak from "../assets/speak.svg";
import listen from "../assets/listen.svg";
import { FaCheckCircle } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

import { HiX } from "react-icons/hi";

const Test = () => {
  return (
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
      <div className="row row-sizing">
        <div className="col-sm-12 col-md-5 col-lg-5 first-background ml-lg-5">
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
        <div className="col-sm-12 col-md-5 col-lg-5 second-background ml-lg-3">
          <div className="d-flex justify-content-start mt-3 font-weight-bolder mb-2">
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
            <span className="ml-3">You do not answer 5 question in a row.</span>
          </p>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-sm-3 col-md-5 col-lg-6">
          <div className="d-flex justify-content-lg-end">
            <button
              className="btn btn-md btn-warning mb-3"
              style={{
                color: "white",
                fontWeight: "600",
                borderRadius: "50px",
              }}
            >
              Take Demo <FaGreaterThan />
            </button>
          </div>
        </div>
        <div className="col-sm-3 col-md-6 col-lg-6">
          <div className="d-flex justify-content-lg-start">
            <button
              className="btn btn-md btn-warning mb-3"
              style={{
                color: "white",
                fontWeight: "600",
                borderRadius: "50px",
              }}
            >
              Start Test <FaGreaterThan />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
