import "./App.css";
import { Routes, Route } from "react-router-dom";

import AppProvider from "./Context/AuthProvider.js";
import SignUp from "./Pages/SignUp.js";
import Login from "./Pages/Login";
import CharList from "./Pages/CharList";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chars" element={<CharList />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
