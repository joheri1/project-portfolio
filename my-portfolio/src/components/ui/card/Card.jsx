import './Card.css';
import { Image } from '../image/Image.jsx';
import { H2 } from './Typography.jsx';

export const Card = () => {
  return (
    <div className="article-card">
      <Image />
      <div className="article-content">
        <span className="article-date">Oct 2024</span>
        <H2 heading="Zoe" />
        {/* <h2 className="article-title">How to stop being scared: Learning to love code</h2> */}
        <p className="article-description">Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.</p>
        <button className="article-button">Read Article</button>
      </div>
    </div>
  )
};