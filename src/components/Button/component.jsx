import React from "react";

const Button = ({
  handler = () => {},
  type = "small",
  color = "blue",
  id = "",
  title = "Click me",
}) => {
  const onClickHandler = () => {
    handler();
  };

  return (
    <button
      id={id}
      className={`button ${type} ${color}`}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};

export default Button;
