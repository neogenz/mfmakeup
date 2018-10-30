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
