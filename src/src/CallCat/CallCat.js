import React, { useState, useEffect } from 'react';

const CallCat = () => {
    const [catImage, setCatImage] = useState(null);

    const fetchCatImage = async () => {
        try {
            const response = await fetch('https://cataas.com/cat?position=center&width=600&height=400');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setCatImage(imageUrl);
        } catch (error) {
            console.error('Error fetching cat image:', error);
        }
    };

    useEffect(() => {
        fetchCatImage();
        return () => {
            if (catImage) {
                URL.revokeObjectURL(catImage);
            }
        };
    }, []);

    return (
        <div>
            {catImage ? (
                <img 
                    src={catImage} 
                    alt="Random cat" 
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            ) : (
                <p>Loading cat image...</p>
            )}
        </div>
    );
};

export default CallCat;