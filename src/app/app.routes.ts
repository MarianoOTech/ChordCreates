import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ForgotPaswordComponent } from './forgot-pasword/forgot-pasword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FakeProductComponent } from './fake-product/fake-product.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'new-user', component:NewUserComponent},
    {path: 'forgot-password', component: ForgotPaswordComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'reset-password/:email/:token', component: ResetPasswordComponent},
    {path: 'fake-product', component: FakeProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
