const ProjectCard = ({ id, title, description, image, url, categories }) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="bg-grey-bg p-3 pt-16 pl-10 pr-10 rounded-md">
        <img
          className="w-full rounded-md border-4 border-gray-400"
          src={image}
          alt={title}
        />
        <ul className="flex flex-wrap justify-end gap-1.5 mt-10">
          {categories.map((category, index) => (
            <li
              key={index}
              className="bg-white font-bold text-xs text-black rounded-full p-3 pt-1 pb-1"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-3 pb-3">
        <h3 className="font-extrabold text-xl text-black mb-2">{title}</h3>
        <p className="font-light text-base/6 text-grey">{description}</p>
        <a
          className="link inline-block font-bold text-base text-black mt-4"
          href={url}
          target="_blank"
        >
          Ver projeto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
