import React from "react";

interface Props {
  children: string;
}

const ButtonGallery: React.FC<Props> = ({ children }) => {
  return (
    <button className="text-xs bg-blue-500 text-white  py-2 px-4 rounded focus:outline-none">
      {children}
    </button>
  );
};

export default ButtonGallery;
