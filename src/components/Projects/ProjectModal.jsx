import { motion } from 'framer-motion';
import Arrow from '../../assets/icon-arrow.svg?react';
import Close from '../../assets/icon-close.svg?react';

const ProjectModal = ({
  title,
  description,
  imageOverlay,
  type,
  year,
  selectedProject,
  onClick,
}) => {
  const handleModalClick = ({ target }) => {
    if (target.id === 'modal') onClick();
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md flex items-center justify-center px-4 z-[100]"
      id="modal"
      onClick={handleModalClick}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { type: 'spring', duration: 0.7 },
        }}
        exit={{
          opacity: 0,
          filter: 'blur(5px)',
          transition: { ease: 'easeIn', duration: 0.22 },
        }}
        className="bg-primary-bg w-[50rem] rounded-2xl border-4 border-secondary"
      >
        <header className="relative flex flex-wrap justify-between items-center border-b-[1.5px] border-grey/30 gap-3 px-8 py-6">
          <button
            className="absolute top-0 right-0 filter cursor-pointer hover:opacity-50 transition-opacity duration-300 ease-out p-2"
            onClick={onClick}
          >
            <Close />
          </button>
          <h2 className="font-extrabold text-2xl text-primary">{title}</h2>
          <a
            className="flex items-center font-normal text-sm text-white bg-black hover:opacity-50 transition-opacity duration-300 ease-out gap-2 rounded-full px-4 py-2.5"
            href={selectedProject.url}
            target="_blank"
          >
            Visualizar Site
            <Arrow />
          </a>
        </header>
        <div className="max-h-[50vh] lg:max-h-max overflow-y-scroll lg:overflow-y-auto">
          <div className="flex flex-col gap-4 px-8 py-6">
            <div className="flex flex-wrap justify-between gap-3">
              <p className="font-extralight text-base text-secondary w-full sm:w-[80%]">
                {description}
              </p>
              <div className="flex flex-row lg:flex-col justify-between lg:justify-start w-full lg:w-auto">
                <p className="font-extralight text-base text-secondary">
                  <span className="font-bold">Cliente:</span> {type}
                </p>
                <p className="font-extralight text-base text-secondary">
                  <span className="font-bold">Ano:</span> {year}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-3">
              <ul className="flex flex-wrap gap-2">
                {selectedProject.category.map((item) => (
                  <li
                    key={item}
                    className="inline-flex w-fit min-w-fit items-center text-sm text-primary bg-btn-bg px-3 py-1 border rounded-full border-transparent gap-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t-[1.5px] border-grey/30 px-8 py-6">
            <img
              className="w-full h-auto rounded-lg aspect-video"
              src={imageOverlay}
              alt={title}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
