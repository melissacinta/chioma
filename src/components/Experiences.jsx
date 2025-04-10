import useExperiences from '@hooks/useExperiences';
import LoadingIndicator from './LoadingIndicator';
import Headding from './Headding';

const Experiences = () => {
  const [experiences, isLoading] = useExperiences();

  if (isLoading) return <LoadingIndicator />;
  return (
    <section className="section-padding">
      <Headding text="My Work Experience" extraClasses={'text-center'} />
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {experiences?.map((experience) => (
          <div key={experience.sys.id} className="max-w-[20rem]">
            <div className="w-24 h-24 mx-auto overflow-hidden flex justify-center items-center">
              <img
                src={experience.fields.image.fields.file.url}
                alt={experience.fields.company}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg">{experience.fields.company}</h2>
              <p className="text-md">
                {experience.fields.startDate} - {experience.fields.endDate}
              </p>
              <p className="text-sm">
                {experience.fields.position.toLocaleLowerCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
