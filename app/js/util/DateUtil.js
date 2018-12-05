System.register([], function (exports_1, context_1) {
    "use strict";
    var DateUtil, DiaDaSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            DateUtil = class DateUtil {
                constructor() { }
                static toDate(date) {
                    let array = date.split("-");
                    return new Date(parseInt(array[0].trim()), parseInt(array[1].trim()) - 1, parseInt(array[2].trim()));
                }
                static toString(date) {
                    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
                }
                static ehDiaUtil(data) {
                    return ((data.getDay() != DiaDaSemana.Sabado) && (data.getDay() != DiaDaSemana.Domingo));
                }
            };
            exports_1("DateUtil", DateUtil);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
            exports_1("DiaDaSemana", DiaDaSemana);
        }
    };
});
