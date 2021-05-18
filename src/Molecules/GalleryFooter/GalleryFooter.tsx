import React from "react";

import AuthorName from "Atoms/AuthorName/AuthorName";

interface Props {
  author: string;
}

const GalleryFooter: React.FC<Props> = ({ author }) => {
  return (
    <div className="w-full p-2 h-1/5 flex justify-start">
      <AuthorName>{author}</AuthorName>
    </div>
  );
};

export default GalleryFooter;
