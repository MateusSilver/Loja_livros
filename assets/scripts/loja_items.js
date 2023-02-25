const itens = [
    {
        id: 0,
        nome: '1618',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Lady Killers',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'PSICOSE',
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore ex explicabo, nesciunt molestias perferendis aliquid! Nemo, optio repellat voluptate quia tempora perspiciatis aspernatur, laudantium atque praesentium corrupti officiis ipsum.</p>
        <div class="preco">R$ 45,00</div>
        <a key="` + val.id + `" href="">Adicionar ao carrinho</a>
        </div>`;
    });
}

inicializarLoja();