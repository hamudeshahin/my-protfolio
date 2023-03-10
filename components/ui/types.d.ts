import { ReactNode } from "react";

export interface IButton {
  children?: ReactNode | string | null | undefined;
  type?: "primary" | "error" | "warning";
  className?: string;
  onClick?: func;
}

export interface ILink {
  children?: ReactNode | string | null | undefined;
  type?: "primary" | "error" | "warning";
  className?: string;
  href: string;
}
