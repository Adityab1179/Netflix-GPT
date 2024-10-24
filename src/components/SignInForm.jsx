import React, { useState } from "react";

const SignInForm = () => {
  const [signin, setsingin] = useState(true);
  function handleSignIn() {
    setsingin(!signin);
  }
  return (
    <div className="w-4/12  bg-black bg-opacity-80  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-md p-10 text-white">
      <h1 className="text-white text-3xl font-bold mb-2">
        {signin ? "Sign in" : "Sign Up"}
      </h1>
      <form className="w-full flex flex-col items-center ">
        {signin && <input
          className="p-4 m-2  w-full rounded-md bg-black bg-opacity-50 border-gray-600 border-2"
          type="text"
          placeholder="Full Name"
          required
        />}
        <input
          className="p-4 m-2  w-full rounded-md bg-black bg-opacity-50 border-gray-600 border-2"
          type="email"
          placeholder="Email or mobile number"
          required
        />
        <input
          className="p-4 m-2  w-full rounded-md bg-black bg-opacity-50 border-gray-600 border-2"
          type="password"
          placeholder="Password"
          required
        />
        <button
          type="Submit"
          className="bg-red-600 px-4 py-2 m-2 w-full rounded-md"
        >
          Submit
        </button>
      </form>
      {signin && (
        <div className="text-center">
          <h1 className="m-2">OR</h1>
          <button
            type="Submit"
            className="px-4 py-2 my-2 w-full bg-gray-600 rounded-md"
          >
            Use a Sign-in code
          </button>
        </div>
      )}
      {signin && <h1 className="my-4">Forgot Password?</h1>}
      <div className="my-4">
        <input type="checkbox" id="Remember-me" className="mr-2" />
        <label htmlFor="Remember-me" className="select-none">
          Remember Me
        </label>
      </div>

      <div
        className="flex gap-1 my-4 text-lg cursor-pointer"
        onClick={handleSignIn}
      >
        {signin ? (
          <h1 className="text-gray-400">
            New to Netflix?
            <span className="font-bold text-white">Sign up Now</span>
          </h1>
        ) : (
          <h1 className="text-gray-400">
            Already Registered?
            <span className="font-bold text-white">Sign in Now</span>
          </h1>
        )}
      </div>
      <h1 className="my-4 text-gray-400 text-sm">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </h1>
    </div>
  );
};

export default SignInForm;
