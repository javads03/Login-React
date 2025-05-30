import React, { useEffect } from 'react'

const MouseHook = () => {
  
  const [mousePosition, setMousePosition ] = React.useState({x:0, y:0});

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({x: ev.clientX, y: ev.clientY})
    }
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

   
  return mousePosition;
};

export default MouseHook;
