import { useContext, useState } from 'react';
import ProjectContext from '../../context/ProjectContext';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const ProjectCard = () => {
  const { filteredProject } = useContext(ProjectContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      {filteredProject &&
        filteredProject.map((project) => (
          <div
            className="opacity-container-child h-fit w-full cursor-pointer even:sm:mt-14 transition-opacity duration-300 ease-out"
            key={project.id}
            onClick={() => openModal(project)}
          >
            <motion.div
              layout
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              id={project.id}
            >
              <div className="h-fit w-full">
                <span>
                  <div
                    className="group aspect-[3/2] w-full overflow-hidden rounded-md p-14"
                    style={{ backgroundColor: project.background }}
                  >
                    <img
                      className="w-full object-cover group-hover:scale-[1.015] transition duration-300 rounded-2xl shadow-lg"
                      src={project.image}
                      alt=""
                    />
                  </div>
                </span>
                <span>
                  <div className="mt-4 space-y-2">
                    <h5 className="font-extrabold text-lg text-primary">
                      {project.title}
                    </h5>
                    <div className="flex justify-between">
                      <p className="font-extralight text-sm text-secondary">
                        {project.type}
                      </p>
                      <p className="font-extralight text-sm text-secondary">
                        {project.year}
                      </p>
                    </div>
                  </div>
                </span>
              </div>
            </motion.div>
          </div>
        ))}

      {/* Modal */}
      {isOpen && selectedProject && (
        <ProjectModal
          selectedProject={selectedProject}
          title={selectedProject.title}
          description={selectedProject.description}
          image={selectedProject.image}
          type={selectedProject.type}
          year={selectedProject.year}
          onClick={closeModal}
        />
      )}
    </>
  );
};

export default ProjectCard;
