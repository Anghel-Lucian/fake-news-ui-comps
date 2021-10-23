import React, { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    // validation...

    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    // validation...

    setPassword(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    // do something with username and password
  };

  return (
    <div id="sign-in">
      <form onSubmit={onSubmitForm}>
        <div>
          <label>Username</label>
          <input type="text" onChange={onChangeUsername} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={onChangePassword} />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
