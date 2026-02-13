"use client";

import { useChat } from "@/hooks/useChat";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { useEffect, useRef, useState } from "react";

export default function ChatLayout() {
  const { messages, sendMessage, isTyping } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);
  const [dark, setDark] = useState(false);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Proper dark mode handling
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <span>Chat Assistant</span>
        <button
          className="theme-toggle"
          onClick={() => setDark((prev) => !prev)}
          aria-label="Toggle theme"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Messages */}
      <div className="chat-window">
        <MessageList messages={messages} isTyping={isTyping} />
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} isTyping={isTyping} />
    </div>
  );
}