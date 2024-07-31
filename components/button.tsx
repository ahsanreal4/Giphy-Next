import React, { FC } from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: "primary" | "secondary";
  overRideClassName?: string;
};

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`
        font-bold text-sm px-4 py-2 rounded
        ${props.variant == "primary" ? "bg-primary" : "bg-secondary"} ${
        props.overRideClassName ?? ""
      }`}
    ></button>
  );
};

export default Button;
