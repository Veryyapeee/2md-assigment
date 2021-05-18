import React from "react";

interface Props {
  children: any;
}

const GallerySlideShow: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-3/5 p-2 flex flex-row items-center justify-center gap-2">
      {children}
    </div>
  );
};

export default GallerySlideShow;
