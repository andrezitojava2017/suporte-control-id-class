
const axios = require('axios');

// Função para fazer a requisição
const fetchApi = async () => {
    const config = {
        method: 'post',
        url: 'http://192.168.0.20/login.fcgi',
        headers: {
            'Content-Type': 'application/json',
        },
        data: { login: 'admin', password: 'admin' },
        timeout: 10000,
    };

    try {
        const response = await axios(config);

        // Verificar se a resposta é JSON
        if (typeof response.data !== 'object') {
            throw new Error('Resposta não é JSON');
        }

        // Salvar a sessão
        const log = `Sessão: ${JSON.stringify(response.data)}`;

    } catch (error) {
        console.error(errorLog);
    }
};

// Executar imediatamente na inicialização
fetchApi();