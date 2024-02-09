import second from '@assets/images/projects/medical-1.png';
const ProjectCard = ({ project }) => {
  return (
    <div className="group cursor-pointer min-h-[253px] bg-primary/10 rounded-xl w-full max-w-sm p-4 shadow">
      <div className="w-full rounded drop-shadow-lg max-h-[10.5625rem] max-w-sm overflow-hidden">
        <img
          src={project?.Picture ? project.Picture[0] : second}
          alt={project.projectName}
          className="object-cover group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-4">
        <h2 className="font-semibold text-lg text-center">
          {project.projectName}
        </h2>
        <p></p>
      </div>
    </div>
  );
};

export default ProjectCard;
