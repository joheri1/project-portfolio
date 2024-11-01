// TextSection.jsx

import "./TextSection.css";
import { H2, Body } from "../../ui/typography/Typography";
import "../../ui/typography/Typography.css";

export const TextSection = () => {
  return (
    <div className="Text-section">
      <H2 heading="Title" />
      <Body text="This is the body text content." />
    </div>
  );
};
