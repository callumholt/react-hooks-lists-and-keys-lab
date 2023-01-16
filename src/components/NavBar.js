import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href="#home" key="1">Home</a>
    <a href="#about" key="2">About</a>
    <a href="#projects" key="3">Projects</a>
  </nav>;
}

export default NavBar;
