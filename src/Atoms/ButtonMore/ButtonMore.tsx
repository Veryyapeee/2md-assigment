import React from "react";

interface Props {
  children: string;
}

const ButtonMore: React.FC<Props> = ({ children }) => {
  return (
    <button className="bg-transparent text-blue-500 border border-blue-500  py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default ButtonMore;
