/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pfp.png";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" style={{backgroundColor: "#1C1C1E"}} className="min-height">
      <div style={{ color: "white", position: "absolute", top: "10rem", left: "10rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2 style={{color: "blue"}}>{title}</h2>
      </div>
      <div style={{ color: "black", position: "absolute", top: "10rem", right: "15rem", width: "17rem" }}>
        <img src={image}/>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <a href="#about"><img className="pop-image" src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} /></a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
