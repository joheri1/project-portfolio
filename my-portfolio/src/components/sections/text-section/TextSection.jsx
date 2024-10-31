// TextSection.jsx

import "./TextSection.css";
import { H2, Body} from "./Typography";

export const TextSection = () => {
  return (
    <div className="Text-section">
      <H2 heading="Title" />
      <Body text="This is the body text content." />
    </div>
  );
};