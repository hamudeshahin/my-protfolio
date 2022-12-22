import { FC, useCallback, useState } from "react";
import Container from "../utils/container";
import ProjectItem, { IProject } from "./project-item";

interface IProps {
  items: IProject[];
}

const Projects: FC<IProps> = ({ items }) => {
  const [active, setActive] = useState<number>(0);

  // functions
  const handleActiveChange = useCallback((num: number) => {
    setActive(num);
  }, []);
  return (
    <div className="bg-slate-700 py-20">
      <Container>
        <div className="rounded-lg bg-slate-800 p-5">
          <h2 className="text-4xl text-center mb-5 before:content-['🤓'] before:transform before:-translate-y-1/2 before:top-1/2 before:left-0">
            My Projects.
          </h2>
          <p className="text-center text-slate-500 mb-10">
            Here are some projects that i made.
          </p>
          <div className="flex space-x-10">
            <div className="flex-1">
              <ProjectItem active={active} items={items} />
            </div>
            <div className="w-[60px] flex flex-col items-center justify-center gap-5">
              {items.map((item, index) => (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleActiveChange(index);
                  }}
                >
                  <span
                    className={`flex justify-center items-center border  w-10 h-10 
                    ${
                      index === active
                        ? "border-yellow-500 text-yellow-500"
                        : "text-white border-transparent"
                    }  transform -rotate-90`}
                  >
                    0{index + 1}.
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
