import React, { useState } from "react";
import LoginForm from "../Component/LoginPage/LoginForm";
import RegisterForm from "../Component/LoginPage/RegisterForm";

function Login() {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {login ? (
        <LoginForm login={login} setLogin={setLogin} />
      ) : (
        <RegisterForm login={login} setLogin={setLogin} />
      )}
    </div>
  );
}

export default Login;
