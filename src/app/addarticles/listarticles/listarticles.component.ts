import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from './../../service.service';
import { Router } from '@angular/router';
// import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent implements OnInit {
  data: FormData;
  j;
  table;
  updateForm: FormGroup;
  // decoded = jwt_decode(this.service.getToken());
  file: File;
  constructor(private service: ServiceService, private router: Router) {
    this.data = new FormData();
  }

  ngOnInit() {
    this.updateForm = new FormGroup({
      article: new FormControl(),
      description: new FormControl()

    });
    this.get();
  }
  get() {
    this.service.getarticle().subscribe(res => {
      console.log(res);
      this.table = res;
    });
  }
  Delete(i) {
    this.service.deletearticle(this.table[i]._id).subscribe(res => {
      console.log(res);
    });
    this.table.splice(i, 1);
  }
  up(i) {
    this.j = this.table[i]._id;
    this.updateForm = new FormGroup({
      article: new FormControl(this.table[i].article),
      description: new FormControl(this.table[i].description)
    });
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
    }
  }

  update() {
    this.service.updatearticle(this.j, this.updateForm.value).subscribe((res: any) => {
      console.log(res);
      this.upload(res._id);
    });
  }
  // affectarticle(articleid) {
  //   this.service.Affectarticle(this.decoded.data._id, articleid).subscribe(res => {
  //     console.log(res);
  //   });
  // }
  upload(id) {
    this.data.set('file', this.file);
    console.log(this.data.get('file'));
    this.service.upload(this.data, id).subscribe(res => {
      console.log(res);
    });
  }

}