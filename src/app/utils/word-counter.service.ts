import {Injectable} from '@angular/core';
import {CategoriesData} from './categories-data';
import {Categories} from './categories';

@Injectable({
  providedIn: 'root'
})
export class WordCounterService {
  dataset: Categories[];
  disabledWords: string[];

  constructor() {
    this.dataset = CategoriesData.CATEGORIES;
    this.disabledWords = CategoriesData.DISABLED_WORDS;
  }

  getCategories(): string {
    let categories = '';
    this.dataset.forEach((data) => {
      data.categories.forEach((cat) => {
        if (!this.isWordDisabled(cat)) {
          categories += cat += ' ';
        }
      });
    });
    return categories;
  }

  wordFreq(): any {
    const categories = this.getCategories();
    const words = categories.replace(/[.\d]/g, '').split(/\s/);
    const freqMap = {};
    words.forEach((w) => {
      if (w.length > 1) {
        if (!freqMap[w]) {
          freqMap[w] = 0;
        }
        freqMap[w] += 1;
      }
    });
    // console.log(freqMap);
    Object.keys(freqMap).sort().forEach((word) => {
      console.log('count of ' + word + ' is ' + freqMap[word]);
    });
    return freqMap;
  }

  isWordDisabled(word): boolean {
    return this.disabledWords.includes(word);
  }
}
