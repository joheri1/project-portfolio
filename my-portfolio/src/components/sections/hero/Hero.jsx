// Hero.jsx

import "./Hero.css";
import { H1, H3, Body } from "../../ui/typography/Typography";
import "../../ui/typography/Typography.css";
import placeholderImage from "../../../assets/images/placeholder-image.png";
import GithubIcon from "../../../assets/icons/Btn - github.svg";
import InstagramIcon from "../../../assets/icons/Btn - instagram.svg";
import LinkedinIcon from "../../../assets/icons/Btn - linkedin.svg";
import StackOverflowIcon from "../../../assets/icons/Btn - stackoverflow.svg";
import TwitterIcon from "../../../assets/icons/Btn - twitter.svg";

export const Hero = () => { 
  return (
    <section className="hero-container">
      <div className="text-box">
        <H3 heading="I am Sara Svensson" />
        <H1 heading="Frontend Developer" />
        <Body text="Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field." />
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="GitHub" className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" className="icon" />
          </a>
          <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
            <img src={StackOverflowIcon} alt="Stack Overflow" className="icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" className="icon" />
          </a>
        </div>
      </div>
      <div className="image-box">
        <img src={placeholderImage} alt="Profile image of Johanna Eriksson" className="profile-image" />
      </div>
    </section>
  );
};

export default Hero;

