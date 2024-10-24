import React, { useState } from 'react';

function ColorChange() {
  const [color, setColor] = useState('red');

  const handleMouseOver = () => {
    setColor('blue');
  };

  const handleMouseOut = () => {
    setColor('red');
  };

  const style = {
    color: isHovered ? hoverColor : 'inherit',
  };

return (
  <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
    <div style={style}>{children}</div>
  </div>
  );
}

export default ColorChange;

{/*    <{element}
    style={{ backgroundColor: colorHover, transition: 'background-color 0.5s ease' }}  
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
    >
      Hover over me!
    </div>*/}