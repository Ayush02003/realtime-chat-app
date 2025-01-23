import GenderCheckbox from "./GenderCheckbox";
const signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg  bg-gray-400 bg-clip-padding backdrop-filter 
        backdrop-blur-sm bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300 pb-2">
          Sign Up
          <span className="text-green-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-green-600  inline-block pl-2"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-3 ">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
