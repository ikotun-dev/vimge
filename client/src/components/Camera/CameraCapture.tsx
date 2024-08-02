import { useEffect, useRef, useState } from "react";

const CameraCapture: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    // Function to access the camera
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { exact: "environment" }, // Use the back camera
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL("image/png"));
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <video
        className="w-auto my-6 h-auto"
        ref={videoRef}
        autoPlay
        style={{
          border: "1px solid teal",
          borderRadius: "8px",
          width: "100%", // Ensure it fits within the container
          maxWidth: "600px", // Optional: limit the maximum width
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
      <button onClick={capturePhoto}>Capture Photo</button>
    </div>
  );
};

export default CameraCapture;
