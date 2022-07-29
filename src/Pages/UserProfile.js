import { useState, useEffect, useContext } from "react";
import axios from "axios";

import AppContext from "../Context/AuthContext";
import Profile from "../Components/Profile";

export default function UserProfile() {
  const [user, setUser] = useState({});

  const { token } = useContext(AppContext);
  const uri = process.env.REACT_APP_MONGO_URI;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${uri}/profile`, config)
      .then((res) => setUser(res.data))
      .catch((err) => alert(err.response.data.message));
  }, []);

  return (
    <>
      <h1 className="mb-4">Informações de {user.name}</h1>
      <div>
        <Profile name={user.name} email={user.email} />
      </div>
    </>
  );
}
