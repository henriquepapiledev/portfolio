import ProjectCard from './ProjectCard';
import data from '../../data/projects';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState('');

  useEffect(() => {
    setProjects(data.sort((a, b) => Number(b.year) - Number(a.year)));
  }, [data]);
  return (
    <div className="opacity-container grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0 mt-20">
      {projects &&
        projects.map(({ id, title, image, url, background, year, type }) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            image={image}
            url={url}
            background={background}
            year={year}
            type={type}
          />
        ))}
    </div>
  );
};

export default Projects;
