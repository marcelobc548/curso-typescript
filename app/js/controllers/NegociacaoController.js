System.register(["../views/index.js", "../models/index.js", "../util/index.js", "../decorators/index.js", "../services/index.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_js_1, index_js_2, index_js_3, index_js_4, index_js_5, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            },
            function (index_js_2_1) {
                index_js_2 = index_js_2_1;
            },
            function (index_js_3_1) {
                index_js_3 = index_js_3_1;
            },
            function (index_js_4_1) {
                index_js_4 = index_js_4_1;
            },
            function (index_js_5_1) {
                index_js_5 = index_js_5_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_js_2.Negociacoes();
                    this._negociacoesView = new index_js_1.NegociacoesView("#negociacoesView");
                    this._mensagemView = new index_js_1.MensagemView("#mensagemView");
                    this._negociacaoService = new index_js_5.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    let data = index_js_3.DateUtil.toDate(this._inputData.val());
                    if (!index_js_3.DateUtil.ehDiaUtil(data)) {
                        this._mensagemView.update("Não são permitidas negociações em sábados ou domingos.");
                        return;
                    }
                    const negociacao = new index_js_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso.");
                }
                importarDados() {
                    const houveErro = function (res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    };
                    this._negociacaoService.obterNegociacoes(houveErro)
                        .then(negociacoes => {
                        negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    })
                        .catch(err => console.log(err.message));
                }
            };
            __decorate([
                index_js_4.injetarDom("#data")
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_js_4.injetarDom("#quantidade")
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_js_4.injetarDom("#valor")
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_js_4.throtlle()
            ], NegociacaoController.prototype, "importarDados", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
