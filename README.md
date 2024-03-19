# API de Cadastro de Desenvolvedores

Esta é uma API simples construída com React, Next.js, TypeScript, Axios e TailwindCSS para gerenciar o cadastro de desenvolvedores com seus respectivos endpoints.

## Endpoints

### Listar Desenvolvedores

GET http://localhost:3333/developers

Retorna uma lista de todos os desenvolvedores cadastrados.

### Cadastrar Desenvolvedor

POST http://localhost:3333/developers

Permite cadastrar um novo desenvolvedor.

### Atualizar Desenvolvedor

PUT http://localhost:3333/developers/:id

Permite atualizar as informações de um desenvolvedor específico. Substitua `:id` pelo ID do desenvolvedor que deseja atualizar e envie um objeto JSON com os novos detalhes no corpo da requisição.

### Deletar Desenvolvedor

DELETE http://localhost:3333/developers/:id

Permite excluir um desenvolvedor específico. Substitua `:id` pelo ID do desenvolvedor que deseja excluir.

## Configuração do Ambiente

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório.
3. Instale as dependências utilizando o comando `npm install`.
4. Execute o servidor localmente com o comando `npm run dev`.

Certifique-se de configurar corretamente o arquivo `.env` com as informações necessárias, como as variáveis de ambiente para conexão com o banco de dados, se aplicável.

## Contribuindo

Contribuições são bem-vindas! Se você quiser melhorar esta API, sinta-se à vontade para abrir uma issue ou enviar um pull request.








