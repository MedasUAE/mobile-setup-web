import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  items: any[] = [];
  constructor(private layoutService: LayoutService, private router: Router,private location:Location) { }

  ngOnInit() {
    this.layoutService.getAllClient()
      .then((results: any) => {
        this.items = results;
      }).catch((error) => console.error(error));
  }

  editLayout(client: string) {
    localStorage.setItem('url', '/layout/:'+client)
    this.router.navigate(['/layout', client]);
  }

  addLayout(client: string) {
    localStorage.setItem('url', '/layout/:'+client)
    this.router.navigate(['/layout', client]);
  }

  deleteLayout(client: string) {
    this.layoutService.deleteLayout(client)
    localStorage.setItem('url', '/client')
    this.router.navigate(['/client']);
    location.reload()
  }

}
