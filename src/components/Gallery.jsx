import React from "react";
import "./Gallery.css";

const Gallery = () => {
    // Use public paths for the photos
    const photos = [
        { id: 1, src: "/dk.jpg", alt: "Head Photo" },
        { id: 2, src: "/me.jpg", alt: "Me Photo" },
        { id: 3, src: "/goat.jpg", alt: "Photo 3" },
        { id: 3, src: "/thebest.jpg", alt: "Photo 3" },
    ];

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {photos.map(photo => (
                    <div key={photo.id} className="gallery-item">
                        <img src={photo.src} alt={photo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;