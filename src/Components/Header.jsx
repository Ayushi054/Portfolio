/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(0,0,0,0)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a className="pop-image" href="#home">Home</a>
      <a className="pop-image" href="#about">About</a>
      <a className="pop-image" href="#portfolio">Portfolio</a>
      <a className="pop-image" href="#footer">Contact</a>
    </div>
  );
};

export default Header;
