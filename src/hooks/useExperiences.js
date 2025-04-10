import { getExperiences } from '@api/contentful';
import { useEffect, useState } from 'react';

const promise = getExperiences();
const useExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    promise.then((resp) => {
      console.log({ resp });
      setExperiences(resp);
      setLoading(false);
    });
  }, []);
  return [experiences, isLoading];
};

export default useExperiences;
