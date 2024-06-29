import second from '@assets/images/projects/medical-1.png';
import { Link } from 'react-router-dom';
const ProjectCard = ({ project }) => {
  console.log({ project });
  return (
    <Link
      to={project.slug}
      className="group cursor-pointer min-h-[253px] bg-primary/10 rounded-xl w-full max-w-sm p-4 shadow"
    >
      <div>
        <div className="w-full rounded drop-shadow-lg max-h-[10.5625rem] max-w-sm overflow-hidden">
          <img
            src={
              project?.picture?.length > 0
                ? project.picture[0]?.fields.file.url
                : second
            }
            alt={project.projectName}
            className="object-cover group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-4">
          <h2 className="font-semibold text-lg text-center">
            {project.projectName}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
