/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/security.jpg";

const imageAltText = "background image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I’m a Security Researcher specializing in Cyber Security with a focus on reviewing the source code of open-source packages in ecosystems like NPM, PyPI, Maven, and Ruby. I have 2 years of experience in analyzing code to identify and report malicious activities, such as exfiltration of sensitive information, and verifying binaries through platforms like VirusTotal and online sandboxes.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Before this role, I completed a two-month internship at the same company, where I developed Python-based web scrapers for hundreds of sites to automate the extraction of security advisories. I hold a bachelor’s degree in Computer Science, where I gained knowledge in programming languages like Python, C/C++, Java, and JavaScript, along with basic skills in data structures, machine learning, and web development. Although my academic background doesn’t include formal training in Cyber Security, my hands-on experience has honed my skills in code analysis and problem-solving. I’m passionate about coding, developing solutions, and tackling challenges creatively. My career interests are diverse—I’m open to opportunities in software development, Cyber Security, or even further studies. I’m also exploring ways to grow my network, generate multiple income sources, and pursue personal interests like blogging, vlogging, and fitness.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          borderRadius: "10%",
          color: "white",
          backgroundColor: "#101010",
          width: "70%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
