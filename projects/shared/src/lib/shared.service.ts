import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
 
  /* */
  public getSharedServiceContent():string {
    return 'version two';
  }

}
