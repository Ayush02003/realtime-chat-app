import SearchInput from "./searchInput"
import Conversations from "./conversations"
import LogoutButton from "./logoutButton"
const sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput />
        <div className="  my-1 "></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default sidebar
