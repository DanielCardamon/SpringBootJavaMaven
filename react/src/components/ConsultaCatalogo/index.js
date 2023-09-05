import { useState, useEffect } from "react";
import "./styles.css";
const ConsultaCatalogo = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState([]);
  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/v1/produtos");
        const dados = await resposta.json();
        //console.log(JSON.stringify(dados));
        setProdutos(dados);
      } catch (error) {
        setErro(error.message);
        console.log(erro);
      }
    };
    consulta();
  }, [erro]);
  return (
    <div className="Catalogo">
      <h3> Consulta Catalogo </h3>
      {JSON.stringify(produtos)}
    </div>
  );
};
export default ConsultaCatalogo;
