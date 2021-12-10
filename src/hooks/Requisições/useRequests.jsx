import notify from "../../constantes/notify";

const useRequests = () => {
  const buscarEmail = async (body) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL_BASE}/email`, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const dados = await response.json();
      if (!response.ok) {
        throw new Error(dados.message);
      }

      return response.status;
    } catch (error) {
      return error.message;
    }
  };

  const cadastrarUsuario = async (body) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_BASE}/usuarios`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const dados = await response.json();
      if (!response.ok) {
        throw new Error(dados.message);
      }

      return response.status;
    } catch (error) {
      return error.message;
    }
  };

  const login = async (body) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL_BASE}/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const dados = await response.json();

      if (!response.ok) {
        throw new Error(dados.message);
      }
      return dados;
    } catch (error) {
      return error.message;
    }
  };

  const listarCobrancas = async (token) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_BASE}/cobrancas`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const dados = await response.json();

      if (!response.ok) {
        throw new Error(dados.message);
      }

      return notify.sucesso(dados.message);
    } catch (error) {
      return error.message;
    }
  };

  const excluirUmaCobranca = async (token, id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_BASE}/cobranca/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const dados = await response.json();

      if (!response.ok) {
        throw new Error(dados.message);
      }

      return dados;
    } catch (error) {
      return notify.erro(error.message);
    }
  };

  return {
    buscarEmail,
    cadastrarUsuario,
    login,
    listarCobrancas,
    excluirUmaCobranca,
  };
};

export default useRequests;
