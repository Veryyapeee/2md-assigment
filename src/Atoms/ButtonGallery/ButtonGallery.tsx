import React from "react";

interface Props {
  children: string;
  clicked: () => void;
}

const ButtonGallery: React.FC<Props> = ({ children, clicked }) => {
  return (
    <button
      onClick={clicked}
      className="font-medium text-xs bg-blue-500 text-white w-36 py-3 px-3 rounded focus:outline-none"
    >
      {children}
    </button>
  );
};

export default ButtonGallery;
