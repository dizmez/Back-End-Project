import React from "react";

export function Navhero() {
  return (
    <div className="Hero-image">
      <div className="hero-text">
        <nav>
          <div className="right">
            <ul>
              <li>
                <a href="https://c1e0d.sse.codesandbox.io/" className="btn btn-1">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <a href="#" className="btn btn-1">
                Characters
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-1">
                Universe
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-1">
                Media
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-1">
                Account
              </a>
            </li>
          </ul>
        </nav>
        <div className="Header">
          <h1>The Last Airbender Wiki</h1>
          <p>
            Lorem ipsum dolor sit amet, ei iudicabit persequeris suscipiantur
            vel, te putant referrentur cum.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
