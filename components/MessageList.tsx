import { Message } from "@/types/message";
import MessageBubble from "./MessageBubble";

export default function MessageList({ messages, isTyping }: { messages: Message[]; isTyping: boolean }) {
  return (
    <div aria-live="polite">
      {messages.map(msg => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {isTyping && (
  <div className="typing">
    <span></span>
    <span></span>
    <span></span>
  </div>
)}
    </div>
  );
}
