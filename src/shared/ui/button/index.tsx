import "./style.scss";

type ButtonProps = {
  children?: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <button className="btn-style">{children}</button>;
};

export default Button;
