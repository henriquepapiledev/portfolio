import Title from '../components/Title/Title';

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
        </div>
      </section>
    </>
  );
};

export default Home;
