System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throtlle(timeout = 500) {
        return function (property, key, descriptor) {
            const metodoOriginal = descriptor.value;
            let timer = 0;
            const metodoModificado = function (...args) {
                let resultadoExecucao;
                window.clearTimeout(timer);
                timer = window.setTimeout(() => {
                    resultadoExecucao = metodoOriginal.apply(this, args);
                }, timeout);
                return resultadoExecucao;
            };
            descriptor.value = metodoModificado;
            return descriptor;
        };
    }
    exports_1("throtlle", throtlle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
