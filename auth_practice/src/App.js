//import { Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1>Login</h1>
      <form className="flex flex-col items-center">
        <div>
          <label>username : </label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label>password : </label>
          <input type="text" id="password" name="password" />
        </div>
        <input type="button" value="Submit" />
      </form>
    </div>
  );
}

export default App;
