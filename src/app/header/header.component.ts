import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShow: boolean = true;
  isMen = true;
  isWomen = false;
  hidden: boolean = true;
  brand: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  visibleMenu(value: any) {
    // if (value == "togale") {
    //   this.isShow = !this.isShow;
    //   this.hidden = !this.hidden;
    //   this.brand = !this.brand;
    // }
    // if (value == 'men') {
    //   this.isMen = true;
    //   this.isWomen = false;
    // } else {
    //   this.isMen = false;
    //   this.isWomen = true;
    // }
    this.isShow = !this.isShow;
    this.isMen = !this.isMen;
  }
  // visib

}
