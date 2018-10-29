import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public categories: Category[];

}
