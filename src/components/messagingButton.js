import './messagingButton.css';
import robotImage from './robot.png'; // Asegúrate de que la ruta sea correcta
 
export default function MessagingButton(props) {
    
    return (
        <>
            <button
                className="messagingButton"
                onClick={props.clickHandler}
                disabled={props.disableButton}>
                    Let's Chat
                {props.showSpinner && <span className="messagingButtonLoadingUI loadingBalls"></span>}
                {props.showAnimation && <img src={robotImage} className="robot-animation" alt="Flying Robot" />}
            </button>
        </>
    );
}