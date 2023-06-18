import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // import FormsModule or ReactiveFormsModule (or both) here
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { RegistrationComponent } from './client/registration/registration.component';
import { CarouselComponent } from './client/carousel/carousel.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './admin/adminregistration/adminregistration.component';
import { CartComponent } from './client/cart/cart.component';
import { ProductsComponent } from './client/products/products.component';
import { AboutComponent } from './client/about/about.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { ProductdisplayComponent } from './client/productdisplay/productdisplay.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { AdminproductsComponent } from './admin/adminproducts/adminproducts.component';
import { ParentComponent } from './client/parent/parent.component';
import { CartService } from './services/cart.service';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { FeedbackComponent } from './client/feedback/feedback.component';
import { AdminfeedbackComponent } from './admin/adminfeedback/adminfeedback.component';
import { OrdersmangementComponent } from './admin/ordersmangement/ordersmangement.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ProfileComponent } from './client/profile/profile.component';
import { ClientsidebarComponent } from './client/clientsidebar/clientsidebar.component';
import { OrdersComponent } from './client/orders/orders.component';

const appRoute: Routes = [
  { path: '', component: ParentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productdisplay/:id', component: ProductdisplayComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'myorders', component: OrdersComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminregistration', component: AdminregistrationComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: 'dashboard', component: AdmindashboardComponent },
  { path: 'adminproducts', component: AdminproductsComponent },
  { path: 'updateproduct/:id', component: UpdateProductComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'adminorders', component: OrdersmangementComponent },
  { path: 'adminfeedback', component: AdminfeedbackComponent },
  { path: 'usermanagement', component: UsermanagementComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    AdminregistrationComponent,
    AdminloginComponent,
    CartComponent,
    ProductsComponent,
    AboutComponent,
    AdmindashboardComponent,
    ProductdisplayComponent,
    CheckoutComponent,
    AdminproductsComponent,
    ParentComponent,
    AddProductComponent,
    UpdateProductComponent,
    FeedbackComponent,
    AdminfeedbackComponent,
    OrdersmangementComponent,
    UsermanagementComponent,
    SidebarComponent,
    ProfileComponent,
    ClientsidebarComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
