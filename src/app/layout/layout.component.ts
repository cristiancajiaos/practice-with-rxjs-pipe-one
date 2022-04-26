import { Component, OnInit } from '@angular/core';
import { filter, range, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  values = [];

  source$ = range(0, 10);

  constructor() { }

  ngOnInit(): void {
    this.source$.pipe(
      filter((x: number) => x < 3),
      map((x: number) => (x * 3) + 4),
    ).subscribe(x => {
      this.values.push(x);
    })

  }

}
