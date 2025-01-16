import './messagingButton.css';
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
}