let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value.trim();
    // Verifica se o campo está vazio
    if (amigo == ''){
        alert('Digite o nome de um amigo');
        return;
    }
    // Verifica se o amigo já foi adicionado
    if(amigos.includes(amigo)){
        alert('Amigo já adicionado');
        return;
    }
    //adiciona o amigo no array
    amigos.push(amigo);
    console.log(amigos);
    document.getElementById('amigo').value = '';

    listarAmigos();
}

function listarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista
    // Percorre o array de amigos e adiciona na lista
    for (let i = 0; i < amigos.length; i++){
        console.log(amigos[i]);
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigos.length <= 2){
        alert('Adicione mais amigos para sortear');
        return;
    }
// Sorteia um índice do array de amigos
  let indiceSorteio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteio];
   document.getElementById("resultado").innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
    
}

    