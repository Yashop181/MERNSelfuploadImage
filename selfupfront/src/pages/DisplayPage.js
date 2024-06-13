import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/images');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Uploaded Images</h2>
      <div className='showingImage'>
        {images.map((image) => (
           <img src={`http://localhost:5000${image.path}`} alt={image.name} key={image._id} />
        ))}
      </div>
    </div>
  );
};

export default DisplayPage;
