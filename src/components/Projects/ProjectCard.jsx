import { useContext, useState } from 'react';
import ProjectContext from '../../context/ProjectContext';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import style from '../../components/Projects/ProjectCard.module.css';

const ProjectCard = () => {
  const { filteredProject } = useContext(ProjectContext);

  return (
    <>
      {filteredProject &&
        filteredProject.map(
          ({ id, title, image, url, background, year, type }) => (
            <div
              className="opacity-container-child h-fit w-full cursor-pointer even:sm:mt-14 transition-opacity duration-300 ease-out"
              key={id}
            >
              <motion.div
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
                      className={`${style.image} aspect-[3/2] w-full overflow-hidden rounded-3xl`}
                      style={{ backgroundColor: background }}
                    >
                      <img
                        className="h-full w-full rounded-3xl hover:scale-[1.015] transition duration-300 p-14"
                        src={image}
                        alt=""
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
