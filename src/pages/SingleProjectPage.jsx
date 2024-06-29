import Footer from '@components/Footer';
import Headding from '@components/Headding';
import Header from '@components/Header';
import { projects } from '@utils/projectData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import second from '@assets/images/projects/medical-1.png';

const SingleProjectPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const item = projects.find((item) => item.projectName === id);
      console.log(item);
      setData(item);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) return <p>Loading</p>;
  if (!isLoading && !data) return <p>No data found</p>;

  return (
    <div>
      <Header bgImage={data?.Picture ? data?.Picture[0] : second}>
        <div className="w-full py-12 max-w-2xl space-y-6">
          <h1 className="text-3xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-primary">
            {data?.projectName}
          </h1>
          <p className="mt-2">{data?.projectOverview}</p>
        </div>
      </Header>

      <section className="section-padding">
        {data?.Picture && (
          <div className="flex flex-wrap gap-2 justify-center">
            {data?.Picture.map((item, i) => (
              <div
                key={item}
                className="max-w-[20rem] rounded shadow grid place-items-center"
              >
                <img src={item} alt={`${data.projectName} - ${i}`} />
              </div>
            ))}
          </div>
        )}
        <div className="grid sm:grid-cols-2 gap-x-4 gap-y-8">
          {Object.entries(data).map(([key, value]) =>
            key === 'Picture' ||
            key === 'projectOverview' ||
            key === 'projectName' ||
            key === 'Link' ? (
              []
            ) : (
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
            )
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SingleProjectPage;
