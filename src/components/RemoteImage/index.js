import { Image as ChakraImage } from '@chakra-ui/image';
import React, { useEffect, useState } from 'react';

const RemoteImage = ({ url, ...props }) => {
  const baseURL = 'https://res.cloudinary.com/mysai/image/upload';
  const highQualityURL = `${baseURL}/q_auto,f_auto,c_scale/${url}`;
  const lowQualityURL = `${baseURL}/e_blur:2000,q_1,f_auto/${url}`;

  const [currentSrc, updateSrc] = useState(lowQualityURL);

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = highQualityURL;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      updateSrc(highQualityURL);
    };
  }, [highQualityURL]);

  return (
    <>
      <ChakraImage src={currentSrc} loading="lazy" {...props} />
    </>
  );
};

export default RemoteImage;
