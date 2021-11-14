import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd"; // Tenserflow model
import Webcam from "react-webcam";
// import "./camera.css";
import DrawRect from "./components/draw";

function Camera() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {
    const net = await cocossd.load();
    setInterval(() => {
      //  cocossd.ObjectDetection()
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detection
      const obj = await net.detect(video);
      console.log(obj);

      const ctx = canvasRef.current.getContext("2d");

      DrawRect(obj, ctx);
    }
  };

  useEffect(() => {
    runCoco();
  }); //

  return (
    <div className="camera-shot">
      <h1>Object Detection</h1>
      <header className="camera-header">
        <p>NOTE: Please allow this program to access your webcam.</p>
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            postion: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",

            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default Camera;
