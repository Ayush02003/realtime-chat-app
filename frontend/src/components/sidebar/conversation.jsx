import useConversation from "../../zustand/useConversation";
import useOnlineUsers from "../../zustand/useOnlineUsers";

const conversation = ({conversation,lastIdx,emoji}) => {
  const {selectedConversation, setSelectedConversation}= useConversation();
  const onlineUsers = useOnlineUsers((state)=>state.onlineUsers);
  const isSelected = selectedConversation ?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id)
    return (
      <>
        <div className={`flex gap-2 items-center hover:bg-green-700 transition-colors duration-200 ease-in-out rounded-lg px-3 py-2 cursor-pointer
          ${isSelected ? "bg-green-700" : ""}`}
          onClick={()=>{setSelectedConversation(conversation)}}>
          <div className={`avatar ${isOnline ? "online" : "offline"}`}>
            <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img
                src={conversation.profilePic}
                alt="User avatar"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-200 text-sm pl-2">{conversation.fullName}</p>
              <span className="text-lg">{emoji}</span>
            </div>
            {/* <p className="text-gray-300 text-xs truncate pl-2">
              Last message preview goes here...
            </p> */}
          </div>
        </div>
        {!lastIdx &&
        <div className="divider my-0 h-[1px] bg-gray-600" />}
      </>
    );
  };
  
  export default conversation;
  