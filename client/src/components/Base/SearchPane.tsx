import { FaCamera } from "react-icons/fa";
import { FcOldTimeCamera } from "react-icons/fc";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import CameraButton from "../Camera/CameraButton";

const SearchPane = () => {
  // const { search, setSearch } = useSearch();
  return (
    <div className="flex flex-col w-full space-x-2 justify-center items-center">
      <div className="flex w-full space-x-2 justify-center items-center">
        <input
          className="rounded-[3px] p-2 w-[95%] lg:w-[80%] bg-white border border-dashed border-teal-900 outline-none focus:border-amber-800 focus:shadow-teal-800 focus:shadow-2xl  font-proxima"
          placeholder="Image URL"
        />

        {/* <span> */}
        {/*   <button className="rounded-[3px] p-2 border border-teal-900 text-white font-proxima"> */}
        {/*     <FaCamera size={24} color="black" /> */}
        {/*   </button> */}
        {/* </span> */}

        <span>
          <button className="rounded-[3px] p-2 bg-white border border-teal-950 text-white font-proxima">
            <FaRegArrowAltCircleRight size={24} color="black" />
          </button>
        </span>
      </div>

      <CameraButton />
    </div>
  );
};

export default SearchPane;
