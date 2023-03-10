import { Route, Routes } from "react-router-dom";
import { UserNameProvider } from "../context/UserContext";
import { Board } from "../pages/Board";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <UserNameProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </UserNameProvider>
  );
}
