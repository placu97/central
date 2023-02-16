import React from "react";
const variantClasses = {
  h1: "font-semibold sm:text-[36px] md:text-[38px] text-[40px]",
  h2: "font-bold sm:text-[26px] md:text-[28px] text-[30px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
