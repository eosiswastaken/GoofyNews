import { useEffect, useState } from 'react';
import './CustomCursor.css'; 
import mainMickey from '../assets/main-mickey.png'

function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setCursorPosition({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
     <img src={mainMickey} alt="cursor" />
    </div>
  );
}


export default CustomCursor;
