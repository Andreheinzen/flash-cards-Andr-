function criaCartao(categoria, pergunta, resposta){ 
let container = document.getElementById('container');
let cartao = document.createElement('article');
cartao.className = 'cartao';

cartao.innerHTML = `
<div class="cartao__conteudo">
                    <h3>${desenhos animados}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${Qual é o nome do cãozinho companheiro do Mickey Mouse}</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${pluto}</p>
                    </div>
                </div>
     `
container.appendChild(cartao);
    }
