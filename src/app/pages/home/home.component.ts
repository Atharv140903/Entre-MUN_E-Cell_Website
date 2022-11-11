import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    function myFunction() {
      var x = (<HTMLInputElement>document.getElementById("myLinks"));
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }

      return ;
    }

    let answers = document.querySelectorAll(".fa");
    answers.forEach((event) => {
      event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
          event.classList.remove("active");
        } else {
          event.classList.add("active");
        }
      });
    });

  }



}
