import SocialMediaLogo from '../components/SocialMediaLogo/SocialMediaLogo';
import LinkedIn from '../assets/icon-linkedin.svg?react';
import GitHub from '../assets/icon-github.svg?react';
import Email from '../assets/icon-email.svg?react';
import Whatsapp from '../assets/icon-whatsapp.svg?react';
import image from '../assets/photo.png';
import Title from '../components/Title/Title';
import Projects from '../components/Projects/Projects';
import AboutLinks from '../components/About/AboutLinks';
import AboutList from '../components/About/AboutList';
import AboutSkills from '../components/About/AboutSkills';

const Home = () => {
  return (
    <>
      <section className="h-screen border-b-[1.5px] border-grey-bg" id="home">
        <div className="container mx-auto flex flex-col justify-center items-center h-full pl-4 pr-4">
          <h1 className="font-bold text-5xl text-black mb-2">
            Olá, meu nome é <span>Henrique</span>.
          </h1>
          <p className="font-DotGothic16 text-4xl text-grey">
            Front-End Developer_
          </p>
        </div>
      </section>

      <section
        className="border-b-[1.5px] border-grey-bg pt-40 pb-40"
        id="sobre"
      >
        <div className="container mx-auto flex flex-col pl-4 pr-4">
          <Title title="sobre mim" position="left" />
          <div className="max-w-6xl mt-20">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex justify-center flex-1 lg:basis-full">
                <img
                  src={image}
                  alt="Avatar"
                  className="w-48 h-48 rounded-full shadow-lg"
                />
              </div>
              <div>
                <h3 className="font-semibold text-3xl text-black mb-3">
                  Henrique Papile
                </h3>
                <p className="font-extralight text-base/6 text-black">
                  Olá! Sou Henrique Papile, tenho 31 anos e resido em São Paulo,
                  Brasil. Me formei em Análise e Desenvolvimento de Sistemas
                  pela Uninove. Nos últimos 6 anos, acumulei valiosa experiência
                  no campo do desenvolvimento Front End, dominando ferramentas
                  como HTML, CSS, Tailwind, Bootstrap, JavaScript, WordPress e
                  Strapi. Atualmente, estou imerso no estudo do React.
                </p>
                <div className="mt-5">
                  <AboutLinks />
                </div>
              </div>
            </div>
          </div>
          <div>
            <AboutSkills />
          </div>
          <div className="grid lg:grid-cols-3 gap-12 mt-16">
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
        </div>
      </section>

      <section
        className="border-b-[1.5px] border-grey-bg pt-40 pb-40"
        id="cases"
      >
        <div className="container mx-auto flex flex-col pl-4 pr-4">
          <Title title="cases" position="left" />
        </div>
      </section>

      <section
        className="border-b-[1.5px] border-grey-bg pt-40 pb-40"
        id="projetos"
      >
        <div className="container mx-auto flex flex-col pl-4 pr-4">
          <Title title="projetos pessoais" position="right" />
          <div className="grid grid-cols-2 gap-20 mt-20">
            <Projects />
          </div>
        </div>
      </section>

      <section className="pt-40 pb-40" id="contato">
        <div className="container mx-auto flex flex-col pl-4 pr-4">
          <Title title="contato" position="center" />
          <div className="flex justify-center items-center gap-20 mt-16">
            <SocialMediaLogo
              href="https://www.linkedin.com/in/henriquepapile/"
              target="_blank"
              img={<LinkedIn />}
            />
            <SocialMediaLogo
              href="https://github.com/henriquepapiledev"
              target="_blank"
              img={<GitHub />}
            />
            <SocialMediaLogo
              href="mailto:contatohenriquepapile@gmail.com"
              img={<Email />}
            />
            <SocialMediaLogo
              href="https://web.whatsapp.com/send/?phone=5511953553054&text=Ol%C3%A1%20Henrique,%20vim%20pela%20sua%20pagina%20henrique.papile."
              target="_blank"
              img={<Whatsapp />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
