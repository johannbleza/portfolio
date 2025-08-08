import Image from "next/image";

interface ProjectCardProps {
  name: string;
  desc: string;
  img: string;
  className: string;
}

const ProjectCard = ({ name, img, className }: ProjectCardProps) => {
  return (
    <div className={className} style={{ position: "relative" }}>
      <Image
        priority={true}
        src={img}
        alt={img}
        fill={true}
        className="object-cover object-ce"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-1">
        <h2 className="font-bold md:text-xl">{name}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
