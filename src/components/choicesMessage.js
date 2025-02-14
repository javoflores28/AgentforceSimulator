import "./choicesMessage.css";
import { util } from "../helpers/common";
import * as ConversationEntryUtil from "../helpers/conversationEntryUtil";
import { getConversationId } from "../services/dataProvider";
import { sendTextMessage } from "../services/messagingService";


export default function ChoicesMessage({ conversationEntry }) {
  const { content } = conversationEntry;
  const { choices } = content;

  const handleOptionClick = (optionIdentifier) => {
    // Buscar la opción seleccionada en el array de opciones
    const selectedOption = choices.optionItems.find(option => option.optionIdentifier === optionIdentifier);

    // Verificar si se encontró la opción
    if (selectedOption) {
      console.log("Opción seleccionada:", selectedOption.titleItem.title);
    } else {
      console.log("Opción no encontrada");
    }
    const conversationId = getConversationId();
		const messageId = util.generateUUID();
		const value = selectedOption.titleItem.title;
		// Optional parameters.
		let inReplyToMessageId;
		let isNewMessagingSession;
		let routingAttributes;
		let language;

		sendTextMessage(
				conversationId,
				value,
				messageId,
				inReplyToMessageId,
				isNewMessagingSession,
				routingAttributes,
				language
			)
			.then(() => {
				console.log(
					`Successfully sent a text message to conversation: ${conversationId}`
				);
			});
  };

  return (
    <div className="choicesMessageContainer">
      <div className="choicesMessageBubble">
        <p className="choicesMessageContent">{choices.text}</p>
        <div className="optionsContainer">
          {choices.optionItems.map((option) => (
            <button
              key={option.optionIdentifier}
              onClick={() => handleOptionClick(option.optionIdentifier)}
              className="optionButton"
            >
              {option.titleItem.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}