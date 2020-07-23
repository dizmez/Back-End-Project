import React from "react";

export function Quizbox({question, options}) {
  return (
    <div className="container">
      <div className="box">
        <div className="text">
          <h5>
            {question}
          </h5>
          <br/>
          <input type="radio" name = "ans" value=""/> {options.a} <br/>
          <input type="radio" name = "ans" value=""/> {options.b} <br/>
          <input type="radio" name = "ans" value="B"/> {options.c} <br/>
          <input type="radio" name = "ans" value="" /> {options.d} <br/> <br/>
          <button className="btn btn-5" type="button">Submit</button>
          <hr />
          </div>
        
      </div>
    </div>
  );
}
