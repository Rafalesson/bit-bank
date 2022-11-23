const log = console.log;
import Cliente from "./componentes/Cliente.js";
import ContaCorrente from "./componentes/Contas/ContaCorrente.js";
import ContaPoupanca from "./componentes/Contas/ContaPoupanca.js";
import ContaSalario from "./componentes/Contas/ContaSalario.js";

const cliente001 = new Cliente("Ricardo", 11122233309, 9887656);
const cliente002 = new Cliente("Alice", 88822233309, 7656787);

const ccRicardo = new ContaCorrente(0, cliente001, 1234);
const ccAlice = new ContaCorrente(0, cliente002, 4321);

const cpRicardo = new ContaPoupanca(50, cliente001, 1234);
const cpAlice = new ContaPoupanca(50, cliente002, 4321);

const csRicardo = new ContaSalario(0, cliente001, 1234);
const csAlice = new ContaSalario(0, cliente002, 4321);

ccRicardo.depositar(800);
ccRicardo.transferir(200, ccAlice);
ccRicardo.sacar(100);

cpRicardo.depositar(500);
cpRicardo.transferir(250, cpAlice);

csRicardo.depositar(1000);
csRicardo.transferir(500, csAlice);

log(csAlice);

