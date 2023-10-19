import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData: any; // ou o tipo apropriado para seus dados de usuário

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userData = this.userDataService.getUserData();
  }
}
