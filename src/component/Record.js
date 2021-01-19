import React, { useState } from "react";
import { FaStopwatch } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import microphone from "../assets/microphone.svg";
import { FaGreaterThan } from "react-icons/fa";
import pause from "../assets/pause.svg";

const Record = () => {
  const [time, setTime] = useState({
    min: 50,
    sec: 60,
  });
  const [width, setWidth] = useState(10);
  const { min, sec } = time;

  const handleClick = () => {
    if (min > 0) {
      let interval = 0,
        increaseIntervalSeconds,
        increaseWidth;
      if (increaseIntervalSeconds === 0) {
        setTime({ min: min - 1, sec: 60 });
      }
      setInterval(() => {
        interval++;
        increaseIntervalSeconds = sec - interval;
        increaseWidth = width + 10;
        setTime({ min: min, sec: increaseIntervalSeconds });
        setWidth({ width: increaseWidth });
      }, 1000);
    }
  };
  return (
    <div className="container mt-5">
      <div className="card" style={{ width: "100%", height: "auto" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <p>2</p>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: `${width}%` }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <p className="text-center mt-4">ANTONYMS</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-lg-end">
              <button
                className="btn btn-lg btn-success"
                style={{ borderRadius: "20px" }}
              >
                <FaStopwatch width="300px" />
                <span className="ml-3 mb-3">
                  {min}: {sec}
                </span>
              </button>
            </div>
          </div>
          <hr width="100%" />
          <div className="mt-5">
            <p className="text-center font-weight-bold">Laugh</p>
            <br />
            <div className="d-flex justify-content-center">
              <img src={pause} alt="" />
            </div>
          </div>
          <div className="row test-spacing ">
            <div className="col-sm-4 col-md-4 col-lg-4 justify-content-start d-none d-lg-block test-spacing1">
              <FaExclamationCircle />
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 " onClick={handleClick}>
              <div
                className="d-flex justify-content-center"
                style={{ cursor: "pointer" }}
              >
                <img src={microphone} alt="" className="" width="100px" />
              </div>
              <p className="text-center mt-2">Press to record your answer</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 d-flex justify-content-end mt-5 mb-5">
              <button
                className="btn btn-light "
                style={{
                  color: "black",
                  borderRadius: "10px",
                  fontWeight: "600",
                  width: "100px",
                }}
              >
                Next <FaGreaterThan />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
