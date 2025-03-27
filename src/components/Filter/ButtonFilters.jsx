import { useContext, useState } from 'react';
import ProjectContext from '../../context/ProjectContext';
import { motion } from 'framer-motion';

const ButtonFilters = () => {
  const genres = [
    { name: 'Todos', color: 'var(--color-black)' },
    { name: 'Pessoal', color: 'var(--color-black)' },
    { name: 'Empresa', color: 'var(--color-black)' },
  ];

  const [tabActive, setTabActive] = useState(0);
  const [selected, setSelected] = useState(0);
  const [formerColor, setFormerColor] = useState(genres[0].color);
  const { projects, setFilteredProject } = useContext(ProjectContext);

  const handleClickFilter = (item) => {
    setTabActive(item);
    const filteredProject = projects.filter((project) => project.type === item);

    if (item === 'Todos') {
      setFilteredProject(projects);
    } else {
      setFilteredProject(filteredProject);
    }
  };

  return (
    <div className="relative flex items-start gap-1 justify-start p-1.5">
      {genres.map(({ name, color }, index) => (
        <motion.div
          className="relative px-6 py-2 font-extralight text-base cursor-pointer"
          key={index}
          initial={{
            color: index === selected ? '#fff' : 'var(--color-black)',
          }}
          animate={{
            color: index === selected ? '#fff' : 'var(--color-black)',
          }}
          transition={{ duration: 0.3 }}
          onTap={() => {
            setFormerColor(genres[selected].color);
            setSelected(index);
          }}
          onClick={() => handleClickFilter(name)}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>{name}</span>
          {index === selected && (
            <motion.div
              className="absolute w-full h-full top-0 left-0 rounded-full"
              layoutId="selected"
              initial={{ backgroundColor: formerColor }}
              animate={{ backgroundColor: color }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ButtonFilters;
