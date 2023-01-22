import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./All";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App bg-gray-200">
        <Routes>
          <Route path="/" element={<All />}></Route>
          <Route path="/about" element={<div>about</div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
