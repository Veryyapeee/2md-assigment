import React from "react";

interface Props {
  children: string;
}

const AuthorName: React.FC<Props> = ({ children }) => {
  return (
    <span className="block p-1 font-medium text-blue-400 text-sm border-solid border-blue-400 border-2 rounded w-1/2 text-center mt-auto">
      {children}
    </span>
  );
};

export default AuthorName;
