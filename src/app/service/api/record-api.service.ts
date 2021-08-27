import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBase  } from '.';
import { combineLatest, of } from 'rxjs';
import {RecordInterface} from '../../interface/record-interface'
import {ResponseInterface} from '../../interface/user-interface'
@Injectable({
  providedIn: 'root'
})
export class RecordApiService extends ApiBase{

  constructor(private http:HttpClient) {
    super('/records')
  }
  index(user_id:number){
    return this.http.get<RecordInterface.IndexInterface>(this._baseUrl+`/${user_id}`)
  }
  store(data:RecordInterface.StoreParams){
    return this.http.post<ResponseInterface>('/reCreate',{...data})
  }
}
