import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CRUDButton from "./components/buttons/crud-button/CRUDButton";
import LoaderV1 from "./components/loaders/loader-v1/LoaderV1";
import LoaderV2 from "./components/loaders/loader-v2/LoaderV2";
import ToogleButtonV1 from "./components/toogle-buttons/toogle-button-v1/ToogleButtonV1";
import ToogleButtonV2 from "./components/toogle-buttons/toogle-button-v2/ToogleButtonV2";
import ToogleButtonV3 from "./components/toogle-buttons/toogle-button-v3/ToogleButtonV3";
import ToogleButtonV4 from "./components/toogle-buttons/toogle-button-v4/ToogleButtonV4";
import ToogleButtonV5 from "./components/toogle-buttons/toogle-button-v5/ToogleButtonV5";
import ToogleButtonV6 from "./components/toogle-buttons/toogle-button-v6/ToogleButtonV6";
import ToogleButtonV7 from "./components/toogle-buttons/toogle-button-v7/ToogleButtonV7";
import ButtonV1 from "./components/buttons/button-v1/ButtonV1";
import EditableContainer from "./components/form-elements/editable-container/EditableContainer";
import PasswordInput from "./components/form-elements/password-input/PasswordInput";
import NavbarV1 from "./components/nav-bars/navbar-v1/NavbarV1";
import LeftSideNavbarV1 from "./components/nav-bars/left-side-navbar-v1/LeftSideNavbarV1";

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
              <Link to={"/form-elements"}>From Elements</Link>
              <br />
              <Link to={"/loaders"}>Loaders</Link>
              <br />
              <Link to={"/navbars"}>Navars</Link>
              <br />
              <Link to={"/toogle-buttons"}>Toogle Buttons</Link>
            </div>
          }
        />
        <Route
          path="/buttons"
          element={
            <>
              <CRUDButton option="create" />
              <CRUDButton option="read" />
              <CRUDButton option="update" />
              <CRUDButton option="delete" />
              <br />
              <ButtonV1 />
            </>
          }
        />
        <Route
          path="/form-elements"
          element={
            <>
              <EditableContainer />
              <br />
              <PasswordInput />
            </>
          }
        />
        <Route
          path="/loaders"
          element={
            <div className="row ">
              <LoaderV1 />
              <LoaderV2 />
              <a href="https://cssloaders.github.io/" target="_blank">
                More Loader
              </a>
            </div>
          }
        />
        <Route
          path="/navbars"
          element={
            <div className="row ">
              <NavbarV1 />
              <LeftSideNavbarV1 />
            </div>
          }
        />
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
