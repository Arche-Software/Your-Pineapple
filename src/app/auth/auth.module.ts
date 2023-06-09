import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AngularMaterialModule } from "../angular-material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [AngularMaterialModule, FormsModule, AuthRoutingModule, SharedModule]
})
export class AuthModule {}
