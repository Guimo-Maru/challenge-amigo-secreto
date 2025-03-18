const amigoEntrada = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultadoLista = document.getElementById('resultado');
let nomes = [];

// função para adicionar os amigos na lista
function adicionarAmigo() {
    const nome = amigoEntrada.value.trim();
    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    nomes.push(nome);
    const li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);
    amigoEntrada.value = '';
}

// Função para sortear os amigos, a partir de 2 amigos adicionados na lista
function sortearAmigo() {
    if (nomes.length < 2) {
        alert('Por favor, adicione pelo menos dois nomes para o sorteio.');
        return;
    }

    const amigoSecreto = sortearAmigoUnico(nomes);
    resultadoLista.innerHTML = ''; // Essa linha limpa os resultados anteriores
    const li = document.createElement('li');
    li.textContent = `Seu amigo secreto é: ${amigoSecreto}`;
    resultadoLista.appendChild(li);

    // Limpa a lista de nomes e o array
    nomes = [];
    listaAmigos.innerHTML = '';
}

function sortearAmigoUnico(lista) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}