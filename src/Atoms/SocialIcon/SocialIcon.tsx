import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  link: string;
  icon: IconProp;
}

const SocialIcon: React.FC<Props> = ({ link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} style={{ color: "#fff" }} />
    </a>
  );
};

export default SocialIcon;
