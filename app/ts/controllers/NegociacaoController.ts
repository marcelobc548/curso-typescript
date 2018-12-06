import { MensagemView, NegociacoesView } from "../views/index.js";
import { Negociacao, NegociacaoWeb, Negociacoes } from "../models/index.js";
import { DateUtil } from "../util/index.js";
import { injetarDom, throtlle } from "../decorators/index.js";
import { NegociacaoService, ErrorHandler } from "../services/index.js";

export class NegociacaoController {

    @injetarDom("#data")
    private _inputData: JQuery;
    @injetarDom("#quantidade")
    private _inputQuantidade: JQuery;
    @injetarDom("#valor")
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");
    private _negociacaoService = new NegociacaoService();

    constructor() {
        // this._inputData = $("#data");
        // this._inputQuantidade = $("#quantidade");
        // this._inputValor = $("#valor");
        this._negociacoesView.update(this._negociacoes);
    }

    //@throtlle()
    adicionar(event: Event) {
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

    @throtlle()
    async importarDados() {

        const houveErro: ErrorHandler = function (res: Response): Response {
            if (res.ok) {
                return res;
            }
            else {
                throw new Error(res.statusText);
            }
        }

        try {
            const negociacoes = await this._negociacaoService.obterNegociacoes(houveErro);
            negociacoes.forEach(
                negociacao => this._negociacoes.adiciona(negociacao)
            );
            this._negociacoesView.update(this._negociacoes);
        }
        catch (erro) {
            this._mensagemView.update(erro.message);
        }

        // .then(
        //     negociacoes => {
        //         negociacoes.forEach(
        //             negociacao => this._negociacoes.adiciona(negociacao)
        //         );
        //         this._negociacoesView.update(this._negociacoes);
        //     }
        // )
        // .catch(err => console.log(err.message));

    }

}
