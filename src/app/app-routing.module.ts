import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SampleComponent } from './sample/sample.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent }, // Default route for welcome page
  { path: 'login', component: LoginComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'productDetails', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
