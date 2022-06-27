import { Component, OnInit } from '@angular/core';
import { AppData } from '../models/cert.app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  qaPROD = '';
  title = 'toaster-not';
  constructor() { }

  ngOnInit(): void {
  }
  // showToasterSuccess() {
  //   this.toastr.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  // }

  // showToasterError() {
  //   this.toastr.showError("Something is wrong", "ItSolutionStuff.com")
  // }

  // showToasterInfo() {
  //   this.toastr.showInfo("This is info", "ItSolutionStuff.com")
  // }

  // showToasterWarning() {
  //   this.toastr.showWarning("This is warning", "ItSolutionStuff.com")
  // }
  
}
