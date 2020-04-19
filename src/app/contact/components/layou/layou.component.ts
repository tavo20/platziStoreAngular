import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneratorService } from './../../../core/services/generator.service';
import { EmployeeData } from './../../../core/models/employee.model';
import { Observable, Subscription } from 'rxjs';
import { tap,  } from 'rxjs/operators';
const names = [
  'Gustavo',  'Gissel', 'Dennis', 'Imagine'
];
@Component({
  selector: 'app-layou',
  templateUrl: './layou.component.html',
  styleUrls: ['./layou.component.scss']
})
export class LayouComponent implements OnInit, OnDestroy {


  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];

  value$: Observable<number>;
  sub$: Subscription;
  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit() {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);

    this.value$ = this.generatorService.getData()
      .pipe(
        tap(num => console.log(num))
      );

    // this.sub$ =  this.generatorService.getData()
    // .subscribe((value) => {
    //     this.value = value;
    //     console.log(this.value);
    //   });
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    });
  }

  ngOnDestroy() {
    // this.sub$.unsubscribe();
  }

}
