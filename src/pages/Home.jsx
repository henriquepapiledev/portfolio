import SocialMediaLogo from '../components/SocialMediaLogo/SocialMediaLogo';
import Title from '../components/Title/Title';
import LinkedIn from '../assets/icon-linkedin.svg?react';
import GitHub from '../assets/icon-github.svg?react';
import Email from '../assets/icon-email.svg?react';
import Whatsapp from '../assets/icon-whatsapp.svg?react';

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
          <Title title="Sobre mim" position="left" />
        </div>
      </section>

      <section
        className="border-b-[1.5px] border-grey-bg pt-40 pb-40"
        id="cases"
      >
        <div className="container mx-auto flex flex-col pl-4 pr-4">
          <Title title="Cases" position="left" />
        </div>
      </section>

      <section
        className="border-b-[1.5px] border-grey-bg pt-40 pb-40"
        id="projetos"
      >
        <div className="container mx-auto flex flex-col pl-4 pr-4">
          <Title title="Projetos pessoais" position="right" />
        </div>
      </section>

      <section className="pt-40 pb-40" id="contato">
        <div className="container mx-auto flex flex-col pl-4 pr-4">
          <Title title="Contato" position="center" />
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
