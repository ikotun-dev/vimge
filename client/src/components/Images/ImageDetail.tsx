function ImageDetails() {
  return (
    <div className="bg-white w-[90vw] lg:w-[300px] p-2 mt-2 rounded-[8px] font-proxima  border-2 border-t-amber-500 border-b-purple-500 border-r-yellow-500 border-l-pink-400">
      <img
        className="cursor-pointer rounded-t-[6px] w-full h-[200px] object-cover hover:transform hover:scale-105 transition duration-300 ease-in-out"
        src="https://res.cloudinary.com/dbd7rcwwx/image/upload/v1716502947/Screenshot_2024-05-23_at_11.22.02_PM_qwwo2y.png"
        // alt={image.title}
      />

      {/* <h2>{image.title}</h2> */}
      <h2 className="mt-2">Command Line</h2>
    </div>
  );
}

export default ImageDetails;
