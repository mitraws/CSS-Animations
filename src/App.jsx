import React, { useState } from "react";
import cx from "classnames";

import FullscreenMenu from "./components/FullscreenMenu";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <FullscreenMenu />
      <ul>
            {["Home", "About us", "Portfolio", "Contact"].map((text, i) => {
              return (
                <li key={i}>
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      setOpen(false);
                    }}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
      <div
        className={cx("searchbar", {
          "is-open": open,
        })}
      >
        <input
          placeholder="Search"
          onFocus={(e) => setOpen(true)}
          onBlur={(e) => setOpen(false)}
        />
        <div className="dropdown_positioner">
          <div className="dropdown">
            <ul>
              <li>
                <strong>re</strong>al life CSS transition
              </li>
              <li>
                <strong>Re</strong>act hooks
              </li>
              <li>
                pa<strong>re</strong>ntheses
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>Use the searchbar above</p>
    </div>
  );
}
