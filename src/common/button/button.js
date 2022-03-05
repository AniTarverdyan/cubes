import "./button.css";

const Button = (props) => {
  const { theme, children, onClick } = props;

  return (
    <button className={`button button-${theme}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
