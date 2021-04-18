import { Image } from '@chakra-ui/image';
import React, { useState } from 'react';

const RemoteImage = ({ url, ...props }) => {
  const baseURL = 'https://res.cloudinary.com/mysai/image/upload';
  const lowQualityOptions = 'e_blur:2000,q_1,f_auto';
  const highQualityOptions = 'q_auto,f_auto,c_scale';

  const [option, setOption] = useState(lowQualityOptions);
  return (
    <Image
      src={`${baseURL}/${option}/${url}`}
      {...props}
      loading="lazy"
      onLoad={() => setOption(highQualityOptions)}
    />
  );
};

export default RemoteImage;
