const aluno = {
    nome: "João",
    idade: 20,
    curso: "Engenharia de Software",
    genero: "Masculino",
}

aluno.idade = 21;

console.log(aluno);

delete aluno.genero;

console.log(aluno);