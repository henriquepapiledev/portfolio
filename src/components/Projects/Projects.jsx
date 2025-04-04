import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import data from '../../data/projects';
import ButtonFilters from '../Filter/ButtonFilters';
import ProjectContext from '../../context/ProjectContext';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
        >
          <ButtonFilters />
        </motion.div>
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
