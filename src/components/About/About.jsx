import AboutLinks from './AboutLinks';
import AboutList from './AboutList';
import image from '../../assets/photo.png';
import AboutMarquee from './AboutMarquee';

const About = () => {
  return (
    <>
      <div className="max-w-6xl mt-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex justify-center flex-1 lg:basis-full">
            <img
              src={image}
              alt="Henrique Papile"
              className="w-48 h-48 mb-12 lg:mb-0 rounded-full shadow-lg"
            />
          </div>
          <div>
            <h3 className="font-semibold text-3xl text-black mb-3">
              Henrique Papile
            </h3>
            <p className="font-extralight text-base/6 text-black">
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
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-full overflow-x-hidden mt-20">
        <div className="absolute inset-y-0 left-[-16px] w-14 bg-gradient-to-r from-white via-white z-20"></div>
        <div className="absolute inset-y-0 right-[-16px] w-14 bg-gradient-to-l from-white via-white z-20"></div>
        <AboutMarquee />
      </div>
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 mt-16">
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
      </div>
    </>
  );
};

export default About;
