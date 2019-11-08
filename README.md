# Front-End Dev Hiring Test 
# Teste para vaga de Front-End na SAGE

## Instruções para testar a aplicação em modo de desenvolvimento

### 1 - Backend
   #### 1.1 - Instalar e inicializar os bancos de dados Postgres pelo docker:
       A) Exemplo para instalar o Postgres: docker run --name database -e POSTEGRES_PASSWORD=docker -p 5432:5432 -d postgres
       B) Para iniciar o Postgres: docker start database
       
   #### 1.2 - Rodar as migrates do sequelize para criar a estrutura do banco Postgres:
      A) Entre na pasta do backend;
      B) Execute o comando: yarn sequelize db:migrate
      
   #### 1.3 - Instalar os pacotes e dependencias da aplicação:
      A) Entre na pasta do backend;
      B) Execute o comando: yarn

   #### 1.4 - Configurar as variaveis de ambiente no .env:
      A) Seguir o arquivo de exemplo .env.example e criar um .env 

   #### 1.5 - Inicializar o backend:
      A) Entre na pasta do backend;
      B) Execute o comando: yarn dev

### 2 - Frontend

   #### 2.1 - Instalar os pacotes e dependencias da aplicação:
      A) Entre na pasta do frontend;
      B) Execute o comando: yarn

   #### 2.2 - Configurar as variaveis de ambiente no .env:
      A) Seguir o arquivo de exemplo .env.example e criar um .env 

   #### 2.3 - Inicializar o frontend:
      A) Entre na pasta do frontend;
      B) Execute o comando: yarn start

## Recursos utilizados para desenvolver:
   ### Para o Back-End 
   
   ![alt text](https://github.com/marcelochb/HiringTestSage/blob/master/assets/TDD.result.png)

   - TDD com Jest;
   - Express;
   - Sucrase;
   - Yup;
   - Cors;
   
   ### Para o Front-End
   - Axios;
   - Redux;
   - Redux-Saga;
   - MaterialUI (icons);
   - Yup;
   - Styled-Component;
   - Componentização;
   - Reactotron;

_________________________________________
# Cenário a ser desenvolvido

## Implementar uma rotina de cadastro de pessoa e endereço utilizando o conceito de wizard, onde os dados de pessoas estarão presentes no primeiro step e os endereços no segundo step.

## Observações:
### O projeto deve contemplar uma listagem de pessoas, edição, consulta e exclusão nos dois steps.
### Tecnologias
- Frontend
- React JS
- Redux
- Material UI
- É essencial utilizar recursos de componentização do React JS
Backend (Se especialisra em Dev Front End, usar o https://www.mocky.io/ na parte de backend)
- NET Core
- EF Core
- MySQl, PostgreSQL ou SQL Server
## Entrega e documentação
### Deverá ser disponibilizada no repositório público do GitHub, bem como os passos para execução e validação do projeto
- Após receber esse teste, por gentileza, estipular o prazo de execução e me enviar no próximo dia útil.
- Serão avaliados pontos como: Usabilidade, boas práticas de programação, UI e qualidade do código.
