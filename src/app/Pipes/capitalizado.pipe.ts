import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
    //puedes enviar varios datops y el args lo agarrara
     transform(value: any, args1, args2, args3, todas: boolean): any {
        console.log(value);
        console.log(args1);
        console.log(args2);
        console.log(args3);
        value = value.toLowerCase();
        let nombres = value.split(" ");
    if(todas){
        for( let i in nombres ){
            nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
        }
    } else {
        nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
            return nombres.join(" ");
    }
   
}