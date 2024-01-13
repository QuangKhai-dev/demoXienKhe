import React from 'react';
import { Button } from '@nextui-org/react';

const Button = (text, link) => {
  return (
    <Button color="primary bg-red-500" variant="shadow">
      <a href={link}>{text}</a>
    </Button>
  );
};

export default Button;
