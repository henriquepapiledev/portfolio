import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import data from '../../data/projects';
import ButtonFilters from '../Filter/ButtonFilters';
import ProjectContext from '../../context/ProjectContext';
import { AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProject, setFilteredProject] = useState([]);

  useEffect(() => {
    setProjects(data.sort((a, b) => Number(b.year) - Number(a.year)));
    setFilteredProject(data.sort((a, b) => Number(b.year) - Number(a.year)));
  }, [data]);

  const value = {
    projects,
    filteredProject,
    setFilteredProject,
  };

  return (
    <div className="mt-20">
      <ProjectContext.Provider value={value}>
        <ButtonFilters />
        <div className="opacity-container grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-16 mt-8">
          <AnimatePresence>
            <ProjectCard />
          </AnimatePresence>
        </div>
      </ProjectContext.Provider>
    </div>
  );
};

export default Projects;
