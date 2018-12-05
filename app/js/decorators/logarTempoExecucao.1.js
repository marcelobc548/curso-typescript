System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoExecucao(mostrarParametros = false, mostrarRetorno = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                const t1 = performance.now();
                const resultadoExecucao = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`------ Execução do método "${metodoOriginal.name}" ------`);
                if (mostrarParametros) {
                    console.log(`--- Parâmetros : ${JSON.stringify(args)}.`);
                }
                if (mostrarRetorno) {
                    console.log(`--- Retorno : ${JSON.stringify(resultadoExecucao)}.`);
                }
                console.log(`--- Tempo de execução : ${t2 - t1} ms.`);
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
