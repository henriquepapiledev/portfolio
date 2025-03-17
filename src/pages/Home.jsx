const Home = () => {
  return (
    <>
      <section className="h-screen border-b-[1.5px] border-grey-bg" id="home">
        <div className="container mx-auto flex flex-col justify-center items-center h-full pl-4 pr-4">
          <h1 className="font-bold text-5xl text-black mb-2">
            Olá, meu nome é <span> Henrique</span>.
          </h1>
          <p className="font-DotGothic16 text-4xl text-grey">
            Front-End Developer_
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
