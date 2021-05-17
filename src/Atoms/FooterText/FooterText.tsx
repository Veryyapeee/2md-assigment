import React from "react";

interface Props {
  children: any;
}

const FooterText: React.FC<Props> = ({ children }) => {
  return <span className="text-white text-xs">{children}</span>;
};

export default FooterText;
