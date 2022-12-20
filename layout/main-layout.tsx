import { FC, ReactNode } from "react";
import Blob from "../components/blob";
import Navbar from "./navbar";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main className="relative z-0">{children}</main>
      <Blob />
    </div>
  );
};

export default MainLayout;
