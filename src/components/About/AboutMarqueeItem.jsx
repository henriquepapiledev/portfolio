import { motion } from 'framer-motion';

const AboutMarqueeItem = ({ images }) => {
  if (images)
    return (
      <div className="flex gap-12 md:gap-20">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0 gap-12 md:gap-20 w-max"
        >
          {images.map(({ id, icon, desc }) => (
            <div className="flex items-center gap-2 opacity-75" key={id}>
              <img className="w-8 h-8" src={icon} />
              <span className="font-bold text-base text-black">{desc}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0 gap-12 md:gap-20 w-max"
        >
          {images.map(({ id, icon, desc }) => (
            <div className="flex items-center gap-2 opacity-75" key={id}>
              <img className="w-8 h-8" src={icon} />
              <span className="font-bold text-base text-black">{desc}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0 gap-12 md:gap-20 w-max"
        >
          {images.map(({ id, icon, desc }) => (
            <div className="flex items-center gap-2 opacity-75" key={id}>
              <img className="w-8 h-8" src={icon} />
              <span className="font-bold text-base text-black">{desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  else return null;
};

export default AboutMarqueeItem;
