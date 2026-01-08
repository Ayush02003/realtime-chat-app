import useGetMessages from "../../hooks/useGetMessages";
import Message from "./message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useEffect } from "react";
import { useRef } from "react";
import { socket } from "../../socket";
import useConversation from "../../zustand/useConversation";
const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  const { setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      if (
        newMessage.senderId === selectedConversation?._id ||
        newMessage.receiverId === selectedConversation?._id
      ) {
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    socket.on("newMessage", handleNewMessage);

    return () => socket.off("newMessage", handleNewMessage);
  }, [selectedConversation, setMessages]);
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
