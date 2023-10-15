
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navber = () => {


   const {user, LogOut} = useContext(AuthContext)

 const handleLogOUt = () => {
   LogOut()
    .then(() => {
       console.log("Sign-out successful.")
    }).catch((error) => {
      console.log("An error happened.", error )
    });

 }

  return (
    <div className="flex justify-between items-center border shadow-lg py-4 px-5">
        <div>
            <h1 className="text-red-500 text-2xl font-bold">Form Context</h1>
        </div>
      <div>
        <nav className="flex justify-center items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 text-xl font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 text-xl font-bold " : ""
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 text-xl font-bold" : ""
            }
          >
          Register
          </NavLink>
          <NavLink
            to="/oder"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 text-xl font-bold" : ""
            }
          >
          Oder
          </NavLink>
        </nav>
      </div>
     <div>
    
    {
      user ?  <>
      <span>{user.email}</span>
      <button onClick={handleLogOUt} className="btn btn-sm">Sign out</button>
      </> :
      <Link to="/login">  <button  className="btn btn-sm">Log in</button></Link>
    }

   
       
     </div>

    </div>
  );
};

export default Navber;
