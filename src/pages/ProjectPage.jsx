import { MdCloudUpload } from 'react-icons/md';
import Header from '@components/Header';
import Headding from '@components/Headding';
import Footer from '@components/Footer';
import ProjectCard from '@components/ProjectCard';
import useProjects from '@hooks/useProjects';
import LoadingIndicator from '@components/LoadingIndicator';

const ProjectPage = () => {
  const [projects, isLoading] = useProjects();
  console.log({ projects });
  const renderProjects = () => {
    if (isLoading) return <LoadingIndicator />;

    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.fields.projectName}
            project={project.fields}
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <Header>
        <div className="py-12 max-w-md space-y-6">
          <h1 className="text-3xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-primary">
            My Projects
          </h1>
          <p className="mt-2">
            Delve into a world of data, as i bring to you beautifully completed
            project for your viewing pleasure
          </p>
          <a
            href="https://drive.google.com/file/d/1nzyS9VEG_dYlSCSktDz37PaycwyIR8q0/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-2.5 py-1.5 inline-flex items-center gap-2 text-base font-semibold bg-primary hover:bg-purple-600 text-white rounded shadow hover:shadow-none"
          >
            <MdCloudUpload /> Download MY CV
          </a>
        </div>
      </Header>

      <section className="section-padding">
        <Headding
          text="View some of my recent works"
          extraClasses={'text-center'}
        />

        {renderProjects()}
      </section>
      <Footer />
    </div>
  );
};

export default ProjectPage;
