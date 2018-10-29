import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Scrollable } from 'src/app/shared/ScrollablePage';

@Component({
  selector: 'app-particular',
  templateUrl: './particular.component.html',
  styleUrls: ['./particular.component.css']
})
export class ParticularComponent extends Scrollable implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.initScrollbar();
  }

  constructor() {
    super();
  }

  ngOnInit() {
  }


}
