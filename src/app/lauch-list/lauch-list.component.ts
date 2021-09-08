import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lauch-list',
  templateUrl: './lauch-list.component.html',
  styleUrls: ['./lauch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LauchListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
