import React from 'react';

const AboutList = ({ title, experiences }) => {
  return (
    <div className="bg-white p-4 pl-5 pr-5 border-[1.5px] border-grey-bg rounded-md">
      <div className="h-full border-l-2 border-grey/50 pt-2.5 pb-2.5 pl-6">
        <h2 className="font-extrabold text-lg text-black mb-2">{title}</h2>
        <ul className="list-none space-y-1">
          {experiences.map((experience, index) => (
            <li key={index} className="font-extralight text-base text-black">
              {experience}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutList;
