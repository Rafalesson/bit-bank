const log = console.log;
import Cliente from "./componentes/Cliente.js";
import ContaCorrente from "./componentes/ContaCorrente.js";

const cliente001 = new Cliente("Ricardo", 11122233309, 9887656);
const cliente002 = new Cliente("Alice", 88822233309, 7656787);

const ccRicardo = new ContaCorrente(cliente001 ,1001, 1234, 0);
const ccAlice = new ContaCorrente(cliente002, 1001, 4321, 0);

ccRicardo.depositar(800);
ccRicardo.transferir(200, ccAlice);
ccRicardo.sacar(100);

log(ContaCorrente.numeroDeContas);
// log(ccAlice);
