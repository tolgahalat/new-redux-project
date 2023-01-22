import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Routes>
        <Route path="/"  element={<Dashboard/>}></Route>
        <Route path="/cart"  element={<CartDetail/>}></Route>
      </Routes>
      {/* <Dashboard></Dashboard> */}
    </Container>
  );
}

export default App;
