import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetconversations = () => {
  const[loading,setLoadinig] = useState(false)
  const[conversations,setConversations] = useState([]);

  useEffect(()=>{
    const getConversations = async() => {
        setLoadinig(true);
        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            // console.log(data)
            setConversations(data)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoadinig(false)
        }
    }
    getConversations()
  },[])
  return{loading,conversations}
}

export default useGetconversations
