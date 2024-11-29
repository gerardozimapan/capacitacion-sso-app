import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  public payslip: any;

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    this.http.get('https://localhost:7250/payslip').subscribe(result => this.payslip = result);
  }
}
