import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
const Signup = () => {
  const [inputs,setInputs] = useState({
    fullName : '',
    username : '',
    password : '',
    confirmPassword : '',
    gender : ''
  })

const {loading,signup} = useSignup()
  const handleCheckboxChange = (gender) =>{
    setInputs({...inputs,gender})
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    await signup(inputs)
  }
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
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName:e.target.value})}
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
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username:e.target.value})}
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password:e.target.value})}
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
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-green-600  inline-block pl-2"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-3 " disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span>:"Sign Up"}
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
