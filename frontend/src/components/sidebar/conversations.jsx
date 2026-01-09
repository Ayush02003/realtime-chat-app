import Conversation from "./Conversation"
import useGetconversations from "../../hooks/useGetconversations";
import { getRandomEmoji } from "../../utils/emojis";
const conversations = () => {
  const {loading,conversations} = useGetconversations();
  // console.log(conversations)
    return (
      <div className="py-2 flex flex-col overfflow-auto">
        {conversations.map((conversation,idx)=>(
          <Conversation key={conversation._id}
          conversation={conversation}
          emoji = {getRandomEmoji()}
          lastIdx = {idx === conversations.length - 1}
          />
        ))}
          {loading ? <span className='loading loading-spinner mx-auto'></span>:null}
        
      </div>
    )
  }
  
  export default conversations
  