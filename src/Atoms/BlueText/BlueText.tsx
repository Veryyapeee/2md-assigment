import React from "react";
interface Props {
  children: any;
}

const BlueText: React.FC<Props> = ({ children }) => {
  return <span className="text-blue-400 text-sm">{children}</span>;
};

export default BlueText;
