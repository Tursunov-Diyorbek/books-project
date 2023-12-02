import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/sign-in"} element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
