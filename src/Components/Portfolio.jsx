/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.svg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Resume",
    description:
      "Created from Microsoft word and deployed to GDrive. Includes my experience and design abilities.",
    url: "https://drive.google.com/file/d/1JkmjIcu5m8ZW_LUNxrGsWdiuU80dmH8O/view?pli=1",
  },
  {
    title: "GitHub Codespaces",
    description:
      "Contributed to open-source by creating and uploading projects by helping the community and those who are in need.",
    url: "https://github.com/Ayushi054",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{backgroundColor: "#1C1C1E"}}>
      <h2 style={{ color: "white", textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img 
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", marginLeft: "25px" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box pop-image" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small" style={{color:"white"}}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Portfolio;
