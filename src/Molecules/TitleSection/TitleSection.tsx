import React, { useState } from "react";

import BlueTitle from "Atoms/BlueTitle/BlueTitle";
import ButtonGallery from "Atoms/ButtonGallery/ButtonGallery";
import ButtonMore from "Atoms/ButtonMore/ButtonMore";
import BlueText from "Atoms/BlueText/BlueText";

import Modal from "Molecules/Modal/Modal";

// Normally it would be fetched from API or written by copywriter
const sentence: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget porttitor velit. Etiam vehicula ipsum sit amet lorem commodo, in vulputate augue finibus. Proin auctor nunc placerat, condimentum lorem vel, placerat lorem. Suspendisse maximus leo nibh, eget semper velit rutrum ac. Integer hendrerit, nibh sit amet eleifend aliquet, augue ex aliquet leo, ac vulputate nisi purus ut tortor. Integer eget nisl sit amet tortor elementum tristique et id tellus. Mauris gravida lacus risus, vel fringilla augue dignissim suscipit. Pellentesque lacinia felis dolor, quis aliquam diam semper at. Maecenas sollicitudin ultrices justo, sed rutrum enim efficitur ut.";

const TitleSection = () => {
  const [more, setMore] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal show={modal} onClose={() => setModal(false)}>
        Test
      </Modal>
      <div className="bg-blue-100 w-full flex flex-col py-8 sm:py-20 px-12 gap-2 lg:content-center">
        <BlueTitle>This is main page title.</BlueTitle>
        <BlueText>{more ? sentence : `${sentence.slice(0, 50)}...`}</BlueText>
        <div className="flex flex-row gap-4 w-full justify-start">
          <ButtonMore clicked={() => setMore(!more)}>MORE</ButtonMore>
          <ButtonGallery clicked={() => setModal(true)}>
            SHOW GALLERY
          </ButtonGallery>
        </div>
      </div>
    </>
  );
};

export default TitleSection;
