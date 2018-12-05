System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function injetarDom(seletorComponente) {
        return function (property, key, descriptor) {
            let componente;
            const getter = function () {
                if (!componente) {
                    console.log(`Buscando o elemento do DOM (com o seletor "${seletorComponente}") para injetar em ${key} ...`);
                    componente = $(seletorComponente);
                }
                return componente;
            };
            Object.defineProperty(property, key, { get: getter });
        };
    }
    exports_1("injetarDom", injetarDom);
    return {
        setters: [],
        execute: function () {
        }
    };
});
