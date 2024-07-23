import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  presslap(){
    let labell:any=document.getElementById("labell")

    labell.classList.add("test2");

    labell.classList.remove("test")
   
  }

  presslap2(){
    let labell:any=document.getElementById("labell2")

    labell.classList.add("test2");

    labell.classList.remove("test")
   
  }
  presslap3(){
    let labell:any=document.getElementById("labell3")

    labell.classList.add("test2");

    labell.classList.remove("test")
   
  }
  presslap4(){
    let labell:any=document.getElementById("labell4")

    labell.classList.add("test2");

    labell.classList.remove("test")
   
  }

}
