import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('navbar') navbar: ElementRef;

  ngAfterViewInit(): void {
    // Dropdown effect
    $("header nav li").hover(function () {

      if ($(this).children('ul').length > 0 && !$(".mobile-navigation").is(':visible')) {

        var children = $(this).find('> ul'),
          elem = $(this),
          elemOff = parseInt($(this).offset().left),
          elemWidth = elem.width();

        if ((elemOff + 200 + elemWidth) > window.innerWidth) {
          children.addClass('edge');
        }

        $(this).find('> ul').fadeIn(300);
      }
    }, function () {

      if ($(this).children('ul').length > 0 && !$(".mobile-navigation").is(':visible')) {
        $(this).find('> ul').stop().fadeOut(300);
      }
    });


    // Unfolding sub-menus in responsive mode.
    $("header nav li a").click(function (event) {

      if ($(this).parent().children('ul').length > 0 && $(".mobile-navigation").is(':visible')) {

        event.preventDefault();
        $(this).parent().find('> ul').slideToggle(300);
      }
    });


    // Adding Scrollbar
    if ($("header").length > 0 && window.innerWidth <= 1024) {

      $("header nav").niceScroll({
        mousescrollstep: 60,
        cursorcolor: "#959595",
        cursorborder: "0px solid #fff",
      });
    }


    // Mobile navigation
    $(".mobile-navigation").click(function (event) {

      event.preventDefault();

      $("header nav").slideToggle(100);
    });


    // Adding arrows for mobile menu
    if ($("header").length > 0) {

      $("header nav .mCSB_container > ul > li > a").each(function (index, el) {

        if (window.innerWidth <= 1024 && $(this).parent().children('ul').length > 0) {

          $(this).append('<span class="arrow-down icon1-chevron-down"></span>');
        }
      });
    }
  }

  constructor() { }

  ngOnInit() {
  }

  closeMenu(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    if ($(window).width() < 1100)
      this.navbar.nativeElement.style.display = 'none';
  }
}
