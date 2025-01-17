import React, { useState } from 'react';
import './messagingButton.css';
import robotImage from './robot.png'; // Asegúrate de que la ruta sea correcta

export default function MessagingButton(props) {
  const [isAnimating, setAnimating] = useState(false);

  const handleButtonClick = () => {
    setAnimating(true); // Inicia la animación

    setTimeout(() => {
      setAnimating(false); // Finaliza la animación
      if (props.clickHandler) {
        props.clickHandler(); // Ejecuta el manejador de clic después de la animación
      }
    }, 4000); // Asegura que este tiempo coincida con la duración de la animación
  }

  return (
    <>
      <img src={robotImage} className={`robot-image ${isAnimating ? 'robot-animation' : ''}`} alt="Flying Robot" />
      <button
        className="messagingButton"
        onClick={handleButtonClick}
        disabled={props.disableButton}
      >
        Let's Chat
        {props.showSpinner && <span className="messagingButtonLoadingUI loadingBalls"></span>}
      </button>
    </>
  );
}


/*import './messagingButton.css';
import robotImage from './robot.png'; // Asegúrate de que la ruta sea correcta
// {props.showSpinner && <span className="messagingButtonLoadingUI loadingBalls"></span>}
export default function MessagingButton(props) {
    
    return (
        <>
            <button
                className="messagingButton"
                onClick={props.clickHandler}
                disabled={props.disableButton}>
                    Let's Chat
                {props.showAnimation && <img src={robotImage} className="robot-animation" alt="Flying Robot" />}
                
            </button>
        </>
    );
}*/