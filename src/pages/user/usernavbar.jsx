import React from "react";

const Navbar = () => {
  const username=window.localStorage.getItem("Username")
  
  const signout=()=>{
    window.localStorage.removeItem("Username")
    window.location.reload()
   
  }

  return (
    <div className="navbar">
      <div className="navbar-box">
        <div className="navbar-logo-section">
          <a href="/">InvenTrek</a>

        </div>
 
        <div className="navbar-auths">
          {username ? (
            <div className="flex justify-center items-center gap-2 ">
              <p className="text-nowrap text-sm">{username}</p>
            <button onClick={signout} className="btn-1">Logout</button>
            </div>
            ):(<a href="/login" className="btn-1">Login</a>)}

        </div>
      </div>
    </div>
  );
};

export default Navbar;