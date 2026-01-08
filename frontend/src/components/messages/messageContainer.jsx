import Messages from "./messages";
import MessageInput from "./messageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
const messageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() =>{
    return () => setSelectedConversation(null)
  },[setSelectedConversation])
  
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <><div className="px-4 py-2 mb-2  rounded-t-lg border-b-2 border-green-300 shadow-sm">
        <span className="text-white font-medium">To: </span>{" "}
        <span className="text-white font-semibold">{selectedConversation.fullName}</span>
      </div>
      
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default messageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex
            flex-col items-center gap-2"
      >
        <p>Welcome Ayush</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
