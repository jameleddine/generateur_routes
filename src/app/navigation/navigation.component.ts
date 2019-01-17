import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  page: string;
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.page = params['path'];

   });
  }

  ngOnInit() {
  }

}
