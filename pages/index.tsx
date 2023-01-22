import type { NextPage } from "next";
import Head from "next/head";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useRef } from "react";
import SolidWave from "../components/solid-wave";
import A from "../components/ui/link";
import Container from "../components/utils/container";
import SocialLink from "../components/utils/social-links";
import WaveYellow from "../components/wave-yellow";
import AboutMeBox from "../components/utils/about-me-box";

import Projects from "../components/sections/projects";
import References from "../components/sections/references";
import Connect from "../components/sections/connect";
import {
  IExperience,
  IHomeData,
  IProject,
  IReferenceMessage,
} from "../typings";
import { urlFor } from "../sanity";

const links: string[] = ["fa", "tw", "in", "is"];

const Home: NextPage<IHomeData> = ({ experience, projects, references }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <>
      <Head>
        <title>Hamude Shahin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen pt-16 relative overflow-hidden">
        <div className="w-full h-screen transform rotate-45">
          <lottie-player
            id="hi"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src={"https://assets10.lottiefiles.com/packages/lf20_r2l0zvvj.json"}
          />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-[10%] z-30">
          <h2 className="text-5xl md:text-6xl lg:text-7xl">
            I'm <span className="text-yellow-500">Hamude Shahin</span>.
          </h2>
          <p className="text-slate-400 max-w-md">
            Fullstack Developer. React/ReactNative | Node.js | MongoDB |
            TypeScript
          </p>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-[1%] sm:left-[5%] z-30">
          <ul className="flex flex-col space-y-10">
            {links.map((link, index) => (
              <li className="transform -rotate-90" key={index}>
                <SocialLink>{link}</SocialLink>
              </li>
            ))}
          </ul>
        </div>
        <WaveYellow />
        <SolidWave />
      </div>

      {/* Experiences */}
      <div className="py-10 bg-slate-700 relative">
        <Container>
          <h2 className="text-slate-400 text-2xl ml-10 z-40">Experiences:</h2>
          <div className="grid grid-cols-6 my-10 space-x-4">
            {experience?.map((item) => (
              <div key={item._id} className="col-span-2 md:col-span-1">
                <img
                  className="w-full h-24 md:h-48 my-1 object-contain"
                  src={urlFor(item.image).url()}
                  alt={`Hamude Shahin Portfolio - ${item.title}`}
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <A href={"/"}>
              Learn More <BsArrowRight style={{ display: "inline" }} />{" "}
            </A>
          </div>
        </Container>
      </div>

      {/* About Me */}
      <div className="py-10 bg-slate-700">
        <Container>
          <div className="grid grid-cols-2 space-x-5">
            <div className="p-2 col-span-2 md:col-span-1 bg-[url('/svgs/bg-about-me.svg')]">
              <div className="relative h-96 w-full sm:w-[70%] mx-auto my-24">
                <AboutMeBox
                  title="Years Old"
                  color="red"
                  className="absolute right-10 top-2"
                >
                  23
                </AboutMeBox>
                <AboutMeBox
                  title="Projects Done"
                  color="green"
                  className="absolute left-10  top-1/2 transform -translate-y-1/2"
                  plusIcon={true}
                >
                  14
                </AboutMeBox>
                <AboutMeBox
                  title="Years Of Experience"
                  color="yellow"
                  className="absolute right-10 bottom-2"
                  plusIcon={true}
                >
                  4
                </AboutMeBox>
              </div>
            </div>
            <div className="p-2 col-span-2 md:col-span-1">
              <h2 className="text-4xl before:content['']  before:inline-block before:w-4 before:h-4 before:bg-white pl-5 relative before:absolute before:transform before:top-3 before:animate-bounce before:left-0">
                About Me
              </h2>
              <p className="text-1xl text-slate-400">
                Hi there!. I am Fullstack Developer with 3 years experience. I
                have been worked on such of projects like E-commerce, Company
                Sites, Portfolios and Accounting Web Apps. <br />
                Currently, i am studying Computer Engineering at Harran
                University in Turkey.
              </p>
              <div className="p-10 ">
                <h3 className="text-2xl relative before:content-['🛑'] before:absolute before:-left-8">
                  Personal Goals
                </h3>
                <ul className="list-decimal">
                  <li>Frontend Developer {"(React/Next.js)"}</li>
                  <li>Backend Developer {"(Node.js/Experss.js/MongoDB)"}</li>
                  <li>Mobile Developer {"(React-Native)"}</li>
                  <li>Libectro {"\u{1F603}"}</li>
                  <li>Finish University {"(Computer Engineering)"}</li>
                </ul>
              </div>
              <div className="p-10 ">
                <h3 className="text-2xl relative before:content-['✅'] before:absolute before:-left-8">
                  Goals Done
                </h3>
                <ul className="list-decimal">
                  <li>Frontend Developer {"(React/Next.js)"}</li>
                  <li>Backend Developer {"(Node.js/Experss.js/MongoDB)"}</li>
                  <li>Mobile Developer {"(React-Native)"}</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Projects */}
      <Projects items={projects} />

      {/* References */}
      <References items={references} />

      {/* Connect */}
      <Connect />
    </>
  );
};

export const getServerSideProps = async () => {
  let experience: IExperience[] = [],
    references: IReferenceMessage[] = [],
    projects: IProject[] = [];
  await fetch(process.env.NEXT_PUBLIC_API + "/api/hello")
    .then((data) => data.json())
    .then((jsData) => {
      experience = jsData.experience;
      references = jsData.references;
      projects = jsData.projects;
    })
    .catch((err) => {
      console.error("Error !!");
      console.error(err);
    });

  return {
    props: {
      experience,
      projects,
      references,
    },
  };
};

export default Home;
