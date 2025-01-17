import React, { useState } from 'react';
import './messagingButton.css';
import robotImage from './robot.png'; // Ensure the path to the image is correct

export default function MessagingButton(props) {
  const [isAnimating, setAnimating] = useState(false);

  const handleButtonClick = () => {
    setAnimating(true); // Starts the animation
    setTimeout(() => {
      setAnimating(false); // Ends the animation
      if (props.clickHandler) {
        props.clickHandler(); // Executes the click handler after the animation
      }
    }, 4000); // This duration should match your animation duration
  };

  return (
    <>
      <img src={robotImage} className={`robot-image ${isAnimating ? 'robot-animation' : ''}`} alt="Flying Robot" />
      <button className="messagingButton" onClick={handleButtonClick} disabled={props.disableButton}>
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