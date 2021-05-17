import React from "react";

import GraphicSection from "Molecules/GraphicSection/GraphicSection";
import TitleSection from "Molecules/TitleSection/TitleSection";
/* import Hexagon from "Atoms/Hexagon/Hexagon"; */

const Main = () => {
  return (
    <div
      className="w-full h-full flex justify-center content-center h-5/7 content-center"
      style={{ minHeight: "600px" }}
    >
      <div className="flex justify-center content-center flex-col h-3/4 w-1/2 content-center">
        <GraphicSection />
        <TitleSection />
        {/* <Hexagon /> */}
      </div>
    </div>
  );
};

export default Main;
