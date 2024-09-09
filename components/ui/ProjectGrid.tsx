import { IoLinkOutline, IoLogoGithub } from "react-icons/io5";
import { cn } from "@/lib/utils";
import MagicButton from "../MagicButton";

export const ProjectGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-10 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ProjectItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  projectLink,
  githubLink,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  projectLink?: string;
  githubLink?: string;
}) => {

  const handleClick = (url: string | undefined) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none grid grid-rows-1 md:grid-cols-3 gap-8 md:grid-flow-col",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Image Section */}
      <div className="col-span-3 md:col-span-1 md:w-max-[23rem] relative overflow-hidden rounded-3xl">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(
              imgClassName,
              "w-full h-full object-cover object-center rounded-3xl"
            )}
          />
        )}
      </div>

      {/* Content Section */}
      <div
        className={cn(
          titleClassName,
          "col-span-3 md:col-span-2 flex flex-col justify-between px-10 md:pl-5 md:pr-10 pb-5 md:py-10"
        )}
      >
        {/* Title */}
        <div className="group-hover/bento:translate-x-2 transition duration-200 font-sans text-lg lg:text-3xl font-bold z-10 pb-5">
          {title}
        </div>

        {/* Description */}
        <div className="group-hover/bento:translate-x-2 transition duration-200 font-sans font-extralight lg:text-base text-justify text-sm text-[#C1C2D3] z-10 flex-grow" style={{ whiteSpace: 'pre-line' }}>
          {description}
        </div>

        {/* Link Buttons */}
        <div className="py-2 justify-center md:justify-start mt-5 gap-4 flex flex-col md:flex-row">
          {!githubLink && (
            <div>
              <MagicButton
                title="View on Github"
                icon={<IoLogoGithub />}
                position="left"
                handleClick={() => handleClick(githubLink)}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
          {!projectLink && (
            <div>
              <MagicButton
                title="Project Link"
                icon={<IoLinkOutline />}
                position="left"
                handleClick={() => handleClick(projectLink)}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};
