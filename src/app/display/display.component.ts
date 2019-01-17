import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  routes:any=[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getdataFromJson();
  }

  getdataFromJson(){
    this.http.get("./assets/route.json").subscribe(response=>{
      this.routes = response;
      console.log(response)
    })
  }

}
