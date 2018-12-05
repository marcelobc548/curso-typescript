import { Negociacao } from "./Negociacao.js";

export class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        //return ([] as Negociacao[]).concat(this._negociacoes);
        return new Array<Negociacao>().concat(this._negociacoes);
    }

}