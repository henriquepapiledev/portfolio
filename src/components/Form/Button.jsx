import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="font-bold text-base text-primary-bg bg-primary w-full hover:opacity-70 transition-opacity duration-300 ease-out cursor-pointer rounded-md px-3 py-2"
    >
      {children}
    </button>
  );
};

export default Button;
