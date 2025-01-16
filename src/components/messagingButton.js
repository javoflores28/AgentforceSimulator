import React, { useState } from 'react';
import './messagingButton.css';
import robotImage from './robot.png'; // Asegúrate de que la ruta sea correcta

export default function MessagingButton(props) {
  const [isAnimating, setAnimating] = useState(false);

  const handleButtonClick = () => {
    setAnimating(true); // Inicia la animación

    // Espera que termine la animación antes de continuar con el código adicional
    setTimeout(() => {
      setAnimating(false); // Finaliza la animación
      if (props.clickHandler) {
        props.clickHandler(); // Ejecuta el manejador de clic después de la animación
      }
    }, 4000); // Duración de la animación de 4 segundos
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
 
export default function MessagingButton(props) {
    
    return (
        <>
            <button
                className="messagingButton"
                onClick={props.clickHandler}
                disabled={props.disableButton}>
                    Let's Chat
                {props.showSpinner && <span className="messagingButtonLoadingUI loadingBalls"></span>}
            </button>
        </>
    );
}

*/