import AboutLinks from './AboutLinks';
import AboutList from './AboutList';
import image from '../../assets/photo.png';
import AboutMarquee from './AboutMarquee';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <div className="max-w-6xl mt-20">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
            className="flex justify-center flex-1 lg:basis-full"
          >
            <img
              src={image}
              alt="Henrique Papile"
              className="w-48 h-48 mb-12 lg:mb-0 rounded-full"
            />
          </motion.div>
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-3xl text-primary mb-3">
              Henrique Papile
            </h3>
            <p className="font-extralight text-base/6 text-secondary">
              Olá! Sou Henrique Papile, tenho 31 anos e resido em São Paulo,
              Brasil. Me formei em Análise e Desenvolvimento de Sistemas pela
              Uninove. Nos últimos 6 anos, acumulei valiosa experiência no campo
              do desenvolvimento Front End, dominando ferramentas como HTML,
              CSS, Tailwind, Bootstrap, JavaScript, WordPress e Strapi.
              Atualmente, estou imerso no estudo do React.
            </p>
            <div className="mt-5">
              <AboutLinks />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ filter: 'blur(10px)', opacity: 0 }}
        whileInView={{ filter: 'blur(0)', opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
        className="relative flex justify-center items-center w-full overflow-x-hidden mt-20"
      >
        <div className="absolute inset-y-0 left-[-16px] w-10 bg-gradient-to-r from-primary-bg via-primary-bg z-20"></div>
        <div className="absolute inset-y-0 right-[-16px] w-10 bg-gradient-to-l from-primary-bg via-primary-bg z-20"></div>
        <AboutMarquee />
      </motion.div>

      <div className="flex overflow-x-scroll overflow-y-hidden sm:grid lg:grid-cols-3 gap-6 mt-16">
        <motion.div
          className="flex-[1_0_85%] sm:flex-auto"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
        >
          <AboutList
            title="Eu tive experiências com"
            experiences={[
              'Codando Angular',
              'Codando C#',
              'Pré-processadores CSS:  Sass, Less',
              'Figma, Adobe XD',
              'Git, GitHub, Bitbucket',
            ]}
          />
        </motion.div>
        <motion.div
          className="flex-[1_0_85%] sm:flex-auto"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
        >
          <AboutList
            title="Eu tenho anos de experiência com"
            experiences={[
              'Codando HTML5',
              'Codando CSS',
              'Codando JavaScript',
              'Codando WordPress',
              'Usando Elementor',
              'Codando Umbraco',
            ]}
          />
        </motion.div>
        <motion.div
          className="flex-[1_0_85%] sm:flex-auto"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
        >
          <AboutList
            title="Eu trabalho e estudo sobre"
            experiences={[
              'Estudando React',
              'Estudando API RESTful',
              'Estudando Node.js',
              'Codando CSS',
              'Codando JavaScript',
            ]}
          />
        </motion.div>
      </div>
    </>
  );
};

export default About;
