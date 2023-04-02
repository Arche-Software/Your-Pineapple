import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";
import { MainPageComponent } from "./main-page/main-page.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";


const routes: Routes = [
  { path: "", component: MainPageComponent, data: { animation: 0 } },
  { path: "viewPosts", component: PostListComponent, data: { animation: 1 } },
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard], data: { animation: 2} },
  { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard], data: { animation: 3} },
  { path: "auth/login", component: LoginComponent, data: { animation: 4 } },
  { path: "auth/signup", component: SignupComponent , data: { animation: 5}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
