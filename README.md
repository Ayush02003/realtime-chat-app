# Real-Time Chat Application

This is a full-stack real-time one-to-one chat application built using the MERN stack and Socket.IO.  
The main focus of this project is real-time communication, socket handling, and clean state management between the client and server.

---

## 🚀 Features

- User authentication using JWT
- One-to-one real-time messaging using Socket.IO
- Messages are delivered instantly without page refresh
- Chat history is loaded per conversation
- Real-time tracking of online users
- Clear separation between REST APIs and socket logic

---

## 🧠 How It Works (Architecture)

This project uses a **hybrid approach**:

### REST APIs
REST APIs are responsible for:
- User authentication
- Fetching existing chat messages when a conversation is opened

### Socket.IO
Socket.IO is responsible for:
- Sending and receiving messages in real time
- Tracking which users are currently online

The server maintains an in-memory mapping between user IDs and active socket connections to manage real-time presence efficiently.

---

## 🛠️ Tech Stack

### Frontend
- React
- Zustand for state management
- Socket.IO Client

### Backend
- Node.js
- Express
- MongoDB
- Socket.IO
- JWT-based authentication

---

## ⚙️ Getting Started
