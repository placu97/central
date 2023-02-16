import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder20: "rounded-radius20" };
const variants = {
  GradientDeeppurple600Pink400: "bg-gradient  text-white_A700",
  GradientDeeppurple600Pink400_1: "bg-gradient  text-white_A700",
};
const sizes = { sm: "p-[33px] sm:px-[20px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder20"]),
  variant: PropTypes.oneOf([
    "GradientDeeppurple600Pink400",
    "GradientDeeppurple600Pink400_1",
  ]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder20",
  variant: "GradientDeeppurple600Pink400",
  size: "sm",
};

export { Button };
