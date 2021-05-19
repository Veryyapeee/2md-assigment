import React from "react";

interface Props {
  image: string;
}

const GalleryImage: React.FC<Props> = ({ image }) => {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default GalleryImage;
