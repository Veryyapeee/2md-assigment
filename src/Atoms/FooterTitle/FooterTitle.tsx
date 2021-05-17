import React from "react";

interface Props {
  children: string;
}

const FooterTitle: React.FC<Props> = ({ children }) => {
  return (
    <span className="text-white pb-5 font-medium text-sm uppercase">
      {children}
    </span>
  );
};

export default FooterTitle;
