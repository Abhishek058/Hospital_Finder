import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Facilities from "./Facilities";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Medtests from "./Medtests";
import Speciality from "./Speciality";

function App() {
  return (
    <Router>
      <div className="App bg-gray-200">
        <Header />
        <Home />
        <Facilities />
        <Speciality />
        <Medtests />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
