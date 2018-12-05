import { MensagemView, NegociacoesView } from "../views/index.js";
import { Negociacao, Negociacoes } from "../models/index.js";
import { DateUtil } from "../util/index.js"
import { logarTempoExecucao } from "../decorators/index.js";

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoesView.update(this._negociacoes);
    }

    @logarTempoExecucao()
    adiciona(event: Event): void {
        event.preventDefault();

        let data = DateUtil.toDate(<string>this._inputData.val());
        if (!DateUtil.ehDiaUtil(data)) {
            this._mensagemView.update("Não são permitidas negociações em sábados ou domingos.");
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(<string>this._inputQuantidade.val()),
            parseFloat(<string>this._inputValor.val()),
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso.");
    }

}
