import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private servers=[{id:1,name:'Production Server',status:'Online'},
  {id:2,name:'Test Server',status:'Offline'},
  {id:3,name:'Database Server',status:'Online']

  constructor() { }
}
