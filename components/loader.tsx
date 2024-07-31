import React from "react";
import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center mt-8">
      <Bars
        height="80"
        width="80"
        color="#01CAFF"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
