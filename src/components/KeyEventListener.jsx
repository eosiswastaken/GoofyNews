import { useEffect, useState } from 'react';
import './KeyEventListener.css';

function KeyEventListener() {

    const [touches, setTouches] = useState([]);
    const [secretFound, setSecretFound] = useState(false);
    const secretSequence = 'goofy';

    useEffect(() => {
        const handleKeyDown = (event) => {
        //   console.log('Touche enfoncée :', event.key);
          const newTouches = [...touches, event.key]; // Utilisez un nouvel array pour éviter les effets secondaires
          setTouches(newTouches);
      
          const touchesString = newTouches.join('');
          if (touchesString.toLowerCase().includes(secretSequence)) {
            setSecretFound(true);
            console.log('GofyNews secret code detected');
            setTouches([]); // Réinitialise les touches après avoir détecté la séquence
          }
        };
      
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [touches]);

      

      if (secretFound) {
        return (
            <div className="secret-container">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjFtcHp0bzVjZ2gyN3RiOTV3Nmd0eWxrbmN6bzBnc2ZzN2Uyc2JpMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i3N0mvYxJy7Yn1oYXo/giphy.gif" alt="GoofyNews secret code detected" />
            </div>
            

        );
    } else {
        return null;
    }

}

export default KeyEventListener;