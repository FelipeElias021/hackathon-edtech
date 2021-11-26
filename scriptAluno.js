const inputNome = document.querySelector('#nome');
const inputRelato = document.querySelector('#relato');
inputNome.focus();
const nomeCrianca = [];
const relatoCrianca = [];

document.querySelector('#enviar').addEventListener("click", e => {
    if (inputNome.value != '' && inputRelato.value != '') {
        document.querySelector('.balao').innerHTML = "<p>Olá amigo!</p><br><p>Meu nome é Jimmy,</p><br><p>Qual é o seu nome?</p>";
        nomeCrianca.push(inputNome.value);
        relatoCrianca.push(inputRelato.value);
    } else {
        document.querySelector('.balao').innerHTML = "<p>Digite algo nos campos</p>"
    }
    for (i = 0; i < 10; i++) {
        console.log(nomeCrianca[i]);
        console.log(relatoCrianca[i]);
    }
    inputNome.focus();
    inputNome.value = '';
    inputRelato.value = '';
});
