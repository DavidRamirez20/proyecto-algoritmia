import AppLayout from "@/layouts/AppLayout";
import React, { useRef, useState } from "react";
import Webcam, { WebcamProps } from "react-webcam";
import axios from "axios";

const videoConstraints: WebcamProps['videoConstraints'] = {
    width: 580,
    height: 720,
    facingMode: 'user',
};

const RecyclePage = () => {
    const webcamRef = useRef<Webcam>(null);
    const [capturedImage, setCapturedImage] = useState<string | undefined>(undefined);

    const captureImage = (): void => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setCapturedImage(imageSrc);

            sendImageToBackend(imageSrc);
        }
    };

    const sendImageToBackend = (imageData: string): void => {
        axios
        .post('http://127.0.0.1:8000/main', { image: imageData })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <AppLayout>
            <section className="flex flex-col bg-stone-200 h-screen p-5">
                <div className="flex justify-center mb-5 h-3/4">
                    <Webcam
                        audio={false}
                        height={720}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={430}
                        videoConstraints={videoConstraints}
                        className='shadow-2xl rounded-3xl'
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="border border-stone-700 rounded-full p-5"
                        onClick={captureImage}
                    >
                        <i className="fas fa-light fa-camera text-5xl"></i>
                    </button>
                </div>
            </section>
        </AppLayout>
    );
};

export default RecyclePage;