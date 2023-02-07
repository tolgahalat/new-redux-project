import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddUpdateProduct from "../products/AddUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Routes>
        <Route path="/"  element={<Dashboard/>}></Route>
        <Route path="/cart"  element={<CartDetail/>}></Route>
        <Route path="/saveproduct?productId=:productId"  element={<AddUpdateProduct/>}></Route>
        <Route path="/saveproduct/"  element={<AddUpdateProduct/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      {/* <Dashboard></Dashboard> */}
    </Container>
  );
}

export default App;
