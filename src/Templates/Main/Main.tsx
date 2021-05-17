import GraphicSection from "Molecules/GraphicSection/GraphicSection";
import TitleSection from "Molecules/TitleSection/TitleSection";
import React from "react";

const Main = () => {
  return (
    <div className="flex flex-row w-screen h-2 justify-center align-center py-40 h-5/6 px-96 min-w-600">
      <GraphicSection />
      <TitleSection />
    </div>
  );
};

export default Main;
