"use client";

import { projects } from "@/data";
import { Spotlight } from "./ui/Spotlight";
import { ProjectGrid, ProjectItem } from "./ui/ProjectGrid";
import GridGlobe from "./ui/GridGlobe";

const RecentProjects = () => {
  return (
    <div className="pt-32">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <h1 className="heading relative">A small selection of{" "}<span className="text-purple">my projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 pt-8">
        {/* <GridGlobe/> */}
        
        <ProjectGrid className="w-full h-full pt-10">
          {projects.map((item, i) => (
            <ProjectItem
              key={i}
              title={item.title}
              description={item.des}
              className={item.className}
              img={item.img}
              githubLink={item.githubLink}
              projectLink={item.projectLink}
            />
          ))}
        </ProjectGrid>
      </div>
    </div>
  );
};

export default RecentProjects;
