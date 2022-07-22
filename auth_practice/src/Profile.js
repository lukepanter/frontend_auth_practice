import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="w-screen h-screen bg-violet-500 ">
      <div
        className="flex flex-col items-center 
                    fixed top-2/4 left-2/4 
                    -translate-x-2/4 -translate-y-2/4
                    bg-white 
                    h-[9/10] w-1/3 
                    rounded-md shadow-lg"
      >
        <h1 className="font-bold text-3xl pt-5 pb-3">Hello ! Ton</h1>
        <img
          src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
          className="rounded-full w-28 h-28"
        ></img>
        <div className="flex flex-col items-center w-full">
          <p className="w-5/6 pt-3 pl-1 font-normal text-sm">User ID</p>
          <p className="w-5/6 pl-1 pb-1 font-bold text-lg">26</p>

          <p className="w-5/6 pl-1 pt-3 font-normal text-sm">Username</p>
          <p className="w-5/6 pl-1 pb-1 font-bold text-lg">Luepanter</p>

          <p className="w-5/6 pl-1 pt-3 font-normal text-sm">Password</p>
          <p className="w-5/6 pl-1 pb-1 font-bold text-lg">djrg9e8tegi</p>

          <p className="w-5/6 pl-1 pt-3 font-normal text-sm">First Name</p>
          <p className="w-5/6 pl-1 pb-1 font-bold text-lg">Jirawat</p>

          <p className="w-5/6 pl-1 pt-3 font-normal text-sm">Last Name</p>
          <p className="w-5/6 pl-1 pb-1 font-bold text-lg">Kusalankurawat</p>
          <Link
            to="/login"
            className="my-4 
             flex py-1 w-5/6 bg-red-700 text-white rounded-md justify-center"
          >
            <p>Log out</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
