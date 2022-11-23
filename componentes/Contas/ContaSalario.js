import Conta from "./Conta.js";

class ContaSalario extends Conta {
  constructor(saldo, cliente, agencia) {
    super(saldo, cliente, agencia);
  }

  sacar(valor) {
    const taxa = 1.01;
    return this._sacar(valor, taxa);
  }
}

export default ContaSalario;
