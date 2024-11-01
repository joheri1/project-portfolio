/* eslint-disable react/prop-types */

// TextSection.jsx

import "./TextSection.css";
import { H2, H3, Body } from "../../ui/typography/Typography";
import "../../ui/typography/Typography.css";

const skillsContent = [
  {
    title: "Code",
    items: ["HTML5", "CSS3", "JavaScript ES6", "React", "Styled Components", "GitHub"]
  },
  {
    title: "Toolbox",
    items: ["Atom", "Postman", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Keynote", "Slack"]
  },
  {
    title: "Upcoming",
    items: ["Node.js"]
  },
  {
    title: "More",
    items: ["Branding", "Strategy", "Process Design", "Concept Development", "Agile methodology"]
  }
];

const techContent = {
  title: "Tech",
  description: "HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, MongoDB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub."
};

export const TextSection = ({ category }) => {
  if (category === "skills") {
    return (
      <div className="text-section-skills">
        <H2>Skills</H2>
        <div className="skills-columns">
          {skillsContent.map((column, index) => (
            <div key={index} className="skills-column">
              <H3>{column.title}</H3>
              {column.items.map((item, idx) => (
                <Body key={idx}>{item}</Body>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  } else if (category === "tech") {
    return (
      <div className="text-section-tech">
        <H2>{techContent.title}</H2>
        <H3>{techContent.description}</H3>
      </div>
    );
  } else {
    return null;
  }
};

