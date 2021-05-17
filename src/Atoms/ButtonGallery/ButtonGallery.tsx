import React from "react";

interface Props {
  children: string;
}

const ButtonGallery: React.FC<Props> = ({ children }) => {
  return (
    <button className="font-medium text-xs bg-blue-500 text-white w-36 py-3 px-3 rounded focus:outline-none">
      {children}
    </button>
  );
};

export default ButtonGallery;
