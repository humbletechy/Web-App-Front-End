/** Angular Imports */
import { Component, OnInit } from '@angular/core';

/**
 * Navigation component. (by office)
 */
@Component({
  selector: 'mifosx-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  valueData = ['Binary', 'Nominal', 'Interval', 'Ratio'];

  genderData = ['Numeric', 'Character', 'Date'];
  
  constructor() { }

  ngOnInit() {
  }

}
