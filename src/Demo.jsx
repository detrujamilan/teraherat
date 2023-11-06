import React from "react";
import logo from "./assets/orginal_red.png";
const h = 914;
const w = 1920;
const getRelativeSize = (baseFontSize) => {
  return (window.innerHeight * baseFontSize) / h;
};
function Demo() {
  const fontSize = getRelativeSize(16);
  // const fontSize = 16
  return (
    <div className="">
      {new Array(37).fill(<p style={{ fontSize }}>Hello</p>)}
      <h4 className=" font-calibriBold" style={{ fontSize }}>
        RADIOGRAPHIC EXAMINATION REPORT
      </h4>
    </div>
  );
}

export default Demo;
