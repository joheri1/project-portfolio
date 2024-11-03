/* eslint-disable react/prop-types */

/* WatchItLive, ReadArticle and ViewCode buttons */

// Button.jsx

import "./button.css";

export const Button = ({
  icon,
  label,
  link,
  className,
  onClick,
  ariaLabel,
  variant = "outlined", // Default to outlined
  fullWidth = false, // Default to normal width
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <button
      className={`button ${variant} ${fullWidth ? "full-width" : ""} ${className || ""}`}
      onClick={onClick || handleClick}
      aria-label={ariaLabel || label} // Allow custom aria-label
    >
      {icon && (
        <img
          src={icon}
          alt=""
          className="icon"
          aria-hidden="true" // Hide the icon from assistive technologies
        />
      )}
      <span className="label">{label}</span>
    </button>
  );
};

export default Button;
