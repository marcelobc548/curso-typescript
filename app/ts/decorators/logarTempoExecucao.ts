export function logarTempoExecucao(): Function {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
        const metodoOriginal = descriptor.value;
        //
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now();
            const resultadoExecucao = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O método "${metodoOriginal.name}" executou em ${t2 - t1} ms.`);
            //
            return resultadoExecucao;
        };
    }

}