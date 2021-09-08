import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lauch-details',
  templateUrl: './lauch-details.component.html',
  styleUrls: ['./lauch-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LauchDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
