import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {

    if (texto === '') {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

    return arreglo.filter(item => {

      if (item.campus.toLowerCase().includes(texto)) {
        return item.campus.toLowerCase().includes(texto);
      }

      if (item.espacio.toLowerCase().includes(texto)) {
        return item.espacio.toLowerCase().includes(texto);
      }

      if (item.autores[0].nombres.toLowerCase().includes(texto)) {
        return item.autores[0].nombres.toLowerCase().includes(texto);
      }

    });

  }

}
