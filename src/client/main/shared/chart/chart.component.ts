import {Component, Input, ElementRef, OnChanges, AfterViewInit} from '@angular/core';
import 'chart.js';

declare var Chart: any;

@Component({
	selector: 'chart-cmp',
	template: `
		<div class="chart"><canvas width="400" height="400"></canvas></div>
	`
})
export class ChartComponent implements OnChanges, AfterViewInit{
	@Input() xitems: Array<any>;
	@Input() yitems: Array<any>;
	@Input() label: String;
	ctx: any;
	chart: any;
	el: any;

	constructor(private element: ElementRef) {
		this.el = this.element.nativeElement;
	}

	ngOnChanges() {
		setTimeout(() => {
			if(this.ctx) {
				this.draw();
			}
		}, 10);
	}

	draw() {
		if(this.chart) {
			this.chart.destroy();
		}

		this.chart = new Chart(this.ctx, {
		  	type: 'line',
		  	data: {
		    	labels: this.xitems,
		    	datasets: [{
		      		label: this.label,
		      		data: this.yitems,
		      		backgroundColor: "rgba(255,153,0,0.4)"
		    	}]
		  	},
		  	options: {
        		responsive: true,
        		maintainAspectRatio: false
    		}
		});
	}

	ngAfterViewInit() {
		this.ctx = this.el.querySelector('canvas');
	}
}