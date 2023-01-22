import { FC, ReactNode } from "react";
import Blob from "../components/blob";
import Footer from "./footer";
import MobileNavigations from "./mobile-navigations";
import Navbar from "./navbar";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <MobileNavigations />
      <main className="relative z-0">{children}</main>
      <Blob />
      <Footer />
    </div>
  );
};

export default MainLayout;
