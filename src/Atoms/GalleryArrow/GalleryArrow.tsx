import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface Props {
  icon: IconDefinition;
  clicked: () => void;
}

const GalleryArrow: React.FC<Props> = ({ icon, clicked }) => {
  return (
    <div
      className="py-2 px-4 border-solid border-blue-400 border-2 rounded-md text-blue-400 w-1/6 cursor-pointer flex justify-center items-center"
      onClick={clicked}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default GalleryArrow;
