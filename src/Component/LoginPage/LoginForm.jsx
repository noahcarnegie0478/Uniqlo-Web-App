import React, { useContext, useEffect } from "react";
import { userContext } from "../../Context/userProvider";
import { useNavigate } from "react-router-dom";

function LoginForm({ login, setLogin }) {
  const { setEmail, setPassword, checkAccount, error, user } =
    useContext(userContext);
  const naviagte = useNavigate();

  useEffect(() => {
    if (user !== null) {
      naviagte("/profile");
    }
  }, [user]);
  const handleSubmission = e => {
    e.preventDefault();
    checkAccount();
    console.log("Form submited");
  };

  return (
    <div>
      <form
        className="max-w-sm mx-auto p-20 border-2 rounded-md flex flex-col items-center"
        onSubmit={handleSubmission}
      >
        <h2 className=" mb-5 font-bold text-lg">Login</h2>
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
            onChange={e => setEmail(e.target.value)}
          />
        </div>
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
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <p className="text-red-600">{error}</p>
        <button
          className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          style={{ backgroundColor: "#ff0000" }}
          type="submit"
        >
          Submit
        </button>
        <div className="text-red-400 text-center mt-5 ">
          <p>You dont have account?</p>
          <p
            className="font-semibold text-red-500 hover:text-red-600 active:text-red-400"
            onClick={() => {
              setLogin(false);
            }}
          >
            Register here
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
