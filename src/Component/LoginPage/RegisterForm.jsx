import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../Context/userProvider";
import { useNavigate } from "react-router-dom";

function RegisterForm({ login, setLogin }) {
  const { user, assignAccount } = useContext(userContext);
  const [registerEmail, setRegisterEmail] = useState({
    email: "",
    confirmEmail: "",
  });
  const [registerPassword, setRegisterPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [registerName, setRegisterName] = useState("");

  const naviagte = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState("");
  const checkValid = () => {
    console.log("running");
    if (registerName == "") {
      setError("Your name could not leave empty");
    } else if (registerEmail.email == "") {
      setError("Your email could not leave empty");
    } else if (registerEmail.confirmEmail == "") {
      setError("Your confirm email could not leave empty");
    } else if (!emailRegex.test(registerEmail.email)) {
      setError("Your email is not valid, please try again");
    } else if (registerEmail.email !== registerEmail.confirmEmail) {
      setError("Your emails are not consistered, please try again");
    } else if (registerPassword.password == "") {
      setError("Your password could not leave empty");
    } else if (registerPassword.password.length < 8) {
      setError("Your password is not valid, please try again");
    } else if (registerPassword.confirmPassword == "") {
      setError("your confirm password could not leave empty");
    } else if (registerPassword.password !== registerPassword.confirmPassword) {
      setError("Your passwords are not consistered, please try again");
    } else {
      setError("");
      assignAccount(
        registerName,
        registerEmail.email,
        registerPassword.password
      );
    }
  };
  useEffect(() => {
    if (user !== null) {
      naviagte("/profile");
    }
  }, [user]);
  const handleSubmission = e => {
    e.preventDefault();
    checkValid();
  };

  return (
    <div>
      <form className="max-w-sm mx-auto px-10 py-10 border-2 rounded-md flex flex-col items-center">
        <h2 className=" mb-5 font-bold text-lg">Register</h2>
        <div className="mb-5 w-full">
          <label
            htmlFor="user-name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Full Name
          </label>
          <input
            type="email"
            id="email"
            className=" border-2 border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="David Hotpot"
            required
            onChange={e => setRegisterName(e.target.value)}
          />
        </div>
        {/* EMAIL  */}
        <div className="mb-5 w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className=" border-2 border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="email@example.com"
            required
            onChange={e =>
              setRegisterEmail(previous => ({
                ...previous,
                email: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-5 w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm your email
          </label>
          <input
            type="email"
            id="confirm-email"
            className=" border-2 border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="email@example.com"
            required
            onChange={e =>
              setRegisterEmail(previous => ({
                ...previous,
                confirmEmail: e.target.value,
              }))
            }
          />
        </div>
        {/* PASSWORD */}
        <div className="mb-5 w-full">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className=" border-2 border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="your pass****"
            required
            onChange={e =>
              setRegisterPassword(previous => ({
                ...previous,
                password: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-5 w-full">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Confirm your password
          </label>
          <input
            type="password"
            id="confirm-password"
            className=" border-2 border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="your pass****"
            required
            onChange={e =>
              setRegisterPassword(previous => ({
                ...previous,
                confirmPassword: e.target.value,
              }))
            }
          />
        </div>

        <p className="text-red-600 text-center mb-5">{error}</p>
        <button
          className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          style={{ backgroundColor: "#ff0000" }}
          onClick={handleSubmission}
        >
          Register
        </button>
        <div className="text-red-400 text-center mt-5 ">
          <p>You have an account?</p>
          <p
            className="font-semibold text-red-500 hover:text-red-600 active:text-red-400"
            onClick={() => {
              setLogin(true);
            }}
          >
            Login here
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
