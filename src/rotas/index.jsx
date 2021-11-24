import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutPadrao from "../layout/Padrao";

import Home from "../paginas/home";
import Clientes from "../paginas/clientes";
import Cobrancas from "../paginas/cobrancas";
import Login from "../paginas/login";
import Cadastro from "../paginas/cadastro";
import Inicio from "../paginas/cadastro/inicio";
import Senha from "../paginas/cadastro/senha";
import Sucesso from "../paginas/cadastro/sucesso";

const Rotas = () => {
  const [tituloDaRota, setTituloDaRota] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPadrao tituloDaRota={tituloDaRota} />}>
          <Route
            path="/"
            element={<Home setTituloDaRota={setTituloDaRota} />}
          />

          <Route
            path="/clientes"
            element={<Clientes setTituloDaRota={setTituloDaRota} />}
          />

          <Route
            path="/cobrancas"
            element={<Cobrancas setTituloDaRota={setTituloDaRota} />}
          />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/cadastro" element={<Cadastro />}>
          <Route path="inicio" element={<Inicio />} />
          <Route path="senha" element={<Senha />} />
          <Route path="sucesso" element={<Sucesso />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
