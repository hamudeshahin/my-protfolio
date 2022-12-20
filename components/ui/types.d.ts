import { ReactNode } from "react";

export interface IButton {
  children?: ReactNode | string | null | undefined;
  type?: "primary" | "error";
  className?: string;
}

export interface ILink {
  children?: ReactNode | string | null | undefined;
  type?: "primary" | "error";
  className?: string;
  href: string;
}
