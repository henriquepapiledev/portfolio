import React from 'react';
import { motion } from 'framer-motion';

const BlurRevealText = ({ text, transition, Wrapper = 'div', className }) => {
  const letters = text.split(' ');

  return (
    <Wrapper className={`${className}`}>
      {letters.map((letter, index) => (
        <React.Fragment key={index}>
          <motion.span
            className="inline-block"
            initial={{
              y: 20,
              opacity: 0,
              filter: 'blur(10px)',
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
            }}
            viewport={{ once: true }}
            transition={{
              ...transition,
              delay: (transition?.delay || 0) + index * 0.1,
            }}
          >
            {letter}
          </motion.span>
          {index < letters.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default BlurRevealText;
