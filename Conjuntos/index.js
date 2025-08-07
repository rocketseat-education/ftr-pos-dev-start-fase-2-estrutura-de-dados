const alunosRobotica = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];
const alunosDebate = ['Carlos', 'Fernanda', 'Gabriel', 'Ana', 'Henrique'];

const setRobotica = new Set(alunosRobotica);
const setDebate = new Set(alunosDebate);

function uniao(setA, setB) {
  return new Set([...setA, ...setB]);
}

function intersecao(setA, setB) {
    return new Set([...setA].filter(aluno => setB.has(aluno)));
}

function diferenca(setA, setB) {
    return new Set([...setA].filter(aluno => !setB.has(aluno)));
}

console.log("União:", uniao(setRobotica, setDebate));

console.log("Interseção:", intersecao(setRobotica, setDebate));

console.log("Diferença (Robótica, mas não debate):", diferenca(setRobotica, setDebate));

console.log("Diferença (Debate, mas não robótica):", diferenca(setDebate, setRobotica));
