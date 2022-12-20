import { FC, ReactNode } from "react";

interface IProps {
  children: string | ReactNode;
}

const SocialLink: FC<IProps> = ({ children }) => {
  return (
    <a
      href="https://instagram.com/hamudeshahin"
      target={"_blank"}
      className="text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors p-2"
    >
      {children}
    </a>
  );
};

export default SocialLink;
