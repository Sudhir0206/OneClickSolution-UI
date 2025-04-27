import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuotationComponent } from './quotation/quotation.component';
import { ProductsComponent } from './products/products.component';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { provideHttpClient ,HttpClientModule,withFetch,HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './salesandinventory/home/home.component';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    QuotationComponent,
    ProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    NgImageSliderModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient],
            },
            defaultLanguage: 'en-US',
        }),
   
  ],
  providers: [
    provideClientHydration(),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
