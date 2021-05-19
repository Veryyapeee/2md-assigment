import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface Props {
  loading: boolean;
}

const Spinner: React.FC<Props> = ({ loading }) => {
  return <ClipLoader loading={loading} />;
};

export default Spinner;
