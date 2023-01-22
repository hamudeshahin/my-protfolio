import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { FC, useState } from "react";
import { urlFor } from "../../sanity";
import { IProject } from "../../typings";
import Trail from "../animations/trail";
import Button from "../ui/button";

dayjs.extend(relativeTime);

export type IPropsProjects = {
  items: IProject[];
  active: number;
};

const ProjectItem: FC<IPropsProjects> = ({ items, active }) => {
  return (
    <div className="rounded-2xl relative w-full md:max-w-3xl mx-auto overflow-hidden bg-slate-700">
      <img
        src={urlFor(items[active].image).url()}
        alt=""
        className="object-cover w-full h-96"
      />
      <div className="p-4 sm:p-5 md:p-10 flex items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-1 grid grid-cols-1 md:grid-cols-3 space-x-4 ${
              index === active ? "block" : "hidden"
            }`}
          >
            <Trail open={active === index}>
              <div className="flex flex-col items-center justify-center">
                <h3>Project</h3>
                <h5 className="line-clamp-2 text-center text-slate-300">
                  {item.title}
                </h5>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h3>Duration</h3>
                <h5 className="line-clamp-2 text-center text-slate-300">
                  {dayjs(item.startDate).to(item.endDate, true)}
                </h5>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center">
                <h3>Role</h3>
                <h5 className="line-clamp-2 text-center text-slate-300">
                  {item.role}
                </h5>
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
          <Link href={`/projects/${items[active].slug?.current}`}>
            <Button type="warning">Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
