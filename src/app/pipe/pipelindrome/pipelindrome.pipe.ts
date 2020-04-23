import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelindrome'
})
export class PipelindromePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return [...value].reverse().join('');
  }

}
