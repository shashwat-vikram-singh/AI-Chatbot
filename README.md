# Simple Chatbot UI  
Frontend Internship Assignment  

A clean, responsive chatbot interface built with Next.js and TypeScript.  
This project focuses on frontend architecture, UI polish, UX quality, and clean separation of concerns.

---

## 🚀 Live Overview

This chatbot interface allows users to:
- Send messages
- Receive rule-based or API-generated replies
- View conversation history
- Experience smooth UI transitions and responsive design

The implementation emphasizes reusable components, proper state management, and resilient API handling.

---

## 🛠 Tech Stack

- Next.js (App Router)
- React (Functional Components + Hooks)
- TypeScript
- Custom CSS (Responsive + Dark Mode)
- OpenRouter API (Optional Dynamic Replies)

---

## ✨ Features

### Core Features
- Message list displaying conversation history
- Input field with Enter key + button support
- Auto-scroll to latest message
- Clear visual distinction between user and bot messages
- Default welcome message on load
- Rule-based fallback responses

### UX & Design
- Clean and modern UI
- Fully responsive layout (desktop + mobile)
- Subtle message animations
- Hover and focus micro-interactions
- Smooth dark/light mode toggle
- Accessible inputs (aria-labels, live regions)

### Bonus Enhancements
- Typing indicator during bot response
- Disabled input during API latency
- LocalStorage persistence of chat history
- Clean API abstraction layer
- Graceful fallback if API fails
- Error-resilient architecture

---

## 🧠 Architecture & Approach

### 1. Separation of Concerns

The project separates responsibilities clearly:

- **UI Components**  
  - `ChatLayout`
  - `MessageList`
  - `MessageBubble`
  - `ChatInput`

- **State Management**  
  - `useChat` custom hook manages:
    - Message state
    - Typing state
    - Persistence logic
    - API interaction

- **Data Fetching Layer**
  - `chatService.ts` abstracts API communication.
  - The UI does not directly depend on API implementation details.

This makes the system modular, maintainable, and easy to extend.

---

### 2. Resilience & Error Handling

- API calls are wrapped in `try/catch`.
- If the API fails or rate limits are hit:
  - The system falls back to rule-based responses.
- The input is disabled during API requests to prevent excessive calls.

This ensures a consistent and stable user experience.

---

### 3. UX Considerations

- Smooth auto-scroll behavior
- Animated message entry
- Responsive container scaling
- Subtle color palette for readability
- Dark mode implemented via body-level class toggle
- Accessible labels and live regions

The goal was to create a simple product that feels intentional and polished rather than template-based.

---

## 📦 Setup Instructions

1. Clone the repository:

```bash
git clone <[your-repo-url](https://github.com/shashwat-vikram-singh/AI-Chatbot)>
cd chatbot-ui
