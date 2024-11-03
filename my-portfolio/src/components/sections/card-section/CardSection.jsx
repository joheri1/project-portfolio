/* eslint-disable react/prop-types */

/* ========== CARD SECTION ========== */

import "./CardSection.css";
import { H3, Body } from "../../ui/typography/Typography";
import projectsData from "../../../projects.json"; // Import project data from JSON file

export const CardSection = ({ category }) => {
  // Define title and data based on the category
  const title = category === "project-card" ? "Featured Projects" : "My Journey";
  
  // Load data from JSON for projects or use hardcoded data for articles
  const cardsData = category === "project-card" ? projectsData.projects : [
    {
      title: "Being Scared: I Love Code",
      date: "July 28th",
      content: "Writing code is less about 'just working'. Instead, it's much more about creativity.",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "My First Code Review",
      date: "July 31st",
      content: "It's similar to creative writing in that the author architecting a story must use an assortment of tools.",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "JavaScript 101",
      date: "August 3rd",
      content: "A way to satisfy a particular objective through an assortment of tools and components.",
      image: "https://via.placeholder.com/300"
    }
  ];

  return (
    <div className="card-section">
      <h2>{title}</h2>
      <div className="cards-container">
        {cardsData.map((card, index) =>
          category === "project-card" ? (
            <ProjectCard
              key={index}
              title={card.name}
              tags={card.tags.join(", ")}
              image={card.image}
              netlifyLink={card.netlify}
              githubLink={card.github}
            />
          ) : (
            <ArticleCard
              key={index}
              title={card.title}
              date={card.date}
              content={card.content}
              image={card.image}
            />
          )
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, tags, image, netlifyLink, githubLink }) => (
  <div className="project-card">
    <div
      className="project-image"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(253, 111, 0, 0.30), rgba(253, 111, 0, 0.30)), url(${image})`,
      }}
    ></div>
    <H3 className="title">{title}</H3>
    <Body className="tags">{tags}</Body>
    <div className="project-links">
      <a href={netlifyLink} target="_blank" rel="noopener noreferrer">
        <button>Live Demo</button>
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <button>View Code</button>
      </a>
    </div>
  </div>
);

const ArticleCard = ({ title, date, content, image }) => (
  <div className="article-card">
    <div
      className="article-image"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(253, 111, 0, 0.30), rgba(253, 111, 0, 0.30)), url(${image})`,
      }}
    ></div>
    <H3 className="title">{title}</H3>
    <p className="date">{date}</p>
    <Body className="content">{content}</Body>
    <button>Read Article</button>
  </div>
);



