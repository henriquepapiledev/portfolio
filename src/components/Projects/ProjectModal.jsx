import { motion } from 'framer-motion';
import Arrow from '../../assets/icon-arrow.svg?react';
import ArrowLeft from '../../assets/icon-arrow-left.svg?react';

const ProjectModal = ({
  title,
  description,
  image,
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
      className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md flex items-center justify-center px-4 z-50"
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
        className="bg-primary-bg w-[60rem] rounded-2xl p-6"
      >
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="flex justify-between items-center"
        >
          <button
            className="flex items-center font-normal text-sm text-secondary hover:opacity-50 transition-opacity duration-300 ease-out cursor-pointer gap-2"
            onClick={onClick}
          >
            <ArrowLeft />
            Voltar para os projetos
          </button>
          <p className="inline-flex items-center w-fit min-w-fit font-normal text-sm text-secondary px-2 py-1 gap-2 border border-secondary/45 rounded-sm">
            {selectedProject.year}
          </p>
        </motion.div>

        <div className="h-[50vh] lg:h-auto overflow-y-scroll lg:overflow-y-hidden">
          <header className="flex flex-col gap-4 mt-4">
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-between gap-4 md:items-end"
            >
              <h2 className="text-3xl text-primary font-extrabold">{title}</h2>
              <a
                className="flex items-center font-normal text-sm text-secondary hover:opacity-50 transition-opacity duration-300 ease-out gap-2"
                href={selectedProject.url}
                target="_blank"
              >
                Visualizar <Arrow />
              </a>
            </motion.div>
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <p className="font-extralight text-base text-secondary w-full sm:w-[80%]">
                {description}
              </p>
              <p className="font-extralight text-base text-secondary">
                <span className="font-bold">Cliente:</span> {type}
              </p>
            </motion.div>

            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </header>
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <img className="w-full h-auto rounded-lg" src={image} alt={title} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
