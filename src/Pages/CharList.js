import { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AuthContext";
import axios from "axios";
import Char from "../Components/Char";

export default function CharList() {
  const { token } = useContext(AppContext);

  const [chars, setChars] = useState([]);
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(false);

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/all-chars", config)
      .then((res) => setChars(res.data))
      .catch((err) => console.log(err.response.data.message));

    axios
      .get("http://localhost:5000/profile", config)
      .then((res) => setName(res.data.name))
      .catch((err) => console.log(err.response.data.message));
  }, [refresh]);

  async function deleteChar(id) {
    axios
      .delete(`http://localhost:5000/char/${id}`, config)
      .then((res) => {
        if (res.status === 204) {
          alert("Personagem deletado com sucesso");
          setRefresh(!refresh);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
        <p className="hidden">1</p>
        <h1 className=""> Lista de personagens de {name}</h1>
        <button className="btn btn-primary me-4 btn-sm">Novo Personagem</button>
      </div>

      <div className="row ms-4 mt-4">
        {chars.map((char) => {
          return (
            <Char
              key={char._id}
              name={char.name}
              occupation={char.occupation}
              deleteChar={() => deleteChar(char._id)}
            />
          );
        })}
      </div>
    </>
  );
}
