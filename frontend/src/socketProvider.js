import { useEffect } from "react";
import socket from "./socket";
import useOnlineUsers from "./zustand/useOnlineUsers";

const SocketProvider = ({ userId }) => {
  const {setOnlineUsers} = useOnlineUsers();

  useEffect(() => {
    if (!userId) return;

    socket.connect();

    socket.emit("user-online", userId);

    socket.on("online-users", (users) => { 
      setOnlineUsers(users);
    });

    return () => {
      socket.off("online-users");
      socket.disconnect();
    };
  }, [userId]);

  return null;
};

export default SocketProvider;
