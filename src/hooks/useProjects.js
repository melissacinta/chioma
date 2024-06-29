import { getProjects } from '@api/contentful';
import { useEffect, useState } from 'react';

const promise = getProjects();
const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    promise.then((portFolioProjects) => {
      console.log({ portFolioProjects });
      setProjects(portFolioProjects);
      setLoading(false);
    });
  }, []);
  return [projects, isLoading];
};

export default useProjects;
