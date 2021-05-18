import React, { useEffect, useState } from "react";

import axios from "axios";

import BoldTitle from "Atoms/BoldTitle/BoldTitle";
import PhotoLink from "Atoms/PhotoLink/PhotoLink";

import GalleryTitle from "Molecules/GalleryTitle/GalleryTitle";
import GallerySlideShow from "Molecules/GallerySlideShow/GallerySlideShow";
import GalleryFooter from "Molecules/GalleryFooter/GalleryFooter";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import GalleryArrow from "Atoms/GalleryArrow/GalleryArrow";
import GalleryImage from "Atoms/GalleryImage/GalleryImage";

library.add(faAngleRight, faAngleLeft);

const Gallery = () => {
  const [data, setData] = useState<any>([]);
  const [currIndex, setIndex] = useState<number>(0);
  const [currPhoto, setCurrPhoto] = useState<any>({});

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?limit=10")
      .then((res) => {
        setData(res.data);
        setCurrPhoto(res.data[0]);
      })
      .catch((err) => console.error("Error!"));
  }, []);

  const next = () => {
    const arr = [...data];
    setCurrPhoto(arr.splice(currIndex + 1, currIndex + 1)[0]);
    setIndex(currIndex + 1);
  };

  const prev = () => {
    const arr = [...data];
    setCurrPhoto(arr.splice(currIndex - 1, currIndex - 1)[0]);
    setIndex(currIndex - 1);
  };

  return (
    <div className="h-full">
      {currPhoto.url && (
        <>
          <GalleryTitle>
            <BoldTitle>This is title</BoldTitle>
            <PhotoLink link={currPhoto.url} />
          </GalleryTitle>
          <GallerySlideShow>
            <GalleryArrow icon={faAngleLeft} clicked={() => prev()} />
            <GalleryImage image={currPhoto.download_url} />
            <GalleryArrow icon={faAngleRight} clicked={() => next()} />
          </GallerySlideShow>
          <GalleryFooter author={currPhoto.author} />
        </>
      )}
    </div>
  );
};

export default Gallery;
