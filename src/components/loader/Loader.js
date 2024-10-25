import React, { useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Loader(props) {
  // let [loading, setLoading] = useState(true);
  return (
    <>
      <div
        className="sweet-loading"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0",
          padding: "0",
        }}
      >
        <ClimbingBoxLoader color="#4071B8" loading={true} size={15} />
      </div>
    </>
  );
}

export default Loader;
