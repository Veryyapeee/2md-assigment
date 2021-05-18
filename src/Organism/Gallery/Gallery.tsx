import React, { useEffect, useState } from "react";

import axios from "axios";

import { motion } from "framer-motion";

import BoldTitle from "Atoms/BoldTitle/BoldTitle";
import PhotoLink from "Atoms/PhotoLink/PhotoLink";

import GalleryTitle from "Molecules/GalleryTitle/GalleryTitle";
import GallerySlideShow from "Molecules/GallerySlideShow/GallerySlideShow";
import GalleryFooter from "Molecules/GalleryFooter/GalleryFooter";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import GalleryArrow from "Atoms/GalleryArrow/GalleryArrow";
import GalleryImage from "Atoms/GalleryImage/GalleryImage";
import Spinner from "Atoms/Spinner/Spinner";

import { Photo } from "Utils/Types/types";

library.add(faAngleRight, faAngleLeft);

const variants = {
  open: { x: 0, opacity: 1, transition: { stiffness: 200 } },
  closedRight: { x: "-100%", opacity: 0 },
  closedLeft: { x: "100%", opacity: 0 },
};

const Gallery = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [currIndex, setIndex] = useState<number>(0);
  const [currPhoto, setCurrPhoto] = useState<Photo>();
  const [loading, setLoading] = useState<boolean>(false);
  const [swipeLeft, setSwipeLeft] = useState<boolean>(false);
  const [swipeRight, setSwipeRight] = useState<boolean>(false);

  // Fetch data
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://picsum.photos/v2/list?limit=10")
      .then((res) => {
        setData(res.data);
        setCurrPhoto(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error!");
        setLoading(false);
      });
  }, []);

  // Next image
  const next = () => {
    setCurrPhoto(data[currIndex + 1]);
    setIndex(currIndex + 1);
    setSwipeLeft(true);
    setTimeout(() => {
      setSwipeLeft(false);
    }, 200);
  };

  // Previous image
  const prev = () => {
    setCurrPhoto(data[currIndex - 1]);
    setIndex(currIndex - 1);
    setSwipeRight(true);
    setTimeout(() => {
      setSwipeRight(false);
    }, 200);
  };

  // Return spinner while fetching
  if (loading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Spinner loading={loading} />
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-x-hidden">
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
            {currIndex !== data.length - 1 && (
              <GalleryArrow icon={faAngleRight} clicked={() => next()} />
            )}
          </GallerySlideShow>
          <GalleryFooter author={currPhoto.author} />
        </>
      )}
    </div>
  );
};

export default Gallery;
