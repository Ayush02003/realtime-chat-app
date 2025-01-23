const conversation = () => {
    return (
      <>
        <div className="flex gap-2 items-center hover:bg-green-600 transition-colors duration-200 ease-in-out rounded-lg px-3 py-2 cursor-pointer">
          <div className="avatar online">
            <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User avatar"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-200 text-sm pl-2">Ayush Patel</p>
              <span className="text-lg">😊</span>
            </div>
            <p className="text-gray-400 text-xs truncate pl-2">
              Last message preview goes here...
            </p>
          </div>
        </div>
        <div className="divider my-0 h-[1px] bg-gray-600" />
      </>
    );
  };
  
  export default conversation;
  