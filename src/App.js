import "./App.css";
import { Routes, Route } from "react-router-dom";

import AppProvider from "./Context/AuthProvider.js";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import CharList from "./Pages/CharList";
import NewChar from "./Pages/newChar";
import CharEdit from "./Pages/CharEdit";
import CharDetails from "./Pages/CharDetails";
import UserProfile from "./Pages/UserProfile";
import EditProfile from "./Pages/EditProfile";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chars" element={<CharList />} />
          <Route path="/new-char" element={<NewChar />} />
          <Route path="/chars/:id" element={<CharEdit />} />
          <Route path="/details/:id" element={<CharDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
