const nomeCrianca = ["Otávio","João Flávio","Júlia","Maria Clara"];
const recomendacoes = ["Olá, senhor Gilberto, seu filho relatou que algumas crianças estão fazendo trocadilhos com o nome do seu filho, a escola vai tomar as medidas cabivéis a nós e recomendo que o senhos fale com ele, mostrando como seu nome é bonito, e que não precisa se sentir envergonhado",
"Olá senhora Joana. Seu filhou nos contou que anda sofrendo ataques verbais na escola, por parte do colégio vamos conversar com os outros pais e orientar a criança, e recomendamos uma conversa com seu filho e fala com ele sobre como ele está se sentindo em relação a isso",
"Olá, senhor Dyoni. Sua filha relatou problemas em relação a auto estima dela, nós do colégio vamos ajudá-la, mas também recomendamos sua colaboração para brincar com ela, mostrar sua beleza.",
"Olá, senhor Jorge e senhora Jéssica, sua filha relatou problemas dentro de casa sobre a dificuldade de morar em 2 casas, aqui na escola nós vamos dar o apoio para ela, mas precisamos que vocês achem um jeito para ficar confortável para ela, e não ficar jogando um contra o outro."];

function listar() {
    const output = document.querySelector(".cards");
    document.querySelector(".search").addEventListener("click", e => {
        
        for (let i in nomeCrianca) {
            if (document.querySelector("#pesquisa").value == nomeCrianca[i]) {
                output.innerHTML = `<div class="card"><h2>Aluno(a): ${nomeCrianca[i]}</h2><p> ${recomendacoes[i]}</p></div>`;
                document.querySelector('.user').innerHTML = `<img src="img/${nomeCrianca[i]}.jpg" alt="Pic" style="border-radius: 100px;"> <p style="color: white;"><strong>Aluno(a): ${nomeCrianca[i]}</strong></p> <p style="color: #6ebfc9;">Colégio Origi</p>`
            }
        }
    });
}

listar();