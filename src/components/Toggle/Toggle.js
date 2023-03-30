import { useState } from 'react';

import './Toggle.scss';

const Toggle = () => {

  const [isActive, setIsActive] = useState();

  const className = `toggle toggle--${isActive ? 'true' : 'false'}`;

  const className2 = `toggle__indicator toggle__indicator--${isActive ? 'true' : 'false'}`;

  return (
    <div
      className={className}
      onClick={() => setIsActive(prevState => !prevState)}
    >
      <div className={className2} />
    </div>
  );
};

export default Toggle;