import logo from "./logo.svg";
import "./App.css";
import { LoginRegister } from "./components/BasicComponents/LoginRegister";
import "./bootstrap.css";
import { ApplicationComponent } from "./components/Application";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <BrowserRouter>
        <ApplicationComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
