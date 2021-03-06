import { Negociacao, NegociacaoWeb } from "../models/index.js";

export class NegociacaoService {

    obterNegociacoes(errorHandler: ErrorHandler): Promise<Negociacao[]> {
        return <Promise<Negociacao[]>>window.fetch("http://localhost:8080/dados")
            .then(res => errorHandler(res))
            .then(res => res.json())
            .then(
                (dados: NegociacaoWeb[]) => dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(
                err => {
                    console.log(err.message);
                    throw new Error("Não foi possível importar os dados.");
                }
            );
    }

}

export interface ErrorHandler {

    (response: Response): Response;

}