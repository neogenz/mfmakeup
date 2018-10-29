import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Scrollable } from '../../../../shared/ScrollablePage';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent extends Scrollable implements OnInit, AfterViewInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initScrollbar();
  }

}