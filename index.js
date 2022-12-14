function Aluno(nome, qntFaltas, notas) {
  this.nome = nome;
  this.qntFaltas = qntFaltas;
  this.notas = notas;
  this.calculaMedia = function () {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma = soma + this.notas[i];
    }
    const media = soma / this.notas.length;
    return media;
  };
  this.faltas = function () {
    this.qntFaltas += 1;
    return this.qntFaltas;
  };
}

let aluno1 = new Aluno("carlos", 3, [9, 5, 6, 4]);
let aluno2 = new Aluno("dani", 2, [9, 2, 8, 4]);
let aluno3 = new Aluno("helter", 1, [5, 5, 8, 10]);
let aluno4 = new Aluno("marcio", 0, [6, 6, 0, 3]);
let aluno5 = new Aluno("guilherme", 7, [8, 5, 6, 8]);

console.log(aluno1.calculaMedia());
console.log(aluno1.faltas());

let listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

let curso = {
  nomeCurso: "",
  notaAprovacao: 7,
  faltasMax: 5,
  listaAlunos: listaAlunos,
  novoAluno(nome, qntFaltas, notas) {
    let aluno = new Aluno(nome, qntFaltas, notas);
    this.listaAlunos.push(aluno);
  },

  consultaAluno(nome) {
    for (let i = 0; i < this.listaAlunos.length; i++) {
      const aluno = this.listaAlunos[i];
      if (aluno.nome === nome) {
        return aluno;
      }
    }
  },
  resultado(nome) {
    let aluno = this.consultaAluno(nome);
    let media = aluno.calculaMedia();
    let resultadoAluno = false;
    if (media >= this.notaAprovacao && aluno.qntFaltas < this.faltasMax) {
      console.log(`O(A) Aluno(a) ${aluno.nome} foi Aprovado(a)!`);
      resultadoAluno = true;
    } else if (
      aluno.qntFaltas === this.faltasMax &&
      media > this.notaAprovacao * 1.1
    ) {
      console.log(
        `${aluno.nome} esta com a media ${media} e ${aluno.qntFaltas} faltas.
           Aluno(a) Aprovado(a)! Apesar de ter atingido o número máximo de faltas de ${
             this.faltasMaximas
           } 
           pois sua nota foi ${media / this.notaDeAprovacao}% acima da média!`
      );
      resultadoAluno = true;
    } else {
      console.log(`O(a) ${aluno.nome} foi reprovado(a).`);
    }
    return resultadoAluno;
  },
  listaAprovados() {
    const listaAprovados = [];
    for (let i = 0; i < this.listaAlunos.length; i++) {
      const aluno = this.listaAlunos[i];
      const situacaoFinal = this.resultado(aluno.nome);
      listaAprovados.push(situacaoFinal);
    }
    return listaAprovados;
  },
};

curso.novoAluno("daniela", 4, [5, 9, 9, 9]);

console.log(curso.listaAprovados());
