import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeData } from './../../../core/models/employee.model'
import { from } from 'rxjs';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() title;
  @Input() data: EmployeeData[] = [];

  @Output() add = new EventEmitter<string>();

  label: string;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    // this.data.push({
    //   label: this.label,
    //   num: 30
    // });
    this.add.emit(this.label);
    this.label = '';
  }

  // calc(item: EmployeeData) {
  //   console.log('LIST', this.title);
  //  return fibonacci(item.num);
  // }
  

}
