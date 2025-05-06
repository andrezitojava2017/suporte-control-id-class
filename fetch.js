import { appendFileSync } from "fs";
import { join } from "path";
import fetch from "node-fetch";
import { Agent } from "https";

// Função para fazer a requisição
const fetchApi = async () => {
  const opt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "curl/7.68.0", // Imitar o curl
     // Accept: "application/json", // Solicitar JSON explicitamente
    },
    body: JSON.stringify({ login: "admin", password: "admin" }),
    // Ignorar verificação de SSL (apenas para desenvolvimento)
    timeout: 10000, // Timeout de 10 segundos
  };

  try {
    const response = await fetch("http://192.168.0.20/login.fcgi", opt);

    // Verificar se a resposta é OK
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}, StatusText: ${response.statusText}`
      );
    }



    const data = await response.json();
    // Salvar a sessão
    const log = `Sessão: ${data}`;
  } catch (error) {
    // Salvar detalhes do erro com mais informações
    console.log('erro gerado', error);
  }
};

// Executar imediatamente na inicialização
fetchApi();
