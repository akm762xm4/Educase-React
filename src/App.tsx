import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Page/Welcome";
import { Register } from "./Page/Register";
import { Login } from "./Page/Login";
import { Profile } from "./Page/Profile";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
