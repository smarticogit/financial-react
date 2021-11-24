import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Cadastro = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    pathname === "/cadastro" && navigate("inicio");
  }, []);

  return (
    <div>
      <h1>Página de Cadastro</h1>
      <Outlet />
    </div>
  );
};

export default Cadastro;
