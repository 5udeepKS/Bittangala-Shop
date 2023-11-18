import { Component } from '@angular/core';
import { Categories } from './models/categories.model';

@Component({
  selector: 'app-Homepage',
  templateUrl: './Homepage.component.html',
  styleUrls: ['./Homepage.component.css']
})
export class HomepageComponent {
  categories: Categories[] = [
    {
      name: 'Category 1',
      items: [
        { name: 'Item 1', description: 'Description for Item 1' },
        { name: 'Item 2', description: 'Description for Item 2' },
        { name: 'Item 3', description: 'Description for Item 3' },
        { name: 'Item 4', description: 'Description for Item 4' },
        { name: 'Item 5', description: 'Description for Item 5' },
        { name: 'Item 1', description: 'Description for Item 1.1' },
        { name: 'Item 2', description: 'Description for Item 2.1' },
        { name: 'Item 3', description: 'Description for Item 3.1' },
        { name: 'Item 4', description: 'Description for Item 4.1' },
        { name: 'Item 5', description: 'Description for Item 5.1' }
      ]
    },
    {
      name: 'Category 2',
      items: [
        { name: 'Item 6', description: 'Description for Item 6' },
        { name: 'Item 7', description: 'Description for Item 7' },
        { name: 'Item 8', description: 'Description for Item 8' },
        { name: 'Item 9', description: 'Description for Item 9' },
        { name: 'Item 10', description: 'Description for Item 10' }
      ]
    },
    {
      name: 'Category 3',
      items: [
        { name: 'Item 11', description: 'Description for Item 11' },
        { name: 'Item 12', description: 'Description for Item 12' },
        { name: 'Item 13', description: 'Description for Item 13' },
        { name: 'Item 14', description: 'Description for Item 14' },
        { name: 'Item 15', description: 'Description for Item 15' }
      ]
    },
    {
      name: 'Category 1',
      items: [
        { name: 'Item 1', description: 'Description for Item 1' },
        { name: 'Item 2', description: 'Description for Item 2' },
        { name: 'Item 3', description: 'Description for Item 3' },
        { name: 'Item 4', description: 'Description for Item 4' },
        { name: 'Item 5', description: 'Description for Item 5' },
        { name: 'Item 1', description: 'Description for Item 1.1' },
        { name: 'Item 2', description: 'Description for Item 2.1' },
        { name: 'Item 3', description: 'Description for Item 3.1' },
        { name: 'Item 4', description: 'Description for Item 4.1' },
        { name: 'Item 5', description: 'Description for Item 5.1' }
      ]
    },
  ];


}
