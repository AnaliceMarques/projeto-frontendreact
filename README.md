# Introdução

Space T&D - Travel and Discover é um e-commerce que oferece viagens espaciais e uma opção de experiência com a gravidade 0.

Na tela inicial é exibido todas as opções disponíveis, e o usuário pode filtrar os produtos por nome, valor máximo e valor mínimo, e a medida que o usuário vai digitando nos campos de filtragem a quantidade de produtos vai sendo atualizada e mostrada na tela. O usuário também pode ordernar os itens em ordem crescente e decrescente de nome e preço. Os filtros e a ordenação podem ser usados em conjunto e para o usuário voltar a visualização inicial é só limpar os campos de digitação dos filtros e na ordenação deixar na opção "Escolher".

No card que mostra os produtos temos uma imagem representando a viagem/experiência, o nome, o preço, um botão "Detalhes" para verificar os detalhes do produto e um botão "Adicionar" para adiconar ao carrinho.

Quando o botão "Detalhes" for clicado o card será modificado e mostrará o nome, a categoria (viagem ou experiência), a duração, o preço, um botão "Voltar" para voltar para a forma inicial do card e o outro "Adicionar" que também consegue adicionar a viagem no carrinho.

Quando o produto for adicionado no carrinho será exibido na seção do carrinho a imagem, o nome, e o preço do produto, um botão "+" para adicionar mais uma unidade do produto ao carrinho, um botão "-" para remover uma unidade do carrinho, e caso a quantidade esteja em 1 e o usuário clique neste botão, o produto será removido do carrinho, o usuário também pode remover o produto do carrinho clicando no ícone da lixeira, que removerá todo o item do carrinho, independente da quantidade que ele tenha. Também será exibido o valor total de cada produto, considerando a quantidade de cada um e o valor total do carrinho, que será a soma do valor total de todos os produtos.

O usuário consegue adicionar mais uma unidade do produto apertando no botão "+" que fica no carrinho ou apertando no botão "Adicionar" que fica no card do produto, cada item tem uma quantidade limite de vagas disponível e caso o usuário queira adicionar mais itens do que o disponível será exibido um alert avisando que a quantidade máxima foi atingida e que não é possível adicionar mais desse item ao carrinho. Caso o usuário atualize a página as informações do carrinho não serão perdidas.

Link para acessar a página:
http://spaceted.vercel.app

# Descrição

Projeto criado com Create App React e estilizado com styled-components;
npm install: Instala todas as dependências listadas no package.json;
npm run start: Roda a aplicação;

# projeto-frontendreact

Esse é o projeto de introdução aos fundamentos do React. Aqui, vamos praticar a estrutura do que consideramos a estrutura do React. O objetivo é que funcione como o front-end de um E-Commerce

- JSX
- Componentes
- Props
- Estado
- Fluxo de dados no React
- Renderização de listas
- Renderização condicional
- localStorage

## Instruções

O Astrodev deixou um testamento e essa foi a herança deixada pra vocês:

```
Estudantes do meu coração,
Estou querendo montar um e-commerce de itens espaciais e vocês serão responsáveis por essa construção.
Pretendo montar diferentes linhas de produtos.

As possíveis linhas de produto são:
- Satélites antigos;
- Roupas espaciais;
- Camisetas com estampas divertidas relacionadas ao espaço;
- Viagens espaciais;
- Meteoritos / aerolitos como pedras preciosas;
- Brinquedos e produtos infantis temáticos;
- Naves / Foguetes / Ônibus espaciais;

Escolham uma linha dentre essas, e criem um e-commerce de acordo com a lista de requisitos.


Att.
```

# Requisitos

O projeto consistirá em 3 grandes partes:

1. Home
   - Mostrando todos os produtos
   - Deve haver alguma forma de ordenar os produtos por ordem crescente ou decrescente de preço (pode ser na home em si ou junto dos filtros)
   - Produtos:
     - Devem ter um botão que permita adicioná-los ao carrinho
     - Devem exibir o nome, preço e imagem em um card
2. Carrinho
   - Mostrar todos os produtos e quantidades adicionadas
   - Capacidade de remover itens do carrinho
   - Mostrar o valor total do carrinho
3. Filtro
   - Por valor mínimo e máximo
   - Por nome do produto

Exemplo de estruturação de **UM** produto (Lembrem-se que vocês terão uma lista contendo todos):

```jsx
{
	id: 1,
	name: "Foguete da Missão Apollo 11",
	value: 10000.0,
	imageUrl: "https://picsum.photos/200/200",
}
```

### Lista de Requisitos

- Home (Lista de Produtos)
  - [ ] O usuário deve ser capaz de visualizar uma lista de produtos
  - [ ] O usuário deve ser capaz de visualizar os dados do produto (nome, preço e imagem)
  - [ ] O usuário deve ser capaz de adicionar um produto no carrinho
- Carrinho
  - [ ] O usuário deve ser capaz de visualizar os produtos adicionados
  - [ ] O usuário deve ser capaz de visualizar a quantidade correta de cada produto
  - [ ] O usuário deve ser capaz de remover itens do carrinho
  - [ ] O usuário deve ser capaz de ver corretamente o valor total de sua compra
  - [ ] Quando a página é atualizada, os itens devem continuar no carrinho
- Filtros e Ordenação
  - [ ] O usuário deve ser capaz de filtrar os itens por preço mínimo
  - [ ] O usuário deve ser capaz de filtrar os itens por preço máximo
  - [ ] O usuário deve ser capaz de realizar uma busca por nome
  - [ ] O usuário deve ser capaz de ordenar os itens em ordem crescente ou decrescente
  - [ ] O usuário deve ser capaz de adicionar filtros, busca e ordenação simultaneamente
  - [ ] O usuário deve ser capaz de retornar à visualização sem filtros

###

O layout da página é escolha de vocês! O exemplo abaixo é só uma implementação bemmm simples das funcionalidades, não se atenham a ele.

http://fluttering-coast.surge.sh/

https://user-images.githubusercontent.com/11279432/197185533-14582ca3-9eb0-4a5a-b57c-b94913ff2dd6.mp4

### Conseguiu terminar? Aqui temos alguns **desafios**

1. Salvar e Recuperar conteúdo do carrinho usando o `LocalStorage`;
2. Dediquem um tempo para melhorar o layout e a usabilidade do seu site! Se baseiem em outros e-commerces que vocês gostam para chegar em um resultado mais próximo do padrão de design visto no mercado;
3. Se TODO O RESTO DO SITE e os dois desafios anteriores estiverem funcionando, pensem: qual outra funcionalidade está faltando? Decidam o que vocês concordam que poderia ser uma boa adição à loja virtual (pode ser qualquer funcionalidade, desde que vocês consigam implementá-la). Todas as funcionalidades extras implementadas devem ser listadas e explicadas no readme do projeto para que possam ser avaliadas.

## Entrega

- Faça o fork desse repositório e realize o clone da sua cópia `seu-nome-de-usuario/projeto-frontendreact`.
   <details>
   <summary>Quer uma dica?</summary>
   <img src="https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/gerais%2Ffork.png?alt=media&token=7030e997-246a-41fe-a75f-2a2ced61e54d" alt="Como adicionar o projeto no repositório"/>
   </details>
- Crie os arquivos do projeto dentro deste repo;
- Execute o fluxo de entrega do git. **Lembre-se de abrir os PRs para seu próprio repositório.**
- Para isso, você precisará fazer o projeto utilizando **branches**. Evite fazer as alterações direto na branch `main`
    <details>
       <summary>Dúvidas sobre o Git & Github?</summary>
       <p>Adiciomos um vídeo explicando o <strong>processo de entrega</strong> [do fork ao pull request] no Material Assincrono da <a href="https://classroom.google.com/w/NTM0NjA2NDg3MjIx/tc/NTM2NDg5NTQyODg4">A005 - Git e Github</a>. Esse vídeo também exemplifica situações que podem acontecer durante o fluxo de utilização do Git.</p>
    </details>
- Entregue o **link do repo** no [Formulário de entrega](https://forms.gle/S9XChPZravP3WdxL6)
- Utilize o **surge** para fazer o deploy do seu projeto.
