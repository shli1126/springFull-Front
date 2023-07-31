import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Adduser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar></Navbar>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/adduser" element={<Adduser/>} ></Route>
                <Route exact path="/edituser/:id" element={<EditUser/>}></Route>
                <Route exact path="/viewuser/:id" element={<ViewUser/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
