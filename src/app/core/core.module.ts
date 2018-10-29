import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  declarations: [],
  exports: [
    NavbarModule,
    FooterModule
  ]
})
export class CoreModule { }
