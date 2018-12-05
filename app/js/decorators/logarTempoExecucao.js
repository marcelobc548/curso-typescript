System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoExecucao() {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                const t1 = performance.now();
                const resultadoExecucao = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`O método "${metodoOriginal.name}" executou em ${t2 - t1} ms.`);
                return resultadoExecucao;
            };
        };
    }
    exports_1("logarTempoExecucao", logarTempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
