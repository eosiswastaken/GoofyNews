import { useEffect, useState } from 'react';
import './CustomCursor.css'; 
import mainMickey from '../assets/main-mickey.png';

function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorOnPage, setCursorOnPage] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setCursorPosition({ x, y });
    };

    const handleMouseEnter = () => {
      setCursorOnPage(true);
    };

    const handleMouseLeave = () => {
      setCursorOnPage(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`custom-cursor ${cursorOnPage ? '' : 'inactive'}`} style={{ left: cursorPosition.x, top: cursorPosition.y }}>
     <img src={mainMickey} alt="cursor" />
    </div>
  );
}


export default CustomCursor;
