import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default Container;
