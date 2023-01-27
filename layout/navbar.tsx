import Link from "next/link";
import { FC, useContext } from "react";
import Button from "../components/ui/button";
import Container from "../components/utils/container";
import Logo from "../components/utils/logo";
import { MobileNavContext } from "../context/mobile-nav-context";
import NavSwitch from "./nav-switch";

interface ILink {
  title: string;
  href: string;
}

export const Links: ILink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
];

const Navbar: FC = () => {
  const { open, toggleNavbar } = useContext(MobileNavContext);

  return (
    <>
      <div className="backdrop-blur-sm bg-slate-300/10 px-4 py-6 fixed top-0 w-full border-b-2 border-slate-800 z-[100]">
        <Container>
          <div className="z-20 relative">
            <div className="flex justify-between items-center">
              <Logo />
              <nav className="flex space-x-16">
                <div className="hidden sm:flex space-x-5 items-center">
                  {Links.map((link, index) => (
                    <Link
                      href={link.href}
                      key={index}
                      className="relative after:content-[''] after:block after:absolute after:top-full after:z-50 after:w-0 after:bg-red-500 after:h-1 after:rounded-md hover:after:w-full after:transition-all duration-75"
                    >
                      <span className="text-red-500">0{index + 1}.</span>
                      {link.title}
                    </Link>
                  ))}
                </div>
                {/* <div className="block sm:hidden">
                  <NavSwitch open={open} toggleNavbar={toggleNavbar} />
                </div> */}
              </nav>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
