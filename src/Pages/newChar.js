import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AppContext from "../Context/AuthContext.js";

export default function NewChar() {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [weapon, setWeapon] = useState("");
  const [debt, setDebt] = useState(false);

  const char = { name, occupation, weapon, debt };
  const { token } = useContext(AppContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const uri = process.env.REACT_APP_MONGO_URI;
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${uri}/new-char`, char, config)
      .then(navigate("/chars"))
      .catch((err) => alert(err.response.data.message));
  }

  return (
    <>
      <h1>Crie seu personagem!</h1>
      <form
        onSubmit={handleSubmit}
        className="border border-dark w-50 m-auto bg-light"
      >
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            className="form-control w-25 m-auto"
            type="text"
            placeholder="Fulano"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ocupação</label>
          <input
            className="form-control w-25 m-auto"
            type="text"
            placeholder="Faço Memes"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Arma</label>
          <input
            className="form-control w-25 m-auto"
            type="text"
            placeholder="Teclado e Mouse"
            value={weapon}
            onChange={(e) => setWeapon(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Devendo?</label>
          <input
            className="ms-4"
            type="checkbox"
            value={debt}
            onChange={() => setDebt(!debt)}
          />
        </div>
        <button className="btn btn-primary w-25 mb-3 mt-3">Criar</button>
      </form>
    </>
  );
}
