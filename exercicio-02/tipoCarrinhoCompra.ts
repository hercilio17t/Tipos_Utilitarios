/*
Problema
No arquivo tipoCarrinhoCompra.ts, dentro da pasta referente à essa questão, 
foi implementado um tipo para ser usado nas funções que fazem a gestão do carrinho de compras de um site. 
Porém, a estrutura do tipo não tinha o endereço de entrega, e a propriedade tipoTransacao, que tem um tipo literal, 
precisa ser padronizada para que aceite apenas caracteres minúsculos.

Como precisamos manter a integridade do projeto e o tipo já foi usado em outras funções no projeto, 
implemente um novo tipo, partindo do atual, e adicione uma propriedade endereco, que receberá um objeto com o formato abaixo. 
Manipule o tipo da propriedade tipoTransacao para aceitar apenas caracteres minúsculos.

cep
rua
bairro
cidade
estado
*/

type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
    tipoTransacao: 'credito' | 'debito',
    endereco: Endereco
}
