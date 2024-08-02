import { FaCameraRetro } from "react-icons/fa";
// import { FcOldTimeCamera } from "react-icons/fc";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import CameraButton from "../Camera/CameraButton";
import { useRecoilState } from "recoil";
import { showCameraState } from "../../atoms";
// import CameraCapture from "../Camera/CameraCapture";

const SearchPane = () => {
  const [showCamera, setShowCamera] = useRecoilState(showCameraState);

  // const { search, setSearch } = useSearch();
  return (
    <div className="flex flex-col w-full  justify-center items-center">
      <div className="flex flex-col lg:flex-row w-full  justify-center items-start space-y-2 lg:space-y-0">
        <input
          className="mr-2 rounded-[8px] p-2 w-[90vw] lg:w-[80vw] bg-white border border-teal-900 outline-none focus:border-2 focus:border-black  font-proxima"
          placeholder="Image URL...🔗 "
        />

        {/* <span> */}
        {/*   <button className="rounded-[3px] p-2 border border-teal-900 text-white font-proxima"> */}
        {/*     <FaCamera size={24} color="black" /> */}
        {/*   </button> */}
        {/* </span> */}

        <span className="space-x-3 flex justify-center items-center">
          <span className="rounded-[8px] p-2 bg-white border hover:bg-emerald-50 border-teal-950 text-white font-proxima">
            <FaCameraRetro
              size={25}
              color="black"
              onClick={() => setShowCamera(true)}
            />
          </span>
          <button className="rounded-[8px] p-2 bg-white border border-teal-950 text-white font-proxima">
            <FaRegArrowAltCircleRight size={25} color="black" />
          </button>
        </span>
      </div>

      <div className="w-full flex justify-center items-center">
        {showCamera && <CameraButton />}
        {/* {showCamera && <CameraCapture />} */}
      </div>
    </div>
  );
};

export default SearchPane;
