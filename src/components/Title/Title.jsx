const Title = ({ title, position }) => {
  return (
    <div style={{ textAlign: position }}>
      <h2 className="text-3xl text-black font-extrabold">{title}</h2>
      <hr className="inline-block w-[90px] border-black border-4 mt-3" />
    </div>
  );
};

export default Title;
