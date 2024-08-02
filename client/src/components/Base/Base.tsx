// import { Link } from "react-router-dom";
import Header from "./Header.js";
import "./Header.css";

import SearchPane from "./SearchPane.js";
import ImageDetails from "../Images/ImageDetail.js";

function Base() {
  return (
    <div className="bg-gradient-to-r from-cyan-700 to-[#f5f5f5] min-h-screen w-full flex flex-col  items-center p-2">
      <div className="header-text rounded-[20px] my-3 border border-black w-[10rem] bg-white">
        <Header />
      </div>

      <div className="py-8 input-fields">
        <SearchPane />
      </div>

      <div className=" flex lg:space-x-4 flex-wrap justify-center  items-center">
        <ImageDetails />
        <ImageDetails />

        <ImageDetails />

        <ImageDetails />
        <ImageDetails />
      </div>
    </div>
  );
}

export default Base;
