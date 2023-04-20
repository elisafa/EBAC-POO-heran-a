function Dev(nome) {
  this.nome = nome;

  this.saudacao = function () {
    console.log(`Olá, sou programador(a) e me chamo ${this.nome}.`);
  };
}

function FrontendDev(nome, principalLinguagem, framework) {
  this.nome = nome;
  this.principalLinguagem = principalLinguagem;
  this.framework = framework;

  Dev.call(this, nome);
}

function BackendDev(nome, principalLinguagem, bancoDeDados) {
  this.nome = nome;
  this.principalLinguagem = principalLinguagem;
  this.bancoDeDados = bancoDeDados;

  Dev.call(this, nome);
}

const frontend1 = new FrontendDev("João", "JavaScript", "React");
const frontend2 = new FrontendDev("Severina", "Python", "django");

const backend1 = new BackendDev("Maria", "Java", "MySQL");
const backend2 = new BackendDev("Maria", "C#", "SQL Server");

console.log(frontend1);
frontend1.saudacao();
console.log(frontend2);
frontend2.saudacao();

console.log(backend1);
backend1.saudacao();
console.log(backend2);
backend2.saudacao();
