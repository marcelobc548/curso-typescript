export abstract class View<T> {

    private _elemento: JQuery;

    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    update(mensagem: T): void {
        this._elemento.html(this.template(mensagem));
    }

    protected abstract template(mensagem: T): string;

}