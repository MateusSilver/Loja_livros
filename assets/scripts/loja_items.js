const itens = [
    {
        id: 0,
        nome: '1618',
        autor: 'Cesar Bravo',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Lady Killers',
        autor: 'Tori Telfer',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'PSICOSE',
        autor: 'Robert Bloch',
        quantidade: 0
    },
    {
        id: 3,
        nome: 'Os Suicidas',
        autor: 'Raphael Montes',
        quantidade: 0
    },
    {
        id: 4,
        nome: 'O Colecionador',
        autor: 'John Fowles',
        quantidade: 0
    }
]

inicializarLoja = () => {
    var produtos = document.getElementById('produtos-line')
    itens.map((val) => {
        produtos.innerHTML += `<div class="card">
        <div class="card_img">
            <img src="assets/img/produtos/`+ val.id + `.jpg" alt="` + val.nome + `" />
        </div>
        <h2>` + val.nome + `</h2>
        <p>`+ val.autor +`</p>
        <div class="preco">R$ 45,00</div>
        <a key="` + val.id + `" href="">Adicionar ao carrinho</a>
        </div>`;
    });
}

inicializarLoja();