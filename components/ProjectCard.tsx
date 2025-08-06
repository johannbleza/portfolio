import Image from "next/image";

interface ProjectCardProps {
  name: string;
  img: string;
  className: string;
}

const ProjectCard = ({ name, img, className }: ProjectCardProps) => {
  return (
    <div className={className} style={{ position: "relative" }}>
      <Image
        src={img}
        alt={img}
        fill={true}
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <p className="absolute font-bold inset-1 md:text-xl">{name}</p>
    </div>
  );
};

export default ProjectCard;
