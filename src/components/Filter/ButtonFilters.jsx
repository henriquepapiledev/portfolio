import { useContext, useState } from 'react';
import ProjectContext from '../../context/ProjectContext';

const ButtonFilters = () => {
  const genres = ['Todos', 'Pessoal', 'Empresa'];
  const [tabActive, setTabActive] = useState(0);
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
    <div className="flex flex-wrap gap-4">
      {genres.map((item) => (
        <button
          className={`font-bold text-2xl text-black p-3 ${
            tabActive === item ? 'active' : ''
          } cursor-pointer`}
          key={item}
          onClick={() => handleClickFilter(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilters;
