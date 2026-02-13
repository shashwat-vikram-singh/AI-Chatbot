"use client";

import { useState } from "react";

export default function ChatInput({ onSend, isTyping }: { onSend: (text: string) => void; isTyping: boolean }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="chat-input">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type a message..."
        disabled={isTyping}
        aria-label="Message input"
      />
      <button onClick={handleSend} disabled={isTyping}>
        {isTyping ? "..." : "Send"}
      </button>
    </div>
  );
}
