import { FC } from "react";
import { IButton } from "./types";

const Button: FC<IButton> = ({ children, type, className }) => {
  return (
    <button
      className={
        "text-white text-sm bg-red-500 rounded-md py-2 px-3 " + className
      }
    >
      {children}
    </button>
  );
};

export default Button;
