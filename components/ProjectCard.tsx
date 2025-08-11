import { CodeIcon, Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  desc: string;
  img: string;
  className: string;
  link: string;
}

const ProjectCard = ({ name, img, className, link }: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className={className + " overflow-hidden"}
      style={{ position: "relative" }}
    >
      <Image
        priority={true}
        src={img}
        alt={img}
        fill={true}
        className="object-cover object-ce project"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-1">
        <h2 className="font-bold md:text-xl">{name}</h2>
      </div>
    </a>
  );
};

export default ProjectCard;
