import { Component } from '@angular/core';
import {CategoriesData} from './utils/categories-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText: any;
  dataset = CategoriesData.CATEGORIES;

}
