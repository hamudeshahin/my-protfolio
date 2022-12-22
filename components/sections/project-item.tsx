import Image from "next/image";
import { FC, useState } from "react";
import Trail from "../animations/trail";
import Button from "../ui/button";

export interface IProject {
  img: string;
  name: string;
  startDate: string;
  endDate: string;
  role: string;
}

export type IPropsProjects = {
  items: IProject[];
  active: number;
};

const ProjectItem: FC<IPropsProjects> = ({ items, active }) => {
  return (
    <div className="rounded-2xl relative w-full md:max-w-3xl mx-auto overflow-hidden bg-slate-700">
      <img
        src={items[active].img}
        alt=""
        className="object-cover w-full h-96"
      />
      <div className="p-4 sm:p-5 md:p-10 flex items-center">
        {items.map((item, index) => (
          <div
            className={`flex-1 grid grid-cols-1 md:grid-cols-3 space-x-4 ${
              index === active ? "block" : "hidden"
            }`}
          >
            <Trail open={active === index}>
              <div className="flex flex-col items-center justify-center">
                <h3>Project</h3>
                <h5 className="line-clamp-1 text-slate-300">{item.name}</h5>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h3>Duration</h3>
                <h5 className="line-clamp-1 text-slate-300">
                  {item.startDate}
                </h5>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h3>Role</h3>
                <h5 className="line-clamp-1 text-slate-300">{item.role}</h5>
              </div>
            </Trail>
          </div>
        ))}
        {/* <div className="flex-1 grid grid-cols-2 md:grid-cols-3 space-x-4">
          <div className="flex flex-col items-center justify-center">
            <h3>Project</h3>
            <h5 className="line-clamp-1 text-slate-300">Name Of Project</h5>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>Duration</h3>
            <h5 className="line-clamp-1 text-slate-300">5 Days</h5>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center">
            <h3>Role</h3>
            <h5 className="line-clamp-1 text-slate-300">Fullstack</h5>
          </div>
        </div> */}
        <div className="w-[fit-content]">
          <Button type="warning">Take Look</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
