import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {
  
 
  toggleMenu(): void {
    var element = <HTMLInputElement>document.getElementById("myLinks")
    element.classList.toggle("s3");
  }

  faqShow1(): void {
    var element = <HTMLInputElement>document.getElementById("c4")
    element.classList.toggle("s3");
  }

  faqShow2(): void {
    var element = <HTMLInputElement>document.getElementById("c5")
    element.classList.toggle("s3");
  }

  faqShow3(): void {
    var element = <HTMLInputElement>document.getElementById("c6")
    element.classList.toggle("s3");
  }

  faqShow4(): void {
    var element = <HTMLInputElement>document.getElementById("c7")
    element.classList.toggle("s3");
  }


  constructor() { }

  ngOnInit(): void {

    
  }
}
