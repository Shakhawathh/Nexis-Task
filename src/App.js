import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Page/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
