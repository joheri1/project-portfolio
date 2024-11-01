// Hero section

import "./Hero.css";
import { H1, H3, Body } from "../../ui/typography/Typography";
import "../../ui/typography/Typography.css";

export const Hero = () => { 
  return (
    <section className="hero-section">
      <div className="hero-content">
        <H3>I am Sara Svensson</H3>
        <H1>Frontend</H1>
        <H1>Developer</H1>
        <Body>
          Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. 
          She creates user-friendly applications and solves complex issues with ease. Her drive for excellence 
          makes her a valuable asset to any project and a standout in the technology field.
        </Body>
      </div>
    </section>
  );
};

export default Hero;
