import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AppContext from "../Context/AuthContext";

export default function CharEdit() {
  const { id } = useParams();
  const [info, setInfo] = useState({
    name: "",
    occupation: "",
    weapon: "",
    debt: true,
  });

  const navigate = useNavigate();
  const { token } = useContext(AppContext);
  const uri = process.env.REACT_APP_MONGO_URI;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function handleSubmit(e) {
    e.preventDefault(e);
    axios
      .put(`${uri}/char/${id}`, info, config)
      .then(navigate("/chars"))
      .catch((err) => alert(err.response.data.message));
  }

  useEffect(() => {
    axios
      .get(`${uri}/char/${id}`, config)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => alert(err.response.data.message));
  }, [id]);

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
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ocupação</label>
          <input
            className="form-control w-25 m-auto"
            type="text"
            placeholder="Faço Memes"
            value={info.occupation}
            onChange={(e) => setInfo({ ...info, occupation: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Arma</label>
          <input
            className="form-control w-25 m-auto"
            type="text"
            placeholder="Teclado e Mouse"
            value={info.weapon}
            onChange={(e) => setInfo({ ...info, weapon: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Devendo?</label>
          <input
            className="ms-4"
            type="checkbox"
            value={info.debt}
            checked={info.debt}
            onChange={() => setInfo({ ...info, debt: !info.debt })}
          />
        </div>
        <button className="btn btn-primary w-25 mb-3 mt-3">Editar</button>
      </form>
    </>
  );
}
