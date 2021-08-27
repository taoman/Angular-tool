/*
 * @Descripttion: 拦截器出口
 * @Author: taoman
 * @Date: 2021-08-12 15:30:12
 * @LastEditors: taoman
 * @LastEditTime: 2021-08-26 14:24:22
 */

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptorInterceptor } from './api-interceptor.interceptor';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptorInterceptor,
    multi: true,
  },
];
