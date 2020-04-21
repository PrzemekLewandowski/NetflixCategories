import {Component} from '@angular/core';
import {CategoriesData} from './utils/categories-data';
import {WordCounterService} from './utils/word-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText: any;
  dataset = CategoriesData.CATEGORIES;
  categories: any;

  constructor(private wordCounter: WordCounterService) {
    this.categories = wordCounter.wordFreq();
  }


}
