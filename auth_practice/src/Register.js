import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-screen h-screen bg-violet-500 ">
      <div
        className="flex flex-col items-center 
                      fixed top-2/4 left-2/4 
                      -translate-x-2/4 -translate-y-2/4
                      bg-white 
                      h-4/5 w-1/3 
                      rounded-md shadow-lg"
      >
        <h1 className="font-bold text-3xl pt-5 pb-3">Sign up</h1>
        <div className="flex flex-col items-center w-full">
          <p className="w-5/6 pt-3 pl-1 pb-1 font-normal">Username</p>

          <input
            type="text"
            className="border-2 border-slate-200 rounded-md w-5/6"
          />
          <p className="w-5/6 pb-1 pl-1 pt-5 font-normal">Password</p>
          <input
            type="text"
            className="border-2 border-slate-200 rounded-md w-5/6"
          />

          <p className="w-5/6 pb-1 pl-1 pt-5 font-normal">First name</p>
          <input
            type="text"
            className="border-2 border-slate-200 rounded-md w-5/6"
          />

          <p className="w-5/6 pb-1 pl-1 pt-5 font-normal">Last name</p>
          <input
            type="text"
            className="border-2 border-slate-200 rounded-md w-5/6"
          />

          <input
            type="button"
            value="Log in"
            className="mt-7 py-1 w-5/6 bg-lime-700 text-white rounded-md"
          />
          <div className="flex mt-5">
            <p>Already a user ? </p>
            <Link to="/login" className="underline ml-1">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
