import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { signin_Background, user_Avatar } from "../utils/constant";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [forgotPassword, setForgotPassword] = useState(false);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // if blank value
    if (forgotPassword) {
      if (!email.current.value) {
        setErrorMessage("Email is required.");
        return;
      }
    } else {
      if (!email.current.value || !password.current.value) {
        setErrorMessage("Email and password are required.");
        return;
      }
    }

    //validating data
    const message = isSignInForm
      ? checkValidData(email.current.value)
      : checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) {
      return;
    }

    // forgotpassword / sign In / sign Up Logic
    if (isSignInForm && forgotPassword) {
      //forgotPassword

      sendPasswordResetEmail(auth, email.current.value)
        .then(() => {
          // Password reset email sent
          setErrorMessage(
            "Password reset email sent to your registered email. Check your inbox."
          );
        })
        .catch((error) => {
          // An error occurred
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode === "auth/user-not-found") {
            // Add logic for handling user not found during password reset
            setErrorMessage("No account found with this email address.");
          } else {
            setErrorMessage("Error sending password reset email.");
          }
        });

      // fetchSignInMethodsForEmail(auth, email.current.value)
      //   .then((signInMethods) => {
      //     if (signInMethods.length === 0) {
      //       // No account found with this email address
      //       setErrorMessage("No account found with this email address.");
      //     } else {
      //       // Send password reset email
      //       return sendPasswordResetEmail(auth, email.current.value);
      //     }
      //   })
      //   .then(() => {
      //     // Password reset email sent
      //     setErrorMessage("Password reset email sent. Check your inbox.");
      //   })
      //   .catch((error) => {
      //     // An error occurred while checking the email or sending the reset email
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     setErrorMessage("Error: " + errorCode + " - " + errorMessage);
      //   });
    } else if (!isSignInForm) {
      // sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            photoURL: user_Avatar,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " --1-- " + errorMessage);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrorMessage(errorCode + " --2-- " + errorMessage);
          setErrorMessage("Given email id is already registered.");
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrorMessage(errorCode + " --3-- " + errorMessage);
          setErrorMessage("Enter correct email and password");
        });
    }
  };

  const handleForgotPassword = () => {
    // Send password reset email
    sendPasswordResetEmail(auth, email.current.value)
      .then(() => {
        // Password reset email sent
        setErrorMessage("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/user-not-found") {
          // Add logic for handling user not found during password reset
          setErrorMessage("No account found with this email address.");
        } else {
          setErrorMessage("Error sending password reset email.");
        }
      });
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };

  return (
    <>
      <Header />
      <div className="absolute w-full">
        <img
          className="h-screen object-cover w-full  "
          src={signin_Background}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white w-[80%] sm:w-9/12 md:w-6/12 lg:w-4/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {forgotPassword
            ? "Forgot Password"
            : isSignInForm
            ? "Sign In"
            : "Sign Up"}
        </h1>
        {forgotPassword && (
          <p className="py-2 text-sm md:text-base">
            Enter your email address, and we'll send you a link to reset your
            password.
          </p>
        )}
        <input
          ref={email}
          type="text"
          required
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-lg bg-gray-700"
        />
        {!forgotPassword && (
          <input
            ref={password}
            type="password"
            required
            placeholder="Password"
            className="p-4 my-2 w-full rounded-lg bg-gray-700"
          />
        )}
        <p className="text-red-500  text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 sm:text-xl md:text-2xl md:font-semibold bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {forgotPassword
            ? "Send Reset Email"
            : isSignInForm
            ? "Sign In"
            : "Sign Up"}
        </button>

        {forgotPassword && (
          <p className="py-2 text-sm md:text-base">
            <span
              className="cursor-pointer"
              onClick={() => {
                setForgotPassword(false);
                setErrorMessage("");
              }}
            >
              Go Back
            </span>
          </p>
        )}

        {!forgotPassword && (
          <p className="py-2 text-sm md:text-base">
            {isSignInForm ? (
              <>
                New to Movvify?{" "}
                <span className="cursor-pointer" onClick={toggleSignInForm}>
                  Sign Up Now
                </span>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setForgotPassword(true);
                    setErrorMessage("");
                  }}
                >
                  {" "}
                  Forgot Password?
                </p>
              </>
            ) : (
              <>
                Already Registered?{" "}
                <span className="cursor-pointer" onClick={toggleSignInForm}>
                  Sign In Now
                </span>
              </>
            )}
          </p>
        )}
      </form>
    </>
  );
};

export default LogIn;
