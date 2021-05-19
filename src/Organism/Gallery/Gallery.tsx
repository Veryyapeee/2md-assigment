import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import BoldTitle from "Atoms/BoldTitle/BoldTitle";
import PhotoLink from "Atoms/PhotoLink/PhotoLink";

import GalleryTitle from "Molecules/GalleryTitle/GalleryTitle";
import GallerySlideShow from "Molecules/GallerySlideShow/GallerySlideShow";
import GalleryFooter from "Molecules/GalleryFooter/GalleryFooter";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import GalleryArrow from "Atoms/GalleryArrow/GalleryArrow";
import GalleryImage from "Molecules/GalleryImage/GalleryImage";

import { Photo } from "Utils/Types/types";

import useGetGallery from "Api/Gallery/useGetGallery";
import FetchHandler from "HOC/FetchHandler/FetchHandler";

library.add(faAngleRight, faAngleLeft);

const variants = {
  open: { x: 0, opacity: 1, transition: { stiffness: 200 } },
  closedRight: { x: "-100%", opacity: 0 },
  closedLeft: { x: "100%", opacity: 0 },
};

const Gallery = () => {
  const { isLoading, data, error, firstPhoto } = useGetGallery();
  const [currIndex, setIndex] = useState<number>(0);
  const [currPhoto, setCurrPhoto] = useState<Photo>(firstPhoto);
  const [swipeLeft, setSwipeLeft] = useState<boolean>(false);
  const [swipeRight, setSwipeRight] = useState<boolean>(false);

  // Fetch data
  useEffect(() => {
    setCurrPhoto(firstPhoto);
  }, [data]); //eslint-disable-line

  // Next image
  const next = () => {
    setCurrPhoto(data![currIndex + 1]);
    setIndex(currIndex + 1);
    setSwipeLeft(true);
    setTimeout(() => {
      setSwipeLeft(false);
    }, 200);
  };

  // Previous image
  const prev = () => {
    setCurrPhoto(data![currIndex - 1]);
    setIndex(currIndex - 1);
    setSwipeRight(true);
    setTimeout(() => {
      setSwipeRight(false);
    }, 200);
  };

  return (
    <div className="h-full w-full overflow-x-hidden">
      <FetchHandler loading={isLoading} data={data} error={error}>
        {currPhoto && (
          <>
            <GalleryTitle>
              <BoldTitle>GALLERY</BoldTitle>
              <PhotoLink link={currPhoto.url} />
            </GalleryTitle>
            <GallerySlideShow>
              {currIndex !== 0 && (
                <GalleryArrow icon={faAngleLeft} clicked={() => prev()} />
              )}
              <motion.div
                className="w-full h-full flex justify-center items-center"
                variants={variants}
                animate={
                  swipeLeft ? "closedLeft" : swipeRight ? "closedRight" : "open"
                }
                style={{
                  visibility: swipeLeft || swipeRight ? "hidden" : "visible",
                }}
              >
                <GalleryImage image={currPhoto.download_url} />
              </motion.div>
              {currIndex !== data!.length - 1 && (
                <GalleryArrow icon={faAngleRight} clicked={() => next()} />
              )}
            </GallerySlideShow>
            <GalleryFooter author={currPhoto.author} />
          </>
        )}
      </FetchHandler>
    </div>
  );
};

export default Gallery;
