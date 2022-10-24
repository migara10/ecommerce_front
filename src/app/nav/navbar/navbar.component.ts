import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
      /* $(function () {
         $(window).scroll(function () {
           var scroll1 = $(window).scrollTop();
           console.log(scroll)
         });
       }); */
      const navbarMenu = document.getElementById("menu");
      const burgerMenu = document.getElementById("burger");
      const headerMenu = document.getElementById("header");

      /* console.log(navbarMenu, 'hii')
      console.log(burgerMenu, 'hii')
      console.log(headerMenu, 'hii') */

      if (burgerMenu && navbarMenu) {
         burgerMenu.addEventListener("click", () => {
            burgerMenu.classList.toggle("is-active");
            navbarMenu.classList.toggle("is-active");
         });

         /* document.querySelectorAll(".menu-link").forEach((link) => {
            link.addEventListener("click", () => {
               burgerMenu.classList.remove("is-active");
               navbarMenu.classList.remove("is-active");
            });
         });

         document.querySelectorAll(".menu-link").forEach((link) => {
            link.addEventListener("click", () => {
               burgerMenu.classList.remove("is-active");
               navbarMenu.classList.remove("is-active");
            });
         }); */
      }

     /*  // Open Close Navbar Menu on Click Burger
      if (burgerMenu && navbarMenu) {
         burgerMenu.addEventListener("click", () => {
            burgerMenu.classList.toggle("is-active");
            navbarMenu.classList.toggle("is-active");
         });
      }

      // Close Navbar Menu on Click Menu Links
      document.querySelectorAll(".menu-link").forEach((link) => {
         link.addEventListener("click", () => {
            burgerMenu.classList.remove("is-active");
            navbarMenu.classList.remove("is-active");
         });
      });

      // Change Header Background on Scrolling
      window.addEventListener("scroll", () => {
         var scrollY = $(window).scrollTop();
         if (scrollY >= 85) {
            headerMenu.classList.add("on-scroll");
         } else {
            headerMenu.classList.remove("on-scroll");
         }
      }); */
   }

}
