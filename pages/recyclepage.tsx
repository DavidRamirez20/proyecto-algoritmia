import AppLayout from "@/layouts/AppLayout";
import React, { useRef, useState } from "react";
import Webcam, { WebcamProps } from "react-webcam";
import axios from "axios";
import Image from 'next/image'

const videoConstraints: WebcamProps['videoConstraints'] = {
    width: 580,
    height: 720,
    facingMode: { exact: "environment" },
};

const RecyclePage = () => {
    const webcamRef = useRef<Webcam>(null);

    const sendImageToBackend = async() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        await axios
          .post('http://127.0.0.1:8000/main', { image: imageSrc })
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
                        onClick={sendImageToBackend}
                    >
                        <i className="fas fa-camera text-5xl"></i>
                    </button>
                </div>
                <div className="flex">
                    <p>Tu residuo va aquí</p>
                    <Image 
                        src=''
                        width={800}
                        height={800}
                        alt="Logo greenfy"
                    />
                    <p>{}</p>
                </div>
            </section>
        </AppLayout>
    );
};

export default RecyclePage;