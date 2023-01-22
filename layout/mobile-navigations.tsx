import { FC, Fragment, useContext } from "react";
import { MobileNavContext } from "../context/mobile-nav-context";
import NavSwitch from "./nav-switch";
import { motion } from "framer-motion";
import { Links } from "./navbar";
import Link from "next/link";

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
// const ulVariants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//   },
// };

const MobileNavigations: FC<{}> = () => {
  const { open, toggleNavbar } = useContext(MobileNavContext);

  const backgroundClasses = !open
    ? "bg-transparent w-[40px] h-[40px]"
    : "bg-black/90  w-full h-full translate-x-[16px] -translate-y-[16px]";

  return (
    <div className="block sm:hidden">
      <NavSwitch open={open} toggleNavbar={toggleNavbar} />
      <div
        className={
          "fixed  transition-all right-[16px] top-[16px] duration-500  z-[100]" +
          " " +
          backgroundClasses
        }
      ></div>
      {open && (
        <div className="fixed z-[101] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul>
            {Links.map((item, i) => {
              console.log(0.6 + i);

              return (
                <motion.li
                  key={i}
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.6 + i * 0.2,
                    },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className="text-4xl hover:text-red-600 block mb-4"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavigations;
