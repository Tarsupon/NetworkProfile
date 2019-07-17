import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap} from "rxjs/operators";

@Injectable()
export class ParamInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.url.includes("http://localhost:4200/?code=") ) {
            localStorage.setItem('code', event.url.split('=', 2).pop());
            console.log("URL " + event.url);
            console.log("Code " + event.url.split('=', 2).pop());
          }
        }
      })
    );
  }
}
