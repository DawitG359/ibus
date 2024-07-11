import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResourceEndpointService } from 'src/app/endpoints/resource-endpoint.service';
import { LoginResponse } from 'src/app/model/login/login-response.model';
import { Login } from 'src/app/model/login/login.model';
import { ProtectedService } from 'src/app/protected.service';
import { HttpService } from 'src/app/services/http.service';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  httpOptions: any;
  token: any;
  subscription: Subscription | any;
  constructor(
    private resEndpoint: ResourceEndpointService,
    private http: HttpService,
    private protectedService: ProtectedService
  ) {
    super();
    this.httpOptions = this.protectedService.getHttpOptions(this.token);
  }

  login(login: Login): Observable<LoginResponse> {
    return this.http.post(this.resEndpoint.LoginUri, login).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }
}
