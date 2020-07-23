import React from "react";

export function Themes() {
  return (
    <div className="Themes">
      <h3>Quiz</h3>
      <br />
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <a href="https://c1e0d.sse.codesandbox.io/elements">
              <img
                src="https://i.pinimg.com/originals/bf/96/f8/bf96f8022f9c48329be1315330102936.png"
                alt="elements"
              />
            </a>
          </div>
          <div class="col-sm">
            <a href="https://c1e0d.sse.codesandbox.io/elements">
              <img
                src="https://ibb.co/7Y2jgtM"
                alt="elements"
              />
            </a>
          </div>
          <div class="w-100" />
          <div class="col-sm">
            <h5>
              {" "}
              <a href="https://c1e0d.sse.codesandbox.io/elements">
                What's Your Element?
              </a>
            </h5>
          </div>
          <div class="col-sm">
            <h5> Test Your Knowledge</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
