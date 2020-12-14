import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './cadastro.css'

export default function AdminPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");

  function handleSubmit(event) {
    const loginData = {
      email: email,
      password: password,
    };

    event.preventDefault();
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <div className="container-new-post">

        <br />
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              type="email"
              name="admin_email"
              id="admin_email"
              placeholder="Insira seu Email"
              onChange={handleEmail}
              required
              value={email}
            />
            <br />
            <input
              type="password"
              name="admin_password"
              id="admin_password"
              placeholder="Insira o Password"
              onChange={handlePassword}
              required
              value={password}
            />
          </div>
          <br />
          <br />

          <input type="submit" className="button button1" value="LOGIN" />
        </form>

        {check ? (
          <p style={{ color: "red" }}>
            Email: admin@admin <br />
            Senha: admin
          </p>
        ) : null}
      </div>
    </>
  );
}
