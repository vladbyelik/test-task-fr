import React, { useState } from 'react';

import classModifier from '../../utils/classModifier';

import './Toggle.scss';

const Toggle = () => {
  const [isActive, setIsActive] = useState();

  return (
    <div 
      onClick={() => setIsActive(prevState => !prevState)}
      className={classModifier('toggle', isActive && 'active')}
    >
      <div className={classModifier('toggle__indicator', isActive && 'active')} />
    </div>
  );
};

export default Toggle;