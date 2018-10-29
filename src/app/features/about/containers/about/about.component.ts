import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Scrollable } from '../../../../shared/ScrollablePage';
declare var $: any;

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent extends Scrollable implements OnInit, AfterViewInit {
	
	constructor() { super(); }

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		this.initScrollbar();
	}
}
