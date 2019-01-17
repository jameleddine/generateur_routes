import { Component, OnInit } from '@angular/core';
import {Path} from './../entities/path.entity';
import { FileSaverService } from 'ngx-filesaver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
path:Path[]=[];
  constructor(private http: HttpClient, private fs: FileSaverService,) { }

  ngOnInit() {
    this.path.push({path:"",text:''})
  }

  ajout(){ 
    console.log(this.path)
    this.path.push({path:"",text:''})
  }
  save(){
    const fileName = `save.json`;
    //   this.http.get(`assets/files/demo.json`, {
    //     observe: 'response',
    //     responseType: 'blob'
    //   }).subscribe(res => {
    //     this.fs.save(res.body, fileName);
    //   });
    //   return;
    // }
    const fileType = this.fs.genType(fileName);
    const txtBlob = new Blob([JSON.stringify(this.path)], { type: fileType });
    this.fs.save(txtBlob, fileName);
  }
  
}
