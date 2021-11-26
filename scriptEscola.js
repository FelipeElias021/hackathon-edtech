const nomeCrianca = ["Otávio","João Flávio","Júlia","Maria Clara"];
const relatoCrianca = ["Todo dia o meninos me chamam de Otário",
"Os meninos da minha sala vivem me xingando, não sei por que",
"As meninas ficam me ignorando e não querem ser minhas amigas porque ela dizem que sou muito feia",
"Meus pais estão morando em casas diferentes, e eles fican no meu ouvindo o dia inteiro falando mal um do outro"];

function listar() {
    const output = document.querySelector(".cards");
    for (let i in nomeCrianca) {
        output.innerHTML += `<div class="card"><h2>Aluno(a): ${nomeCrianca[i]}</h2><p> ${relatoCrianca[i]}</p><div><button>Responder</button></div><div>`;
    }
    document.querySelector(".search").addEventListener("click", e => {
        for (let i in nomeCrianca) {
            if (document.querySelector("#pesquisa").value == nomeCrianca[i]) {
                output.innerHTML = `<div class="card"><h2>Aluno(a): ${nomeCrianca[i]}</h2><p> ${relatoCrianca[i]}</p><div><button>Responder</button></div><div>`;
            }
        }
    });
}

listar();