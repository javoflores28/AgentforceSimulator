import "./conversationEntry.css";
import * as ConversationEntryUtil from "../helpers/conversationEntryUtil";

// Import children components to plug in and render.
import TextMessage from "./textMessage";
import ParticipantChange from "./participantChange";
import ChoicesMessage from "./choicesMessage"; // Asegúrate de importar el componente ChoicesMessage

export default function ConversationEntry({conversationEntry}) {

    return (
        <>
            <div className="conversationEntryContainer">
                {/* Render component for a conversation entry of type Text Message. */}
                {ConversationEntryUtil.isTextMessage(conversationEntry) && <TextMessage conversationEntry={conversationEntry} />}
                {/* Render component for a conversation entry of type Participant Change. */}
                {ConversationEntryUtil.isParticipantChangeEvent(conversationEntry) && <ParticipantChange conversationEntry={conversationEntry} />}
                {/* Render component for a conversation entry of type Choices Message. */}
                {ConversationEntryUtil.isConversationEntryChoicesMessage(conversationEntry) && <ChoicesMessage conversationEntry={conversationEntry} />}
            </div>
        </>
    );

}