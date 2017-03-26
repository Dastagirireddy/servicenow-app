import {Component, Input} from '@angular/core';

@Component({
	selector: 'chart-cmp',
	template: `
		<div class="chart"><canvas id="myChart" width="400" height="400"></canvas></div>
	`,
	styles: [`.chart{height:500px;}`]
})
export class ChartComponent {
	@Input() xitems: Array<any>;
	@Input() yitems: Array<any>;
	@Input() label: String;
	ctx: any;
	chart: any;

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
		  	}
		});
	}

	ngAfterViewInit() {
		this.ctx = document.getElementById("myChart");
	}
}