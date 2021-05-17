import React from "react";

interface Props {
  children: string;
  clicked: () => void;
}

const ButtonMore: React.FC<Props> = ({ children, clicked }) => {
  return (
    <button
      onClick={clicked}
      className="bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded focus:outline-none text-xs"
    >
      {children}
    </button>
  );
};

export default ButtonMore;
