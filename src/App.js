import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Page/Home";
import Signup from "./Page/Signup";
import Table from "./Page/Table";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/Table" element={<Table></Table>}></Route>
      </Routes>
    </div>
  );
}

export default App;
