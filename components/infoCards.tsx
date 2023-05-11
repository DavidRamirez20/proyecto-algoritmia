import React from 'react';
import Image from 'next/image';

interface CardsType {
    name: string;
    image: string;
    width: number;
    height: number;
}

const InfoCards = (cardType: CardsType) => {
    return (
        <li>
            <Image
                src={cardType.image} 
                alt={cardType.name} 
                width={cardType.width}
                height={cardType.height}
            />
        </li>
    );
};

export default InfoCards;