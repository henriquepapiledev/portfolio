import ProjectCard from './ProjectCard';
import data from '../../data/projects';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState('');

  useEffect(() => {
    setProjects(data);
  }, [data]);
  return (
    <>
      {projects &&
        projects.map(({ id, title, description, image, url, category }) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            url={url}
            categories={category}
          />
        ))}
    </>
  );
};

export default Projects;
