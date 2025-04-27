import { Component } from '@angular/core';
import { Carousel} from 'bootstrap';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  imageObject = [{
    image: '/assets/Img/cover-image-25.jpg',
    thumbImage: '/assets/Img/cover-image-25.jpg',
   
}, {
    image: '/assets/Img/export-agricultural-products.png',
    thumbImage: '/assets/Img/export-agricultural-products.png',
  
}, {
    image: '/assets/Img/imex1.jpeg',
    thumbImage: '/assets/Img/imex1.jpeg',
 
}];
}
