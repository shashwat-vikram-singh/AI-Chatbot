import { Message } from "@/types/message";

export default function MessageBubble({ message }: { message: Message }) {
  return (
    <div className={`bubble-wrapper ${message.sender}`}>
      <div className="bubble">
        <p>{message.text}</p>
        <span className="timestamp">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}
