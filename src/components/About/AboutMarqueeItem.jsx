import { motion } from 'framer-motion';

const AboutMarqueeItem = ({ images }) => {
  if (images)
    return (
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0 gap-4 w-max"
        >
          {images.map(({ id, icon, desc }) => (
            <div
              className="flex items-center bg-black px-4 py-2 w-fit min-w-fit gap-2 rounded-full"
              key={id}
            >
              <img className="w-5 h-5" src={icon} />
              <span className="font-extralight text-sm text-white">{desc}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0 gap-4 w-max"
        >
          {images.map(({ id, icon, desc }) => (
            <div
              className="flex items-center bg-black px-4 py-2 w-fit min-w-fit gap-2 rounded-full"
              key={id}
            >
              <img className="w-5 h-5" src={icon} />
              <span className="font-extralight text-sm text-white">{desc}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0 gap-4 w-max"
        >
          {images.map(({ id, icon, desc }) => (
            <div
              className="flex items-center bg-black px-4 py-2 w-fit min-w-fit gap-2 rounded-full"
              key={id}
            >
              <img className="w-5 h-5" src={icon} />
              <span className="font-extralight text-sm text-white">{desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  else return null;
};

export default AboutMarqueeItem;
