import { useRef, useState } from "react";

const CameraButton: React.FC = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);

  const startCamera = async () => {
    try {
      setShowCamera(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
    }
  };

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        setPhoto(canvas.toDataURL("image/png"));
      }
    }
  };

  return (
    <div>
      {!showCamera && (
        <button
          onClick={startCamera}
          className="font-proxima border py-1 px-6 m-3 rounded-[3px] bg-teal-800 text-white"
        >
          Start Camera 📸
        </button>
      )}

      {showCamera && (
        <div style={{ display: "flex" }}>
          <video
            className="w-[80vw] lg:w-[700px] my-6 h-[50vh]"
            ref={videoRef}
            autoPlay
            style={{
              border: "1px dashed teal",
              borderRadius: "5px",
            }}
          ></video>
          {photo && (
            <div style={{ marginLeft: "20px" }}>
              <img
                src={photo}
                alt="Captured"
                style={{
                  width: "300px",
                  height: "auto",
                  border: "1px solid black",
                }}
              />
            </div>
          )}
        </div>
      )}
      <button
        onClick={takePicture}
        className="font-proxima border py-1 px-6 m-3 rounded-[3px] textt-teal-800 bg-white border-teal-800"
      >
        Take Picture
      </button>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
};

export default CameraButton;
