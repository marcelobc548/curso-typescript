import { NegociacaoController } from "./controllers/NegociacaoController";

alert("oi");

const negociacaoController = new NegociacaoController();
$(".form").submit(negociacaoController.adiciona.bind(negociacaoController));