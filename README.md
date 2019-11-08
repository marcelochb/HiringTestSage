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
