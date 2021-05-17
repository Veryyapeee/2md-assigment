import React from "react";

interface Props {
  children: string;
}

const BlueTitle: React.FC<Props> = ({ children }) => {
  return <span className="text-blue-400">{children}</span>;
};

export default BlueTitle;
