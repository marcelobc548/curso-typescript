export abstract class View<T> {

    private _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar?: boolean) {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(mensagem: T): void {
        let template = this.template(mensagem);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
        }
        this._elemento.html(template);
    }

    protected abstract template(mensagem: T): string;

}