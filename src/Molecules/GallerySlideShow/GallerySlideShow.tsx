import React from "react";

interface Props {
  children: JSX.Element[];
}

const GallerySlideShow: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-3/5 p-2 flex flex-row items-center justify-center gap-1">
      {children}
    </div>
  );
};

export default GallerySlideShow;
