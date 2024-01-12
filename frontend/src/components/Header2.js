import React, { useEffect } from 'react'
import { useNavigate} from "react-router-dom";
import { auth } from "../utils/firebase";
import {  signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

const Header2 = () => {
    const user = useSelector((store) => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  
  return (
   <>
    <div className=" px-8 py-2  bg-black z-10 w-full flex md:flex-row justify-between">
        <img
          className="w-44 py-2 "
          src={process.env.PUBLIC_URL + '/images/movvify_logo.png'}
          alt="movvify-logo"
        />
        {user && (
          <div className="flex p-2 ">
            <img
              className="w-12 h-12 hidden md:block"
              src={user.photoURL}
              alt="user icon"
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              {" "}
              (Sign Out)
            </button>
          </div>
        )}
      </div>
   </>
  )
}

export default Header2