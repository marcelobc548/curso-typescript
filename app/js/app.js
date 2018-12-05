System.register(["./controllers/NegociacaoController.js"], function (exports_1, context_1) {
    "use strict";
    var NegociacaoController_js_1, negociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegociacaoController_js_1_1) {
                NegociacaoController_js_1 = NegociacaoController_js_1_1;
            }
        ],
        execute: function () {
            negociacaoController = new NegociacaoController_js_1.NegociacaoController();
            $(".form").submit(negociacaoController.adicionar.bind(negociacaoController));
            $("#btn-importar").click(negociacaoController.importarDados.bind(negociacaoController));
        }
    };
});
