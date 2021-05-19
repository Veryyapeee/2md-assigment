import React from "react";

interface Props {
  children: string;
}

const BoldTitle: React.FC<Props> = ({ children }) => {
  return <span className="text-blue-400 font-bold text-sm">{children}</span>;
};

export default BoldTitle;
