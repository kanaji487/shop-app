import { useState } from "react";


export default function Carousel(){
const slides = [
    {
        url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1500440148957-7651acaa127f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1535940360221-641a69c43bac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80'
    }
];
 
const [currentIndex, setCurrentIndex] = useState(0)

const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
}

const nextSlide = () => {
    const isFirstSlide = currentIndex === slides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
}

    const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
}

    return(
        <div className="max-w-[1750px] h-[350px] w-full m-auto py-4 px-4 relative">
            <div 
            style={{ backgroundImage: `url(${slides[currentIndex].url})`}} 
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
            </div>
            {/* Left arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={prevSlide}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

        </div>
            {/* Right arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={nextSlide}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
        </div>
        {/* Image page */}
        <div className="flex justify-center py-3">
            {slides.map((slides, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
</svg>
                </div>
            ))}
        </div>
        </div>
    )
}