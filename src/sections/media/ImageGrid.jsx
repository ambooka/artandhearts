import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

import { storage } from 'src/firebase/firebase';

const ImageGrid = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = await ref(storage, 'Images');
      const imageList = await listAll(imagesRef);
      const urls = await Promise.all(imageList.items.map((imageRef) => getDownloadURL(imageRef)));
      setImageUrls(urls);
    };

    fetchImages();
  }, []);

  return (
    <div className="image-grid">
      {imageUrls.map((url, index) => (
        <div key={index} className="image-item">
          <img src={url} alt={`img-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
