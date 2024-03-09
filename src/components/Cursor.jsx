import { useEffect, useState } from 'react';
import './CustomCursor.css'; 
import mainMickey from '../assets/main-mickey.png';

function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorRotation, setCursorRotation] = useState(0);
  const [cursorOnPage, setCursorOnPage] = useState(false);

  useEffect(() => {
    let lastPosition = { x: 0, y: 0 };
    let intervalId;

    const handleMouseMove = (event) => {
        const { clientX: x, clientY: y } = event;

        const xDiff = x - lastPosition.x;
        // const yDiff = y - lastPosition.y;
        const rotation = xDiff * .9;

        setCursorPosition({ x, y });
        setCursorRotation(rotation);

        lastPosition = { x, y };
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
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={`custom-cursor ${cursorOnPage ? '' : 'inactive'}`} style={{ left: cursorPosition.x, top: cursorPosition.y, transform: `translate(-50%, -10%) rotate(${cursorRotation}deg)` }}>
     <img src={mainMickey} alt="cursor" />
    </div>
  );
}


export default CustomCursor;
