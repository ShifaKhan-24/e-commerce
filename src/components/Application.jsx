import { LoginRegister } from "./BasicComponents/LoginRegister";
import { Signup, SignupComponent } from "./BasicComponents/Signup";
import { Routes, Route } from "react-router-dom";
import { HomeComponent } from "./BasicComponents/Home";
import { HeaderComponent } from "./BasicComponents/Header";
import { FooterComponent } from "./BasicComponents/Footer";
import { TableComponent } from "./BasicComponents/Table";

export const ApplicationComponent = () => {
  return (
    <div style={{ width: "100%" }}>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route
          path="/home"
          element={<HomeComponent></HomeComponent>}
          exact
        ></Route>
        <Route
          path="/loginregister"
          element={<LoginRegister></LoginRegister>}
          exact
        ></Route>
        <Route path="/signup" element={<Signup></Signup>} exact></Route>
        <Route
          path="/table"
          element={<TableComponent></TableComponent>}
          exact
        ></Route>
        {/* <LoginComponent/> */}
      </Routes>
      <FooterComponent></FooterComponent>
    </div>
  );
};
