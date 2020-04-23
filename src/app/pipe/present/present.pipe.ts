import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'present'
})
export class PresentPipe implements PipeTransform {

  transform(liste: any[], ...args: any[]): any[] {
    const [present = true] = args;

    if (present) {
      return liste.filter( user => user.present );
      /**
       * liste.filter( user => {
       *   /*if( user.present ){
       *     return true;
       *   }
       *
       *    return false*//*
       *
       *    return use.present;
       * });
       */
    }

    return liste.filter( user => !user.present );
  }

}
