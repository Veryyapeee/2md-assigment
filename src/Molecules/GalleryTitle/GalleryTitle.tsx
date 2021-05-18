import React from "react";

interface Props {
  children: (string | JSX.Element)[];
}

const GalleryTitle: React.FC<Props> = ({ children }) => {
  return <div className="bg-blue-200 h-1/5 p-4 flex flex-col">{children}</div>;
};

export default GalleryTitle;
