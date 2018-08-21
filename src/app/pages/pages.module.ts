import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GoTopButtonModule} from "../layout/custom/gotop/go-top-button.module";

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "../layout/header/header.component";
import {FooterComponent} from "../layout/footer/footer.component";
import {BlogComponent} from "./blog/blog.component";
import {ProductComponent} from "./product/product.component";
import {AboutComponent} from "./about/about.component";


const PAGES_COMPONENTS = [
  PagesComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  BlogComponent,
  ProductComponent,
  AboutComponent,
];

@NgModule({
  imports: [
    GoTopButtonModule,
    PagesRoutingModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
