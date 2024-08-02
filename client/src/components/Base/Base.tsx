import { Link } from "react-router-dom";
import Header from "./Header.js";
import SearchPane from "./SearchPane.js";

function Base() {
  return (
    <div className="m-2">
      <div className="my-3 bg-teal-900">
        <Header />
      </div>

      <div className="py-8 ">
        <SearchPane />
      </div>
    </div>
  );
}

export default Base;