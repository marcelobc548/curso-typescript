export class DateUtil {

    private constructor() { }

    static toDate(date: string): Date {
        let array: string[] = date.split("-");
        return new Date(parseInt(array[0].trim()), parseInt(array[1].trim()) - 1, parseInt(array[2].trim()));
    }

    static toString(date: Date): string {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }

    static ehDiaUtil(data: Date): boolean {
        return ((data.getDay() != DiaDaSemana.Sabado) && (data.getDay() != DiaDaSemana.Domingo));
    }


}

export enum DiaDaSemana {

    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado

}