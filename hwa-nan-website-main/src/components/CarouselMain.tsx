// import './CarouselStyle.css'

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Campus from '../assets/campus-life.png'
import History from '../assets/history.png'
import School from '../assets/school-pic.png'
import Class from '../assets/class-of.png'
import School2 from '../assets/more-school.png'
import { useState } from 'react'

// function CarouselMain() {
//   return (
//       <div className='CarouselMain'>
//           <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
//               <div>
//                   <img src={Campus} alt='/' />
//                   {/* <p className="legend">Legend 1</p> */}
//               </div>
//               <div>
//                   <img src={History} alt='/' />
//                   {/* <p className="legend">Legend 2</p> */}
//               </div>
//               <div>
//                   <img src={School} alt='/' />
//                   {/* <p className="legend">Legend 3</p> */}
//               </div>
//           </Carousel>
//       </div>


//   )
// }

const MultiCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: 'https://source.unsplash.com/random',
      title: 'Card 1',
      description: 'Info which directs to the other page.',
    },
    {
      image: 'https://source.unsplash.com/random',
      title: 'Card 2',
      description: 'Info which directs to the other page.',
    },
    {
      image: 'https://source.unsplash.com/random',
      title: 'Card 3',
      description: 'Info which directs to the other page.',
    },
    {
      image: 'https://source.unsplash.com/random',
      title: 'Card 4',
      description: 'Info which directs to the other page.',
    },
    {
      image: 'https://source.unsplash.com/random',
      title: 'Card 5',
      description: 'Info which directs to the other page.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };
if(currentIndex>cards.length-3) {
  console.log(currentIndex)
  setCurrentIndex(0)
  console.log("hi")
}
  return (
    <div className="mt-2">
      <div className="w-11/12 ">
        <div className="relative">
          
          <div className="flex space-x-4">
            {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
              <div className="flex-none w-1/3 p-4 bg-white rounded-lg shadow-md" key={index}>
                <img className="w-full h-32 object-cover mb-4 rounded-lg" src={card.image} alt="Card" />
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 relative  bottom-44 ">
            <button className="w-6 h-6 rounded-full bg-gray-300  relative right-4" onClick={handlePrev}>&lt;</button>
            <button className="w-6 h-6 rounded-full bg-gray-300 relative left-10" onClick={handleNext}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;