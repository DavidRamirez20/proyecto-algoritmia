import React from 'react';
import Image from 'next/image';

interface CardsType {
    name: string;
    detail: string;
    image: string;
    width: number;
    height: number;
    backGround: string;
    backColor: number;
}

const InfoCards = (cardType: CardsType) => {
    return (
        <li className='m-5 bg-sky-50 shadow-md shadow-sky-100 rounded-lg hover:cursor-pointer hover:scale-[1.02] w-80 flex flex-col items-center justify-center'>
            <div className='flex p-8'>
                <Image 
                    src={cardType.image} 
                    alt={cardType.name} 
                    width={cardType.width}
                    height={cardType.height}
                />
            </div>
            <span className="flex text-gray-700 font-bold text-xl justify-center text-center">{cardType.name}</span>
            <span className="flex text-gray-600 font-semibold text-xl justify-center p-5 text-center">{cardType.detail}</span>
        </li>
    );
};

export default InfoCards;