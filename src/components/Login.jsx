import React from "react";
import Header from "./Header";
import SignInForm from "./SignInForm";

const Login = () => {
  return (
    <div className="relative">
        <Header/>
        <SignInForm/>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg"
          alt="background-Img"
        />
      </div>
    
    </div>
  );
};

export default Login;
