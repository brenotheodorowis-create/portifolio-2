let nota1tri;
let nota2tri;
let nota3tri;

function calcular() {
    nota1tri - Number(prompt("Digite a nota do primeiro trimestre"));
    nota2tri - Number(prompt("Digite a nota do segundo trimestre"));

    resultado - 180 - (nota1tri + nota2tri)

    if(resultado <= 0){
        alert("Parabéns! Você está aprovado");
    } else {
        alert("Você ainda precisa tirar "+ resultado +" no terceiro trimestre para ser aprovado. Estude! ")
    }
}