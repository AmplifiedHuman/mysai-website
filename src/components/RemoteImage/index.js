import { Image } from '@chakra-ui/image';
import React, { useState } from 'react';

const RemoteImage = ({ url, ...props }) => {
  const baseURL = 'https://res.cloudinary.com/mysai/image/upload';
  const lowQualityOptions = 'e_blur:2000,q_1,f_auto';
  const highQualityOptions = 'q_auto,f_auto,c_scale';

  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <Image
        src={`${baseURL}/${lowQualityOptions}/${url}`}
        {...props}
        display={isLoading ? 'block' : 'none'}
      />
      <Image
        src={`${baseURL}/${highQualityOptions}/${url}`}
        display={isLoading ? 'none' : 'block'}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </>
  );
};

export default RemoteImage;
