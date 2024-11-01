// Hero.jsx
import "./Hero.css";
import { H1, H3, Body } from "../../ui/typography/Typography";
import "../../ui/typography/Typography.css";

export const Hero = () => { 
  return (
    <section className="hero-section">
      <div className="hero-content">
        <H3 heading="I am Sara Svensson" />
        <H1 heading="Frontend" />
        <H1 heading="Developer" />
        <Body text="Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field." />
      </div>
    </section>
  );
};

export default Hero;

