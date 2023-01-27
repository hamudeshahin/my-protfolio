import Link from "next/link";
import { FC } from "react";
import A from "../components/ui/link";
import Container from "../components/utils/container";

const Footer: FC = () => {
  return (
    <footer className="p-5 py-20 bg-slate-900 text-center">
      <Container>
        <h2 className="text-4xl text-yellow-500 text-center font-bold">
          Hamude Shahin
        </h2>
        <div className="flex gap-5 justify-center">
          <A href="/">Home</A>
          <A href="/blogs">Blogs</A>
          <A href="/">Case Study</A>
          <A href="mailto:hamedsahin2018@icloud.com">Email</A>
        </div>
        <span className="text-slate-400">
          {`\u00A9\uFE0F`}COPYRIGHT - {new Date().getFullYear()}
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
