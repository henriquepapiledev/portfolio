const ProjectCard = ({ id, title, image, url, background, year, type }) => {
  return (
    <div
      id={id}
      className="opacity-container-child group h-fit w-full cursor-pointer even:sm:mt-14 transition-opacity duration-300 ease-out"
    >
      <a className="h-fit w-full" target="_blank" href={url}>
        <span>
          <div
            className="aspect-[3/2] w-full overflow-hidden rounded-3xl"
            style={{ backgroundColor: background }}
          >
            <img
              alt={title}
              className="aspect-[3/2] w-full object-cover transition duration-300 group-hover:scale-[1.015]"
              src={image}
              style={{ color: 'transparent' }}
            />
          </div>
        </span>
        <span>
          <div className="mt-4 space-y-2">
            <h5 className="font-extrabold text-lg text-black">{title}</h5>
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-2">
                <p className="font-extralight text-base text-black">{type}</p>
              </div>
              <p className="font-extralight text-base text-black">{year}</p>
            </div>
          </div>
        </span>
      </a>
    </div>
  );
};

export default ProjectCard;
