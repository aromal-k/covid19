import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../core/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly common: CommonService
  ) { }

  ngOnInit(): void {
  }

}

