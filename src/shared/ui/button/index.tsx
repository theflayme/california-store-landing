type variantButton =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "link"
  | "success"
  | "warning";

type ButtonProps = {
  variant?: variantButton;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const Button = ({ variant = "primary", children, icon }: ButtonProps) => {
  return (
    <button className={`btn btn--${variant}`}>
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
