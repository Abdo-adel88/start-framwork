import { Component } from '@angular/core';

@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrls: ['./protfolio.component.css']
})
export class ProtfolioComponent {

  imag1: string = "assets/image/poert1.png";
  imag2: string = "assets/image/port2.png";
  imag3: string = "assets/image/port3.png";

  clickphoto(e:any){

    const lightboxcont:any=document.getElementById("lightbox-conta")
    lightboxcont.classList.add("test2");

    lightboxcont.classList.remove("test")
    
  let getimag = e.target.getAttribute('src');
  let boxx:any = document.querySelector(".lightbox-item") 
  boxx.style.backgroundImage=`url(${getimag})`
 
  
  }
  closephoto(){
    const lightboxcont:any=document.getElementById("lightbox-conta")
    lightboxcont.classList.remove("test2");
    lightboxcont.classList.add("test")
    }
    stoppro(e:any){
      e.stopPropagation()
    }

}
