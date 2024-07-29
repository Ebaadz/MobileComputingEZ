import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  data: any;
  calculatedTip: number = 0;
  totalBill: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras?.state;
  }

  ngOnInit(): void {
    if (this.data) {
      const cost = parseFloat(this.data.cost);
      const quality = parseFloat(this.data.quality);
      let tip = cost * quality;

      if (this.data.roundUp) {
        tip = Math.ceil(tip);
      } else {
        tip = Math.round(tip * 100) / 100;
      }

      this.calculatedTip = tip;
      this.totalBill = cost + tip;
    }
  }

  goBack() {
    this.router.navigate(['/input']);
  }
}

