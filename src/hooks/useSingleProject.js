import { getSingleProject } from '@api/contentful';
import { useEffect, useState } from 'react';

const useSingleProject = (slug) => {
  const promise = getSingleProject(slug);
  const [project, setProject] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    promise.then((portFolioProject) => {
      console.log({ portFolioProject });
      setProject(portFolioProject);
      setLoading(false);
    });
  }, []);
  return [project, isLoading];
};

export default useSingleProject;
