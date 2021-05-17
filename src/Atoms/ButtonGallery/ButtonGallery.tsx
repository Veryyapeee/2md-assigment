import React from "react";

interface Props {
  children: string;
}

const ButtonGallery: React.FC<Props> = ({ children }) => {
  return (
    <button className="bg-blue-500 text-white  py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default ButtonGallery;
