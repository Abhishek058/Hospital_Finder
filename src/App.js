import "./App.css";
import Facilities from "./Facilities";
import Header from "./Header";
import Home from "./Home";
import Medtests from "./Medtests";
import Speciality from "./Speciality";

function App() {
  return (
    <div className="App bg-gray-200">
      <Header />
      <Home />
      <Facilities />
      <Speciality />
      <Medtests />
    </div>
  );
}

export default App;
