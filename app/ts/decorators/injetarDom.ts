export function injetarDom(seletorComponente: string): Function {

    return function (property: any, key: string, descriptor: PropertyDescriptor): void {
        let componente: JQuery;
        //
        const getter = function (): JQuery {
            if (!componente) {
                console.log(`Buscando o elemento do DOM (com o seletor "${seletorComponente}") para injetar em ${key} ...`);
                componente = $(seletorComponente);
            }
            return componente;
        }
        //
        Object.defineProperty(property, key, { get: getter });
    }

}