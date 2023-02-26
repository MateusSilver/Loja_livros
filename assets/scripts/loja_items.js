const itens = [
    {
        id: 0,
        nome: '1618',
        autor: 'Cesar Bravo',
        preco: 70.00,
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Lady Killers',
        autor: 'Tori Telfer',
        preco: 58.00,
        quantidade: 0
    },
    {
        id: 2,
        nome: 'PSICOSE',
        autor: 'Robert Bloch',
        preco: 48.00,
        quantidade: 0
    },
    {
        id: 3,
        nome: 'Suicidas',
        autor: 'Raphael Montes',
        preco: 35.00,
        quantidade: 0
    },
    {
        id: 4,
        nome: 'O Colecionador',
        autor: 'John Fowles',
        preco: 70.00,
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
        <div class="preco">R$ ` + val.preco.toFixed(2).replace('.',',') + `</div>
        <a key="` + val.id + `" href="">Adicionar ao carrinho</a>
        </div>`;
    });
}

inicializarLoja();