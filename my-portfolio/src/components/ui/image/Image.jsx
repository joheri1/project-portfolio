import './Image.css';
import image from '../assets/image.jpg';

export const Image = () => {
  return (
    <div className="wrapper">
      <img className="image" src={image} alt="Image" />
    </div>
  )
};