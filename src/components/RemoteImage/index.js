import { Image } from '@chakra-ui/image';
import React from 'react';

const RemoteImage = ({ url, ...props }) => {
  const baseURL = 'https://res.cloudinary.com/mysai/image/upload';
  return <Image src={`${baseURL}/q_auto,f_auto,c_scale/${url}`} {...props} />;
};

export default RemoteImage;
