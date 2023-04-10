class Jogo {
  constructor(mandante, visitante, ocorreu) {
    this.mandante = mandante;
    this.visitante = visitante;
    this.ocorreu = ocorreu;
  }
}
let jogo1 = new Jogo("sao paulo", "flamego","Maracanã");
console.log(jogo1);
let jogo2 = new Jogo("bahia", "flamego", "Maracanã");
console.log(jogo2);

class Jogador {
  constructor(numero, gols, nome) {
    this.numero = numero;
    this.gols = gols;
    this.nome = nome;
  }
}
let jogador1 = new Jogador("12", "278", "Juquinha"); alert(jogador1);

class Time {
  constructor(nome, uniforme, local) {
    this.nome = nome;
    this.uniforme = uniforme;
    this.local = local;
  }
}
let time1 = new Time("São Paulo", 2, "São Paulo"); console.log(time1);
let time2 = new Time("Flamengo", 1, "Rio de janeiro"); console.log(time2)

class Estadio{
  constructor(nomeDoEstadio, localizacao, capacidade){
    this.nomeDoEstadio = nomeDoEstadio;
    this.localizacao = localizacao;
    this.capacidade = capacidade;
  }
}

let estadio1 = new Estadio("Morumbi", "São Paulo, Brasil","67 mil espectadores");
console.log(estadio1);

let estadio2 = new Estadio("Maracanã", "Rio de Janeiro, Brasil","78 mil espectadores");
console.log(estadio2);

class Arbitro{
  constructor(nome, idade, experiencia){
    this.nome = nome;
    this.idade = idade;
    this.experiencia = experiencia;
  }
}

let arbitro1 = new Arbitro("João", 40, "7 anos");
console.log(arbitro1)

let arbitro2 = new Arbitro("José", 43, "9 anos");
console.log(arbitro2)