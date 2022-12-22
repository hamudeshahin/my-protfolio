import { FC } from "react";
import { IButton } from "./types";

const Button: FC<IButton> = ({ children, type = "error", className }) => {
  const typeClassNames =
    type === "error" ? "bg-red-500" : type === "warning" ? "bg-yellow-500" : "";

  return (
    <button
      className={
        "text-white text-sm " +
        typeClassNames +
        " rounded-md py-2 px-3 " +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
