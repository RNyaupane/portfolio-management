import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className={`bg-secondary rounded-lg w-full px-5 py-2 text-${props.color} font-[600] text-xl`}
      >
        {props.title}
      </button>
    </>
  );
};

export default Button;
