import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
  className = "", 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} btn-${size} ${className}`} 
    >
      {children}
    </button>
  );
};

export default Button;
