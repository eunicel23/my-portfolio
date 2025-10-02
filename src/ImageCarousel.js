import React from "react";
import "./ImageCarousel.css";

export default function ImageCarousel({ images }) {
    // Duplicate images for smooth looping
    const loopImages = [...images, ...images];

    return (
        <div className="carousel">
            <div className="carousel-track">
                {loopImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className="carousel-img"
                    />
                ))}
            </div>
        </div>
    );
}
