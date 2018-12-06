System.register(["../models/index.js"], function (exports_1, context_1) {
    "use strict";
    var index_js_1, NegociacaoService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                obterNegociacoes(errorHandler) {
                    return window.fetch("http://localhost:8080/dados")
                        .then(res => errorHandler(res))
                        .then(res => res.json())
                        .then((dados) => dados.map(dado => new index_js_1.Negociacao(new Date(), dado.vezes, dado.montante)))
                        .catch(err => console.log(err.message));
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
