import { useContext } from 'react';
import ProjectContext from '../../context/ProjectContext';
import { motion } from 'framer-motion';

const ProjectCard = () => {
  const { filteredProject } = useContext(ProjectContext);

  return (
    <>
      {filteredProject &&
        filteredProject.map(
          ({ id, title, image, url, background, year, type }) => (
            <div className="opacity-container-child h-fit w-full cursor-pointer even:sm:mt-14 transition-opacity duration-300 ease-out">
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                id={id}
              >
                <a className="h-fit w-full" target="_blank" href={url}>
                  <span>
                    <div
                      className="aspect-[3/2] w-full overflow-hidden rounded-3xl"
                      style={{ backgroundColor: background }}
                    >
                      <img
                        alt={title}
                        className="aspect-[3/2] w-full object-cover transition duration-300 hover:scale-[1.015]"
                        src={image}
                        style={{ color: 'transparent' }}
                      />
                    </div>
                  </span>
                  <span>
                    <div className="mt-4 space-y-2">
                      <h5 className="font-extrabold text-lg text-black">
                        {title}
                      </h5>
                      <div className="flex justify-between">
                        <p className="font-extralight text-base text-black">
                          {type}
                        </p>
                        <p className="font-extralight text-base text-black">
                          {year}
                        </p>
                      </div>
                    </div>
                  </span>
                </a>
              </motion.div>
            </div>
          ),
        )}
    </>
  );
};

export default ProjectCard;
