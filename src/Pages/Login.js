import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import AppContext from "../Context/AuthContext.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(AppContext);

  const user = {
    email,
    password,
  };

  const uri = process.env.REACT_APP_MONGO_URI;
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${uri}/login`, user)
      .then((res) => {
        //console.log(res.data.token);
        setToken(res.data.token);
        navigate("/chars");
      })
      .catch((err) => alert(err.response.data.message));
  }

  return (
    <>
      <h1 className="mb-5">Faça seu login aqui!</h1>

      <form
        onSubmit={handleSubmit}
        className="border border-dark w-50 m-auto bg-light"
      >
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control w-25 m-auto"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control w-25 m-auto"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-25 mb-3 mt-3">Cadastrar</button>
      </form>
      <Link to="/" className="text-reset text-decoration-none">
        <h3 className="mt-5">
          Ainda não possui cadastro?! Cadastre-se clicando aqui!
        </h3>
      </Link>
    </>
  );
}
