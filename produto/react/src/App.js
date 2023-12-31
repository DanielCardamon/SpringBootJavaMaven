import Home from "./Home";
import "./styles.css";
import ConsultaCatalogo from "./components/ConsultaCatalogo";
import CadastrarProduto from "./components/CadastrarProduto";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos/catalogo" element={<ConsultaCatalogo />} />
        <Route path="/produtos/cadastrar" element={<CadastrarProduto />} />
      </Routes>
    </Router>
  );
};
export default App;
