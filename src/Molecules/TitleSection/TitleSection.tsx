import React from "react";

import BlueTitle from "Atoms/BlueTitle/BlueTitle";
import ButtonGallery from "Atoms/ButtonGallery/ButtonGallery";
import ButtonMore from "Atoms/ButtonMore/ButtonMore";
import BlueText from "Atoms/BlueText/BlueText";

const TitleSection = () => {
  return (
    <div className="bg-blue-100 w-full">
      <BlueTitle>This is main page title.</BlueTitle>
      <BlueText>Lorem ipsum</BlueText>
      <ButtonGallery>SHOW GALLERY</ButtonGallery>
      <ButtonMore>MORE</ButtonMore>
    </div>
  );
};

export default TitleSection;
