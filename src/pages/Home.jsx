import Title from '../components/Title/Title';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <section className="h-dvh border-b-[1.5px] border-grey-bg" id="home">
        <div className="container mx-auto flex flex-col justify-center items-center h-full pl-4 pr-4">
          <h1 className="font-bold text-[2.5rem] lg:text-5xl text-black text-center mb-2">
            Olá, meu nome é Henrique
          </h1>
          <p className="font-DotGothic16 text-3xl lg:text-4xl text-grey">
            Front-End Developer_
          </p>
        </div>
      </section>

      <section
        className="border-b-[1.5px] border-grey-bg pt-16 pb-16 lg:pt-40 lg:pb-40"
        id="sobre"
      >
        <div className="container mx-auto flex flex-col pl-4 pr-4">
          <Title title="sobre mim" position="left" />
          <About />
        </div>
      </section>

      <section
        className="border-b-[1.5px] border-grey-bg pt-16 pb-16 lg:pt-40 lg:pb-40"
        id="projetos"
      >
        <div className="container mx-auto flex flex-col pl-4 pr-4">
          <Title title="projetos" position="right" />
          <Projects />
        </div>
      </section>

      <section className="pt-16 pb-16 lg:pt-40 lg:pb-40" id="contato">
        <div className="container mx-auto flex flex-col pl-4 pr-4">
          <Title title="contato" position="center" />
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Home;
