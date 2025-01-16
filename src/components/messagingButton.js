import React, { useState } from 'react';
import './messagingButton.css';
import robotImage from './robot.png'; // Asegúrate de que la ruta sea correcta

export default function MessagingButton(props) {
  const [isAnimating, setAnimating] = useState(false);

  const handleButtonClick = () => {
    // Inicia la animación
    setAnimating(true);

    // Espera que termine la animación antes de continuar con el código adicional
    setTimeout(() => {
      // Finaliza la animación
      setAnimating(false);

      // Asegúrate de llamar al manejador de clic proporcionado en las props
      if (props.clickHandler) {
        props.clickHandler(); // Ejecuta el manejador de clic después de la animación
      }
    }, 6000); // Asegúrate de que el tiempo aquí coincida con la duración de tu animación
  }

  return (
    <>
      {isAnimating && <img src={robotImage} className="robot-animation" alt="Flying Robot" />}
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