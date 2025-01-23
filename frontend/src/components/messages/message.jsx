const message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="../../../public/bg.png" alt="" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-green-800">
        Hi! What is upp?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  );
};

export default message;
