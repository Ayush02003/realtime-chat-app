import { IoSearchSharp } from "react-icons/io5"

const searchInput = () => {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input type="text" placeholder="Search.." className="input input-bordered rounded-full" id="" />
        <button type="submit" className="btn btn-circle bg-green-500 text-white">
            <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  )
}

export default searchInput
