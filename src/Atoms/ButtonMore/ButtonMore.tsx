import React from "react";

interface Props {
  children: string;
  clicked: () => void;
}

const ButtonMore: React.FC<Props> = ({ children, clicked }) => {
  return (
    <button
      onClick={clicked}
      className="font-medium bg-transparent w-36 text-blue-500 border border-blue-500 py-3 px-3 rounded focus:outline-none text-xs"
    >
      {children}
    </button>
  );
};

export default ButtonMore;
