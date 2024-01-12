import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ButtonV1 from "./components/buttons/button-v1/ButtonV1";
import ToogleButtonV1 from "./components/toogle-buttons/toogle-button-v1/ToogleButtonV1";
import ToogleButtonV2 from "./components/toogle-buttons/toogle-button-v2/ToogleButtonV2";
import ToogleButtonV3 from "./components/toogle-buttons/toogle-button-v3/ToogleButtonV3";
import ToogleButtonV4 from "./components/toogle-buttons/toogle-button-v4/ToogleButtonV4";
import ToogleButtonV5 from "./components/toogle-buttons/toogle-button-v5/ToogleButtonV5";
import ToogleButtonV6 from "./components/toogle-buttons/toogle-button-v6/ToogleButtonV6";
import ToogleButtonV7 from "./components/toogle-buttons/toogle-button-v7/ToogleButtonV7";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Link to={"/buttons"}>Buttons</Link>
              <br />
              <Link to={"/toogle-buttons"}>Toogle Buttons</Link>
            </div>
          }
        />
        <Route path="/buttons" element={<ButtonV1 />} />
        <Route
          path="/toogle-buttons"
          element={
            <div className="row test-border">
              <ToogleButtonV1 />
              <ToogleButtonV2 />
              <ToogleButtonV3 />
              <ToogleButtonV4 />
              <ToogleButtonV5 />
              <ToogleButtonV6 />
              <ToogleButtonV7 />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
