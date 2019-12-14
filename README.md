# O que foi feito
**Regra 1**:

- [x] A aplicação deverá ter uma rota `/sobre`, que deverá conter o conteúdo da seção **Sobre o Jogo de Xadrez** da especificação do trabalho. Essa página também deverá conter uma imagem das peças de xadrez, tal como mostrado em https://xadrezapp.herokuapp.com/sobre.

**Regra 2**:

- [x] Os usuários poderão se cadastrar na aplicação através da rota `/signup`. Os cmapos do formulário de cadastro são: 
  - [x] nome completo (entre 6  e 100 caracteres)
  - [x] endereço de e-mail (válido)
  - [x]  curso da UFAM
  - [x] senha de acesso e confirmação da senha.
  - [x] a senha precisa ter 6 caracteres ou mais
  - [x] é importante verificar se a senha digitada pelo usuário é igual a senha do campo de confirmação.

**Regra 3**:

- [x] O banco de dados deverá seguir o esquema exibido na figura 2 da especificação do trabalho
  - [x] cada tabela deve conter um modelo
  - [x] e ao menos uma migração
  - [x] a tabela área deve ser alimentada através de um seeder do sequelize.

**Regra 4**:

- [x] As senhas deverão ser armazenadas no banco de dados de forma criptografada, através do módulo **bcrypt**

**Regra 5**:

- [x] Quando o usuário não estiver logado na aplicação, o menu superior deverá conter apenas as opções **Sobre** (`/sobre`), **Login** (`/login`) e **Sign Up** (`/signup`).
- [x] Ao acessar a tela de login ( que deverá conter apeas os campos **email** e **senha**) e informar aas credenciais corretamente, o menu superior deverá passar a conter as informações: **Nova Partida** (`/partida`), **Ranking** (`/ranking`), **Curso** (`/curso`), **Sobre** (`/sobre`) e **Logout** (`/logout`).

**Regra 6**:

- [x] A opção **Nova Partida** (`/partida`)irá iniciar uma nova partida de xadrez.
- [ ] No entanto, o jogador que iniciou a partida, deverá aguardar a chegada de algum oponente.
- [x] As peças brancas serão do jogador que iniciou a partida e as pretas, do oponente.
- [ ] O jogo de xadrez deve comunicar via socket

**Regra 7**:

- [x] A página principal de todos os usuários irá apresentar uma listagem das partidas aguardando oponentes, como na figura 4 da especificação do trabalho.
- [x] Quando o usário escolhe aceitar o desafio de um oponente, ele será direcionado para o tabuleiro da partida contra Marina, e fica com as peças pretas, que devem ser exibidas na parte debaixo do tabuleiro.

**Regra 8**:

- [x] A implentação do chat é opcional

**Regra 9**:

- [x] A opção de **Ranking** (`/ranking`) deverá mostrar uma página contendo uma listagem dos usuários com seus respectivos números de vitórias.
- [x] O ranking deve mostrar apenas usuários que já venceram ao menos uma partida e é ordenado de forma decrescente por número de vitórias.

**Regra 10:**

- [x]  Todos os acessos à aplicação deverão gerar logs através do middleware Morgan com a opção short.

**Regra 11**:

- [x]  Os pacotes **@fortawesome/fontawesome-free, jquery, popper.js e bootstrap** deverão ser instalados na aplicação. Esses pacotes serão usados pelo template da aplicação (vide regra 08). Para maiores informações sobre esses pacotes, favor consultar os slides da disciplina. 

**Regra 12**: 

- [x] O site Bootswatch – https://bootswatch.com/ – possui um conjunto de templates baseados no Bootstrap. Vá até esse site, escolha um dos temas disponíveis e instale ele em sua aplicação.

**Regra 13**: 

- [x] Deverá ser implementado um CRUD para o modelo Curso, nos moldes do que fora implementado pelo professor durante as aulas. 
- [x] As páginas do CRUD deverão usar ícones do pacote @fortawesome/fontawesome-free. Todos os formulários deverão usar o CSRF - Cross-Site Request Forgery. 