import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // productId: number;
  // constructor(private route: ActivatedRoute) {}
  

  ngOnInit(): void {
    // this.route.params.subscribe(p => {
    //   this.productId = p.id;
    // })
  }

}
