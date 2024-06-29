import Footer from '@components/Footer';
import Header from '@components/Header';
import { useParams } from 'react-router-dom';
import second from '@assets/images/projects/medical-1.png';
import useSingleProject from '@hooks/useSingleProject';
import ErrorComponent from '@components/ErrorComponent';
import LoadingIndicator from '@components/LoadingIndicator';

const SingleProjectPage = () => {
  const { id } = useParams();
  const [project, isLoading] = useSingleProject(id);

  if (isLoading) return <LoadingIndicator />;
  if (!isLoading && !project) return <ErrorComponent />;

  return (
    <>
      <Header
        bgImage={
          project?.picture?.length > 0
            ? project.picture[0]?.fields.file.url
            : second
        }
      >
        <div className="w-full py-12 max-w-2xl space-y-6">
          <h1 className="text-3xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-primary">
            {project?.projectName}
          </h1>
          <p className="mt-2">{project?.projectOverview}</p>
        </div>
      </Header>

      <section className="section-padding">
        {project?.picture?.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {project?.picture.map((item, i) => (
              <div
                key={item.fields.file.fileName}
                className="max-w-[20rem] rounded shadow grid place-items-center"
              >
                <img
                  src={item.fields.file.url}
                  alt={`${project.projectName} - ${i}`}
                />
              </div>
            ))}
          </div>
        )}
        <div className="grid sm:grid-cols-2 gap-x-4 gap-y-8">
          {Object.entries(project?.fieldObj).map(([key, value]) => (
            <div key={key}>
              <h3 className="font-bold text-xl">{key}</h3>
              <ul>
                {value.map((item, i) => (
                  <li key={i}>
                    <span className="font-medium">
                      {Object.values(item)[0]}:{' '}
                    </span>
                    <span>{Object.values(item)[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleProjectPage;
