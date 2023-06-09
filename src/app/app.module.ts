import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./error/error.component";
import { AngularMaterialModule } from "./angular-material.module";
import { PostsModule } from "./posts/posts.module";
import { SharedModule } from './shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { SpinnerInterceptor } from "./shared/interceptors/spinnerInterceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    MainPageComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
