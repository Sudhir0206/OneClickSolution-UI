import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Carousel} from 'bootstrap';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  selectedLanguage = 'en-US';
  showSalesMenu:boolean=false;
  currentRoute: string = '';
  constructor(private translateService: TranslateService,private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects; 
        console.log('Current Route:', this.currentRoute);
        if( this.currentRoute.includes('sales'))
        {
          this.showSalesMenu=true;
        }else{
          this.showSalesMenu=false;
        }
      }
    });
  }
  onLanguageChange() {
   
    this.translateService.use(this.selectedLanguage);
    //this.translateService.use(this.selectedLanguage)
  }

  
}
