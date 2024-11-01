// CardSection.jsx

import "./CardSection.css";
import { H3, Body } from "../../ui/typography/Typography";
import "../../ui/typography/Typography.css";

export const CardSection = () => { 
  return (
    <div className="card-section">
      <ArticleCard />
    </div>
  );
};

const ArticleCard = () => (
  <div className="article-card">
    <H3>Title</H3>
    <Body>This is the body text content.</Body>
    <button>Click Me</button>
  </div>
);

