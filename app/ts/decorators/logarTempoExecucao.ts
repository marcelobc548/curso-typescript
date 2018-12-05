export function logarTempoExecucao(mostrarParametros: boolean = false, mostrarRetorno: boolean = false): Function {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
        const metodoOriginal = descriptor.value;
        //
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now();
            const resultadoExecucao = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            //
            console.log(`------ Execução do método "${metodoOriginal.name}" ------`);
            if (mostrarParametros) {
                console.log(`--- Parâmetros : ${JSON.stringify(args)}.`);
            }
            if (mostrarRetorno) {
                console.log(`--- Retorno : ${JSON.stringify(resultadoExecucao)}.`);
            }
            console.log(`--- Tempo de execução : ${t2 - t1} ms.`);
            //
            return resultadoExecucao;
        };
    }

}