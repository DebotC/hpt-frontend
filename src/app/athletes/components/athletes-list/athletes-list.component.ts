import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hpt-athletes-list',
  templateUrl: './athletes-list.component.html',
  styleUrls: ['./athletes-list.component.scss']
})
export class AthletesListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addNewAthlete(): void {
      this.router.navigate(['/athletes/new']);
  }
}
