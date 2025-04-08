import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import BlurRevealText from '../ui/text-animation/BlurRevealText';
import MouseScrollDown from '../components/MouseScrollDown/MouseScrollDown';

const Home = () => {
  return (
    <>
      <section className="h-dvh border-b-[1.5px] border-grey/30" id="home">
        <div className="container relative mx-auto max-w-7xl flex flex-col justify-center items-center h-full pl-4 pr-4">
          <BlurRevealText
            Wrapper="h1"
            className="font-bold text-3xl lg:text-5xl text-primary text-center mb-2"
            text="Olá, meu nome é Henrique"
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.5,
            }}
          />
          <BlurRevealText
            Wrapper="p"
            className="font-normal text-2xl lg:text-4xl text-secondary"
            text="Front-End Developer"
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.7,
            }}
          />
          <MouseScrollDown />
        </div>
      </section>

      <section
        className="border-b-[1.5px] border-grey/30 pt-16 pb-16 lg:pt-40 lg:pb-40"
        id="sobre"
      >
        <div className="container mx-auto max-w-7xl flex flex-col pl-4 pr-4">
          <BlurRevealText
            Wrapper="h2"
            className="text-3xl text-primary font-extrabold"
            text="sobre mim"
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.3,
            }}
          />
          <About />
        </div>
      </section>

      <section
        className="border-b-[1.5px] border-grey/30 pt-16 pb-16 lg:pt-40 lg:pb-40"
        id="experiencias"
      >
        <div className="container mx-auto max-w-7xl flex flex-col pl-4 pr-4">
          <BlurRevealText
            Wrapper="h2"
            className="text-3xl text-primary font-extrabold text-right"
            text="experiências"
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.3,
            }}
          />
          <Experience />
        </div>
      </section>

      <section
        className="border-b-[1.5px] border-grey/30 pt-16 pb-16 lg:pt-40 lg:pb-40"
        id="projetos"
      >
        <div className="container mx-auto max-w-7xl flex flex-col pl-4 pr-4">
          <BlurRevealText
            Wrapper="h2"
            className="text-3xl text-primary font-extrabold"
            text="projetos"
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.3,
            }}
          />
          <Projects />
        </div>
      </section>

      <section className="pt-16 pb-16 lg:pt-40 lg:pb-40" id="contato">
        <div className="container mx-auto max-w-7xl flex flex-col pl-4 pr-4">
          <BlurRevealText
            Wrapper="h2"
            className="text-3xl text-primary font-extrabold text-center"
            text="contato"
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.3,
            }}
          />
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Home;
