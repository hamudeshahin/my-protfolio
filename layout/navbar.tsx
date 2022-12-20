import Link from "next/link";
import { FC } from "react";
import Button from "../components/ui/button";
import Container from "../components/utils/container";
import Logo from "../components/utils/logo";

interface ILink {
  title: string;
  href: string;
}

const Links: ILink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Me",
    href: "/",
  },
  {
    title: "Case Study",
    href: "/",
  },
];

const Navbar: FC = () => {
  return (
    <div className="backdrop-blur-sm bg-slate-300/10 p-4 fixed top-0 w-full border-b-2 border-slate-800 z-50">
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
              <Button>Hire Me !</Button>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
