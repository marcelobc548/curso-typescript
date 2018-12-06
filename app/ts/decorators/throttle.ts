export function throtlle(timeout: number = 500): Function {

    return function (property: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const metodoOriginal: Function = descriptor.value;
        let timer: number = 0;

        const metodoModificado = function (...args: any[]) {
            //if (event) event.preventDefault();

            let resultadoExecucao: any;
            window.clearTimeout(timer);
            timer = window.setTimeout(() => {
                resultadoExecucao = metodoOriginal.apply(this, args);
            }, timeout);
            return resultadoExecucao;
        }

        descriptor.value = metodoModificado;
        return descriptor;
    }

}