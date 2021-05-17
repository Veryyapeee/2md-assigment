import React from "react";

import Main from "Templates/Main/Main";
import Footer from "Templates/Footer/Footer";

const MainPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;
