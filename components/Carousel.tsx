import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
  
export default class CarouselMov extends Component {
   render() {
      return (
         <div className='lg:hidden flex justify-center'>
            <Carousel
               showThumbs={false}
               interval={4000}
               infiniteLoop
               stopOnHover
               autoPlay
               width={200}
               showArrows={false}
               showIndicators={false}
               showStatus={false}
            >
               <div>
                  <Image 
                     src="/resultrecog3.png" 
                     alt="image2"
                     width={1300}
                     height={2000}
                  />
               </div>
               <div>
                  <Image 
                     src="/resultrecog2.png" 
                     alt="image2"
                     width={1300}
                     height={2000}
                     className='mt-24'
                  />
               </div>
               <div>
                  <Image 
                     src="/resultrecog1.png" 
                     alt="image3"
                     width={100}
                     height={10}
                     className='mt-20'
                  />
               </div>
            </Carousel>
         </div>
      );
   }
};