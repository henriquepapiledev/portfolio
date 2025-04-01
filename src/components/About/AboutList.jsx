import React from 'react';

const AboutList = ({ title, experiences }) => {
  return (
    <div className="p-4 pl-5 pr-5 border-[1.5px] border-secondary/30 rounded-md">
      <div className="h-full border-l-2 border-secondary/30 pt-2.5 pb-2.5 pl-6">
        <h2 className="font-extrabold text-lg text-primary mb-2">{title}</h2>
        <ul className="list-none space-y-1">
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="font-extralight text-base text-secondary"
            >
              {experience}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutList;
