import {Injectable} from '@angular/core';
import {Data} from './data';
import {Categories} from './categories';
import {CloudData} from 'angular-tag-cloud-module';

@Injectable({
  providedIn: 'root'
})
export class WordUtilsService {
  dataset: Categories[];
  disabledWords: string[];

  constructor() {
    this.dataset = Data.CATEGORIES;
    this.disabledWords = Data.DISABLED_WORDS;
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
    return freqMap;
  }

  isWordDisabled(word): boolean {
    return this.disabledWords.includes(word);
  }

  cloudData(): CloudData[] {
    const freqMap = this.wordFreq();
    const cloudData = [];
    Object.keys(freqMap).sort().forEach((word) => {
      let freq = freqMap[word];
      if (freq >= 1 && freq <= 3) {
        freq = 2;
      } else if (freq > 3 && freq <= 5) {
        freq = 3;
      }else if (freq > 5 && freq <= 7) {
        freq = 4;
      }else if (freq > 7 && freq <= 10) {
        freq = 5;
      }else if (freq > 10 && freq <= 15) {
        freq = 6;
      } else if (freq > 15 && freq <= 20) {
        freq = 7;
      } else if (freq > 20 && freq <= 25) {
        freq = 8;
      } else if (freq > 25) {
        freq = 9;
      }
      cloudData.push({
        text: word,
        weight: freq
      });
    });
    cloudData.push({
      text: 'All',
      weight: 10
    });
    return cloudData;
  }
}
