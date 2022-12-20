import Link from "next/link";
import { FC } from "react";
import { ILink } from "./types";

const A: FC<ILink> = ({ children, className = "", type, href }) => {
  return (
    <Link
      href={href}
      className={`text-slate-400 hover:underline hover:text-red-500 ${className}`}
    >
      {children}
    </Link>
  );
};

export default A;
