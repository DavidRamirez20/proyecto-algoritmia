import AppLayout from "@/layouts/AppLayout";
import React, { useRef, useCallback } from "react";
import Webcam, { WebcamProps } from "react-webcam";

const videoConstraints: WebcamProps['videoConstraints'] = {
    width: 580,
    height: 720,
    facingMode: { exact: "environment" },
};

const RecyclePage: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        console.log(imageSrc);
    }, []);

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
            <div className="flex justify-center mb-5 h-1/4">
                <button onClick={capture}>¿Donde botar?</button>
            </div>
        </section>
    </AppLayout>
  );
};

export default RecyclePage;