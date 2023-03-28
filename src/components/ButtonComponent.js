import React from 'react';
import {Button} from 'native-base';

export default ButtonComponent = props => {
  var {text} = props;
  return <Button {...props}>{text}</Button>;
};
