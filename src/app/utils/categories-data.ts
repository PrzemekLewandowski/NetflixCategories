import {Categories} from './categories';

export abstract class CategoriesData {
  static readonly CATEGORIES: Array<Categories> = [
    {
      link: 11881, name: 'Adult Animation', categories: [
        'Adult', 'Animation'
      ]
    },
    {
      link: 1365, name: 'Action & Adventure', categories: [
        'Action', 'Adventure'
      ]
    },
    {
      link: 77232, name: 'Asian Action Movies', categories: [
        'Asian', 'Action', 'Movies'
      ]
    },
  ];
}
