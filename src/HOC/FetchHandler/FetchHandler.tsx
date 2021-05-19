import React from "react";

import Spinner from "Atoms/Spinner/Spinner";

interface Props {
  children: any;
  loading: boolean;
  error: Error | null;
  data: any;
}

const FetchHandler: React.FC<Props> = ({ loading, error, data, children }) => {
  if (error) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        Ooops, something went wrong :/
      </div>
    );
  }
  if (loading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Spinner loading={loading} />
      </div>
    );
  }
  if (!data) {
    <div className="h-full w-full flex justify-center items-center">
      No data provided
    </div>;
  }
  if (data) {
    return children;
  }
};

export default FetchHandler;
