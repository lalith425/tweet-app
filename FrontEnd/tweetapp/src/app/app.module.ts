import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { SignupComponent } from './Signup/signup/signup.component';
import { UserMenuComponent } from './Account/user-menu/user-menu.component';
import { Routes,RouterModule } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserSearchComponent } from './Account/user-search/user-search.component';
import { CommentComponent } from './Account/comment/comment.component';
import { InterceptorService } from '../app/Interceptor/interceptor.service';
import { PasswordComponent } from './Account/password/password.component';
import { PostComponent } from './Post/post/post.component';
import { MytweetComponent } from './Post/mytweet/mytweet.component';
import { UpdatetweetComponent } from './Post/updatetweet/updatetweet.component';
import { SearchuserComponent } from './Post/searchuser/searchuser.component';

const appRoutes: Routes = [ 
  { path: 'user-menu', component: UserMenuComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'user-menu', component: UserMenuComponent},
  { path: 'password-reset', component: PasswordComponent},
  { path: 'post-tweet', component: PostComponent},
  { path: 'search-user', component: SearchuserComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserMenuComponent,
    UserSearchComponent,
    CommentComponent,
    PasswordComponent,
    PostComponent,
    MytweetComponent,
    UpdatetweetComponent,
    SearchuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
