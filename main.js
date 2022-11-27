const log = console.log;
import Cliente from "./componentes/Cliente.js";
import Gerente from "./componentes/Funcionarios/Gerente.js";
import Diretor from "./componentes/Funcionarios/Diretor.js";
import SistemaAutenticacao from "./componentes/SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha(123456)
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha(123)
const cliente = new Cliente("Lais", 78945612379, "456");

const diretorLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteLogado = SistemaAutenticacao.login(gerente, '123');
const clienteLogado = SistemaAutenticacao.login(cliente, '456');

log(clienteLogado, gerenteLogado, diretorLogado);
