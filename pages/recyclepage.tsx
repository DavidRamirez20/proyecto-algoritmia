import AppLayout from "@/layouts/AppLayout";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam, { WebcamProps } from "react-webcam";
import axios from "axios";
import Image from 'next/image'

const videoConstraints: WebcamProps['videoConstraints'] = {
    width: 580,
    height: 720,
    facingMode: 'user',
};

const RecyclePage = () => {
    const webcamRef = useRef<Webcam>(null);

    const captureImage = useCallback(async () => {
        const imageSrc = webcamRef.current?.getScreenshot();
    
        if (imageSrc) {
            try {
                await axios.post('http://127.0.0.1:8000', { imageSrc });
                console.log('Image uploaded successfully');
            } catch (error) {
                console.error('Error uploading image', error);
            }
        }
    }, []);

    const [resultado, setResultado] = useState<string>('');

    useEffect(() => {
        const obtenerResultado = async () => {
            try {
                const response = await axios.post("http://127.0.0.1:8000/result");
                setResultado(response.data.result);
            } catch (error) {
                console.error('Error al obtener el resultado', error);
            }
        };

        obtenerResultado();
    }, []);

    return (
        <AppLayout>
            <section className="bg-stone-200 h-sc">
                <div className="flex justify-center pt-5">
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
                <div className="flex justify-center p-5">
                    <button
                        className="border border-cyan-700 rounded-full p-4"
                        onClick={captureImage}
                    >
                        <i className="fas fa-camera text-5xl"></i>
                    </button>
                </div>
                <div className="border border-emerald-700"></div>
                <div className="flex flex-col items-center bg-stone-200 shadow-">
                    <p className="className='font-semibold italic lg:text-4xl text-2xl text-gray-600 text-center m-5 pb-5">Tu residuo va en:</p>
                    <Image 
                        src='/img-reciclaje.png'
                        width={450}
                        height={200}
                        alt="Logo greenfy"
                    />
                    <p className="font-semibold italic lg:text-4xl text-2xl text-gray-600 text-center m-5 pb-5">{resultado}</p>
                </div>
            </section>
        </AppLayout>
    );
};

export default RecyclePage;