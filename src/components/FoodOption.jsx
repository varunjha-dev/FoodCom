import { useRef } from "react";
import { info } from "../utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
    // Create a ref to reference the scrollable container
    const scrollContainerRef = useRef(null);

    // Function to scroll the container to the left
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300, // Adjust this value to control the scroll distance
                behavior: "smooth",
            });
        }
    };

    // Function to scroll the container to the right
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300, // Adjust this value to control the scroll distance
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-[80%] container mx-auto mt-20 relative">
            <h1 className='font-extrabold text-2xl font-serif'>What's on your mind?</h1>

            {/* Scrolling buttons */}
            <div className="absolute top-0 right-0 flex space-x-">
                <button
                    onClick={scrollLeft}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
                >
                    &larr; {/* Left arrow character */}
                </button>
                <button
                    onClick={scrollRight}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
                >
                    &rarr; {/* Right arrow character */}
                </button>
            </div>

            {/* Scrollable food carousel */}
            <div
                ref={scrollContainerRef}
                className="grid grid-flow-col auto-cols-max gap-x-10 overflow-x-scroll mt-5 scrollbar-hide"
            >
                {info && info.map((foodData) => (
                    <FoodCard key={foodData.id} foodData={foodData} />
                ))}
            </div>
        </div>
    );
}