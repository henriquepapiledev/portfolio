import styles from '../MouseScrollDown/MouseScrollDown.module.css';
import Arrow from '../../assets/icon-down-arrow.svg?react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const MouseScrollDown = () => {
  return (
    <motion.div
      className="absolute left-0 right-0 bottom-28 lg:bottom-11"
      initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
      whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
      transition={{
        delay: 1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true }}
    >
      <Link
        to="sobre"
        smooth={true}
        duration={500}
        className="flex justify-center items-center transition duration-300 ease-out hover:opacity-75 active:scale-[0.9] cursor-pointer m-auto"
      >
        <div
          className={`${styles.arrow} relative w-10 h-10 flex justify-center items-center bg-secondary rounded-full z-10`}
        >
          <Arrow />
        </div>
        <div
          className={`${styles.bloom} absolute w-24 h-24 bg-secondary opacity-50 rounded-full`}
        ></div>
      </Link>
    </motion.div>
  );
};

export default MouseScrollDown;
