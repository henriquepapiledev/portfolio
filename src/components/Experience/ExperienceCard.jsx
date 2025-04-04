import { experiences } from '../../data/experience';
import { motion } from 'framer-motion';

const ExperienceCard = () => {
  return (
    <>
      {experiences.map(({ enterprise, position, year, description, tags }) => (
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
          key={position}
          className="flex flex-col gap-2 border-b-[1.5px] border-grey/30 pb-5"
        >
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-lg text-primary">
              {enterprise}
            </h2>
            <span className="font-normal text-base text-secondary">{year}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-extrabold text-base text-secondary">
              {position}
            </span>
          </div>
          <div className="mt-1.5">
            <p className="font-extralight text-base text-secondary w-full lg:w-[95%]">
              {description}
            </p>
          </div>
          <div className="mt-2">
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex w-fit min-w-fit items-center text-sm text-primary bg-btn-bg px-3 py-1 border rounded-full border-transparent gap-2"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ExperienceCard;
