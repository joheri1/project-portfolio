// Card section

import "./CardSection.css";
import { H3, Body } from "./Typography"; 

export const ArticleCard = () => { 
  return (
    <div className="article-card">
      <H3>Title</H3>
      <Body>This is the body text content.</Body>
      <button>Click Me</button>
    </div>
  );
};