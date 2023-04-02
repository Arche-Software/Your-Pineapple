import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MenuService } from '../services/menu.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor( private menuService: MenuService ) { }
    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
      this.menuService.spinner = true;
      return next.handle(req)
      .pipe(catchError((err) => {
        this.menuService.spinner = false;
        return err;
      }))
      .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this.menuService.spinner = false;
        }
        return evt;
      }));
    }
}
