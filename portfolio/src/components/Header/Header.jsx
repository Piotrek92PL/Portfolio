import FlexBetween from "../FlexBetween";
import React from "react";
import "./Header.module.css";

const Header = () => {
    return (
      <header>
        <FlexBetween>
          <h1>Logo</h1>
          <FlexBetween>
            <nav className="Menu">
              <ul>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#workexperience">Work experience</a>
                </li>
                <li>
                  <a href="#aboutme">About me</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </FlexBetween>
        </FlexBetween>
      </header>
    );
 };

export default Header;