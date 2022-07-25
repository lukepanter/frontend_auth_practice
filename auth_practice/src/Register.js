import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  let navigate = useNavigate();

  const signUp = async () => {
    let path = `../login`;

    try {
      await axios
        .post("http://localhost:5000/auth/register", {
          username: username,
          user_password: password,
          first_name: firstName,
          last_name: lastName,
        })
        .then((res) => {
          alert("Sign up Finished");
          navigate(path, { replace: true });
        });
    } catch (error) {
      alert(error.errorMsg);
    }
  };

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-slate-200 rounded-md w-5/6"
          />
          <p className="w-5/6 pb-1 pl-1 pt-5 font-normal">Password</p>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-slate-200 rounded-md w-5/6"
          />

          <p className="w-5/6 pb-1 pl-1 pt-5 font-normal">First name</p>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-2 border-slate-200 rounded-md w-5/6"
          />

          <p className="w-5/6 pb-1 pl-1 pt-5 font-normal">Last name</p>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-2 border-slate-200 rounded-md w-5/6"
          />

          <input
            type="button"
            value="Sign up"
            onClick={signUp}
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
