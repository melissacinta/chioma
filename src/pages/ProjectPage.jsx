import { Link } from 'react-router-dom';
import { MdCloudUpload } from 'react-icons/md';
import Header from '@components/Header';
import Headding from '@components/Headding';
import Footer from '@components/Footer';
import ProjectCard from '@components/ProjectCard';
import { projects } from '@utils/projectData';

const ProjectPage = () => {
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
            href="https://drive.google.com/file/d/1IVJEmjdzukwD4i2SvhdNIIB2w9gK4sOd/view?usp=sharing"
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
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.projectName} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectPage;
