import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import { githubLogo, googleLogo } from "../assets";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LogIn = () => {
  /*  ----------- LOGIC -----------  */
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  /*  ----------- sign in in pup up manue  -----------  */
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success(" sign in  successfully");
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            isSingnedIn: true,
          })
        );
      })
      .then(() => {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  /*  ----------- sign out -----------  */
  const handleSignOut = () => {
    signOut(auth)
      .then((user) => {
        toast.success("Log out successfully");
        dispatch(
          removeUser({
            isSingnedIn: false,
          })
        );
      })
      .catch((error) => {});
  };
  /*  ----------- useEffect  -----------  */

  // useEffect(() => {
  //   if (userInfo) {
  //     setIsSignedIn(userInfo.isSignedIn);
  //     console.log(
  //       "this from the useEffect after seeting the isSignedIn",
  //       isSignedIn
  //     );
  //   }
  // }, [userInfo]);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
        >
          <img className="w-8" src={googleLogo} alt="googleLogo" />
          <span className="text-sm text-gray-900"> Sign in with Google</span>
        </div>

        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img className="w-8" src={githubLogo} alt="githubLogo" />
          <span className="text-sm text-gray-900"> Sign in with Github</span>
        </div>

        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default LogIn;
