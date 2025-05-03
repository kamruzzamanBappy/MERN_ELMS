<<<<<<< HEAD
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets.js";
const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");
=======
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");

  const {openSignIn} = useClerk()
  const {user} = useUser()
>>>>>>> cb622ce (d3)
  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
<<<<<<< HEAD
          <button>Become Educator</button>|{" "}
          <Link to="/my-enrollments">My Enrollments </Link>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
          Create Account
        </button>
      </div>

      {/* phone screen*/}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div>
          <button>Become Educator</button>
          <Link to="/my-enrollment">My Enrollment</Link>
        </div>
        <button>
          <img src={assets.user_icon} alt="" />
        </button>
=======
          {user && <>
          <button>Become Educator</button>| 
          <Link to="/my-enrollments">My Enrollments </Link></> }
        </div>
{user ? <UserButton />:
        <button onClick={()=>openSignIn()} className="bg-blue-600 text-white px-5 py-2 rounded-full">
          Create Account
        </button>

}
      </div>

      {/* phone screen*/}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500 ">
       <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
       {user && <>
          <button>Become Educator</button>| 
          <Link to="/my-enrollments">My Enrollments </Link></> }
       </div>{
        user ? <UserButton /> :
       <button onClick={()=>openSignIn()}><img src={assets.user_icon} alt="" /></button> }
      
>>>>>>> cb622ce (d3)
      </div>
    </div>
  );
};

export default Navbar;
