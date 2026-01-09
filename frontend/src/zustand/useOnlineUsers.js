import {create} from "zustand";

const useOnlineUsers = create((set)=>({
    onlineUsers: [],
  setOnlineUsers: (users) => set({ onlineUsers: users }),
}))

export default useOnlineUsers;