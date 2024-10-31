// Hero section

import "./Hero.css";
import { H1, H3, Body } from "./Typography"; 

export const HeroSection = () => { 
  return (
    <div className="hero-section">
      <H1 heading="Title" />
      <H3 heading="Sub title" />
      <Body text="This is the body text content." />
    </div>
  );
};