import React from "react";

export function Navbar() {
  return (
    <div className="Navbar">
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
    </div>
  );
}
