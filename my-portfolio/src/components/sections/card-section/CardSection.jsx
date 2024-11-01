// CardSection.jsx

import "./CardSection.css";
import { H3, Body } from "../../ui/typography/Typography";
import "../../ui/typography/Typography.css";

export const CardSection = () => { 
  return (
    <div className="card-section">
      <h2>Featured Projects</h2>
      <div className="cards-container">
        <ArticleCard />
        <ProjectCard />
      </div>
    </div>
  );
};
const ProjectCard = () => (
  <div className="project-card">
    <H3>Project Title</H3>
    <Body>This is the body text content for the project.</Body>
    <button>Live demo</button>
    <button>View Code</button>
  </div>
)

const ArticleCard = () => (
  <div className="article-card">
    <H3>Article Title</H3>
    <Body>This is the body text content for the article.</Body>
    <button>Read Article</button>
  </div>
);

