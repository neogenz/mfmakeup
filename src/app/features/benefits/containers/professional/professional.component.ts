import { Component, OnInit } from '@angular/core';
import { Scrollable } from 'src/app/shared/ScrollablePage';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent extends Scrollable implements OnInit {
  ngAfterViewInit(): void {
    this.initScrollbar();
  }

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
