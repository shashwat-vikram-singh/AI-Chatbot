"use client";

import { useEffect, useState } from "react";
import { Message } from "@/types/message";
import { fetchBotReply } from "@/lib/chatService";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("chat-history");
    if (stored) {
      setMessages(JSON.parse(stored));
    } else {
      setMessages([{
        id: crypto.randomUUID(),
        text: "Welcome! I'm your assistant. How can I help today?",
        sender: "bot",
        timestamp: new Date(),
      }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chat-history", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async (text: string) => {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const reply = await fetchBotReply(text);
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        text: reply,
        sender: "bot",
        timestamp: new Date(),
      }]);
    } catch {
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        text: "I'm still learning. Can you rephrase?",
        sender: "bot",
        timestamp: new Date(),
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return { messages, sendMessage, isTyping };
}
