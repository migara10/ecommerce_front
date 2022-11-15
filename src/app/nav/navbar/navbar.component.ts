import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ProductSidebarComponent } from "../product-sidebar/product-sidebar.component"
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {filter} from 'rxjs/operators';
import {map, mergeMap} from 'rxjs/operators';
declare var $: any
@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   isFalse = false
   isShow = true;
   constructor(private dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
      /* const value = this.route.snapshot.data['title'];
    console.log(value, 'aaaaaaaa') */
   }

   ngOnInit(): void {

      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.route.firstChild;
          let child = route;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
              route = child;
            } else {
              child = null;
            }
          }
          return route;
        }),
        mergeMap((route: any) => route.data)
      )
      .subscribe((data: any) => {
        /* console.log(data.isShow); */
        this.isShow = data.isShow;
      });


      
      /* this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let routeTitle = '';
          while (this.route!.firstChild) {
            this.route = this.route.firstChild;
          }
          if (this.route.snapshot.data['key']) {
            routeTitle = this.route!.snapshot.data['key'];
            console.log(routeTitle)
          }
          return routeTitle;
        })
      )
      .subscribe(); */


      /* this.route.data.subscribe((data) => {
         const value = data['key']
         console.log(value)
    }); */




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
   ngOnChanges() {
      this.getItemQty();
   }
   getItemQty() {
      const items = JSON.parse(localStorage.getItem("PendingOrder") || "[]")
      return items.length;
   }
   openSideBar() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.position = {
         'top': '0',
         right: '0'
      }
      dialogConfig.width = '300px';
      dialogConfig.height = '100%';
      dialogConfig.enterAnimationDuration = "0.5s"
      dialogConfig.exitAnimationDuration = "0.5s"
      this.dialog.open(ProductSidebarComponent, dialogConfig);

   }

}
