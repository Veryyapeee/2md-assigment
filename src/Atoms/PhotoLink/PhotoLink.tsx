import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faGlobeAmericas);

interface Props {
  link: string;
}

const PhotoLink: React.FC<Props> = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-blue-400 font-medium text-xs flex flex-row gap-2 items-center content-center"
    >
      <FontAwesomeIcon icon={faGlobeAmericas} />
      Source
    </a>
  );
};

export default PhotoLink;
