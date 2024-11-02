/* ========== HERO SECTION ========== */

import "./Hero.css";
import { H1, H3, Body } from "../../ui/typography/Typography";
import "../../ui/typography/Typography.css";
import placeholderImage from "../../../assets/images/placeholder-image.png";
import SocialIcons from "../../ui/icons/icons";

export const Hero = () => { 
  return (
    <section className="hero-container">
      <div className="text-box">
        <H3 heading="I am Sara Svensson" />
        <H1 heading="Frontend Developer" />
        <Body text="Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field." />
        <SocialIcons />
      </div>
      <div className="image-box">
        <img src={placeholderImage} alt="Profile image of Johanna Eriksson" className="profile-image" />
      </div>
    </section>
  );
};

export default Hero;
