import { View } from "./View";

export class MensagemView extends View<string>{

    protected template(mensagem: string): string {
        return `<p class="alert alert-info">${mensagem}</p>`;
    }

}