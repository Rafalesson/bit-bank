const log = console.log;
import Cliente from "./componentes/Cliente.js";
import ContaCorrente from "./componentes/ContaCorrente.js";
import ContaPoupanca from "./componentes/ContaPoupanca.js";

const cliente001 = new Cliente("Ricardo", 11122233309, 9887656);
const cliente002 = new Cliente("Alice", 88822233309, 7656787);

const ccRicardo = new ContaCorrente(0, cliente001, 1234);
const ccAlice = new ContaCorrente(0, cliente002, 4321);

const cpRicardo = new ContaPoupanca(50, cliente001, 1234);
const cpAlice = new ContaPoupanca(50, cliente002, 4321);

ccRicardo.depositar(800);
ccRicardo.transferir(200, ccAlice);
ccRicardo.sacar(100);

log(ccRicardo);

