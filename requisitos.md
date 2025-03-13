

https://pokeapi.co/api/v2/pokemon/ditto


Ótima ideia! Um aplicativo de Pokémon usando a **PokeAPI** é um projeto excelente para praticar **React Native** e **TypeScript**. Vamos criar um **PokerApp** que permita aos usuários explorar Pokémon, ver detalhes, buscar por nome ou tipo, e talvez até criar uma lista de favoritos. Vou definir o escopo, as tecnologias, os requisitos e as tarefas semanais para você.

---

### Escopo do Projeto:
1. **Tecnologias**:
   - **React Native** (com Expo para facilitar o desenvolvimento).
   - **TypeScript** (para tipagem estática e melhor organização do código).
   - **React Navigation** (para navegação entre telas).
   - **Axios** (para consumir a PokeAPI).
   - **AsyncStorage** (para salvar dados locais, como favoritos).
   - **Jest** e **React Native Testing Library** (para testes unitários e de integração).

2. **APIs**:
   - **PokeAPI** (https://pokeapi.co/): Será a principal fonte de dados.
   - Não precisaremos de outra API, a menos que você queira adicionar funcionalidades extras (como autenticação de usuários).

3. **Funcionalidades Principais**:
   - Listagem de Pokémon com paginação.
   - Busca de Pokémon por nome.
   - Filtro de Pokémon por tipo (ex.: fogo, água, elétrico).
   - Tela de detalhes do Pokémon (com informações como habilidades, estatísticas, tipos, etc.).
   - Funcionalidade de favoritos (salvar Pokémon localmente).
   - Design responsivo e agradável.

---

### Requisitos Funcionais:
1. **Listagem de Pokémon**:
   - Exibir uma lista de Pokémon com imagem, nome e tipo.
   - Implementar paginação para carregar mais Pokémon ao rolar a lista.

2. **Busca de Pokémon**:
   - Permitir que o usuário busque Pokémon por nome.

3. **Filtro por Tipo**:
   - Permitir que o usuário filtre Pokémon por tipo (ex.: mostrar apenas Pokémon do tipo "fogo").

4. **Detalhes do Pokémon**:
   - Ao clicar em um Pokémon, exibir uma tela com detalhes como:
     - Imagem.
     - Tipos.
     - Habilidades.
     - Estatísticas (HP, ataque, defesa, etc.).
     - Movimentos.

5. **Favoritos**:
   - Permitir que o usuário salve Pokémon como favoritos.
   - Exibir uma lista de Pokémon favoritos.

6. **Testes**:
   - Escrever testes unitários para componentes e funções utilitárias.
   - Escrever testes de integração para a navegação e chamadas à API.

---

### Requisitos Não Funcionais:
1. O código deve seguir os princípios do **Clean Code** e **SOLID**.
2. O projeto deve ser bem documentado (README.md e comentários no código).
3. O aplicativo deve ser responsivo e funcionar bem em dispositivos iOS e Android.
4. O projeto deve ser versionado no GitHub, com commits semânticos.

---

### Tarefas Semanais:
Vou dividir o projeto em sprints de uma semana. A cada semana, você terá tarefas claras e objetivos definidos.

---

#### Semana 1: Configuração do Projeto e Listagem de Pokémon
**Objetivo**: Configurar o ambiente de desenvolvimento e implementar a listagem de Pokémon.

**Tarefas**:
1. **Configuração do Projeto**:
   - Crie um repositório no GitHub.
   - Configure o projeto com **Expo** e **TypeScript**.
   - Configure o ESLint e Prettier para garantir boas práticas de código.

2. **Listagem de Pokémon**:
   - Crie uma tela para listar Pokémon.
   - Consuma a PokeAPI para buscar a lista de Pokémon.
   - Exiba o nome, imagem e tipo de cada Pokémon.
   - Implemente paginação para carregar mais Pokémon ao rolar a lista.

3. **Testes**:
   - Configure o Jest e React Native Testing Library.
   - Escreva testes para o componente de listagem.

**Tempo Estimado**: 5 dias úteis.

**Dicas**:
- Use **FlatList** para renderizar a lista de Pokémon.
- Use **axios** para consumir a PokeAPI.
- Organize o código em pastas (ex.: `components`, `services`, `utils`).

---

#### Semana 2: Busca e Filtro de Pokémon
**Objetivo**: Implementar funcionalidades de busca e filtro.

**Tarefas**:
1. **Busca de Pokémon**:
   - Adicione um campo de busca para permitir que o usuário pesquise Pokémon por nome.
   - Atualize a lista de Pokémon conforme o usuário digita.

2. **Filtro por Tipo**:
   - Adicione um seletor para filtrar Pokémon por tipo.
   - Atualize a lista de Pokémon conforme o filtro selecionado.

3. **Testes**:
   - Escreva testes para as funcionalidades de busca e filtro.

**Tempo Estimado**: 5 dias úteis.

**Dicas**:
- Use **useState** e **useEffect** para gerenciar o estado da busca e filtro.
- Consulte a documentação da PokeAPI para entender como filtrar Pokémon por tipo.

---

#### Semana 3: Detalhes do Pokémon e Favoritos
**Objetivo**: Implementar a tela de detalhes e a funcionalidade de favoritos.

**Tarefas**:
1. **Detalhes do Pokémon**:
   - Crie uma tela para exibir detalhes do Pokémon.
   - Exiba informações como imagem, tipos, habilidades, estatísticas e movimentos.

2. **Favoritos**:
   - Adicione um botão para salvar/remover Pokémon como favoritos.
   - Use **AsyncStorage** para salvar a lista de favoritos localmente.
   - Crie uma tela para exibir a lista de Pokémon favoritos.

3. **Testes**:
   - Escreva testes para a tela de detalhes e a funcionalidade de favoritos.

**Tempo Estimado**: 5 dias úteis.

**Dicas**:
- Use **React Navigation** para navegar entre a lista e a tela de detalhes.
- Use **Context API** ou **Redux** para gerenciar o estado global dos favoritos.

---

#### Semana 4: Refinamento e Publicação
**Objetivo**: Refinar o aplicativo e publicá-lo.

**Tarefas**:
1. **Refinamento**:
   - Revise o código seguindo as práticas de **Clean Code**.
   - Adicione tratamento de erros (ex.: falha na conexão com a API).
   - Melhore o design com uma biblioteca como **NativeBase** ou **React Native Paper**.

2. **Publicação**:
   - Configure o projeto para publicação no Expo.
   - Siga as instruções do Expo para publicar o aplicativo na Google Play e App Store.

3. **Documentação**:
   - Escreva um README.md claro e objetivo no repositório.
   - Documente as funcionalidades e como rodar o projeto localmente.

**Tempo Estimado**: 5 dias úteis.

---

### Como Vamos Trabalhar:
1. **Reuniões Diárias**: Vamos ter check-ins diários (por mensagem) para você me informar o progresso e tirar dúvidas.
2. **Code Reviews**: A cada entrega, vou revisar seu código e dar feedbacks.
3. **Aprendizado Contínuo**: Vou indicar artigos, vídeos e boas práticas para você estudar durante o projeto.

E aí, pronto para começar? Vamos lá! 🚀

Qualquer dúvida, é só me chamar.