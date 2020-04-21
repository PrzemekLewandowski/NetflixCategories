import {Component} from '@angular/core';
import {Data} from './utils/data';
import {WordUtilsService} from './utils/word-utils.service';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText: any;
  dataset = Data.CATEGORIES;
  cloudData: CloudData[];
  options: CloudOptions = {
    height: 150,
    width: 1,
    overflow: false,
  };

  constructor(private wordCounter: WordUtilsService) {
    this.cloudData = wordCounter.cloudData();
  }

  openLink(link: string) {
    window.open(Data.NETFLIX_CATEGORY_PAGE + link);
  }

  tagClick(tag: CloudData) {
    if (tag.text.match('All')) {
      this.searchText = '';
    } else {
      this.searchText = (tag.text);
    }
    console.log(tag.text);
  }
}
