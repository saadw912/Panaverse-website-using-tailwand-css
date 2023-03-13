interface ButtonProps {
    text: string;
    link: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ text, link }) => (
    <a href={link} className="btn">
      <button>{text}</button>
    </a>
  );
  
  export default Button;