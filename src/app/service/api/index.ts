/*
 * @Descripttion: 基本接口类型
 * @Author: taoman
 * @Date: 2021-08-11 14:38:11
 * @LastEditors: taoman
 * @LastEditTime: 2021-08-12 13:18:36
 */
import { HttpClientModule } from '@angular/common/http';
// export namespace ApiType{

// }
export class ApiBase{
    constructor(baseUrl:string){
        this._baseUrl = baseUrl
    }
    protected _baseUrl: string;
}
