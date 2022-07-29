import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import AppContext from "../Context/AuthContext";
import CharDetail from "../Components/CharDetail";

export default function CharDetails() {
  const [char, setChar] = useState({});
  const { id } = useParams();

  const { token } = useContext(AppContext);
  const uri = process.env.REACT_APP_MONGO_URI;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${uri}/char/${id}`, config)
      .then((res) => setChar(res.data))
      .catch((err) => alert(err.response.data.message));
  }, []);

  return (
    <>
      <h1 className="mb-4">Informações de {char.name}</h1>
      <div>
        <CharDetail
          name={char.name}
          occupation={char.occupation}
          weapon={char.weapon}
          debt={char.debt}
        />
      </div>
    </>
  );
}
