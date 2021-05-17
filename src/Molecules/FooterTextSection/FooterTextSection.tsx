import React from "react";

interface Props {
  children: (string | JSX.Element)[];
}

const FooterTextSection: React.FC<Props> = ({ children }) => {
  return <div className="flex flex-col w-full lg:w-1/3">{children}</div>;
};

export default FooterTextSection;
