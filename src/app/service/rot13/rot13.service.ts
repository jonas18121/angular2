import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Rot13Service {

  constructor() { }

  public transform(chaine: string){
    return (chaine + '').replace(/[a-zA-Z]/gi, (s) =>{
      return String.fromCharCode(s.charCodeAt(0) + (s.toLocaleLowerCase() < 'n' ? 13 : -13));
    });
  }

  public decode(chaine: string): string {
    return null;
  }
}
