import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  getPublicKey() {
    return this.http.get(environment.api + 'publickey');
  }


  sendForm( data: any ) {
    return this.http.post(environment.api + 'saveform', data);
  }

}
