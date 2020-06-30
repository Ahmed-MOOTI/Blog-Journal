import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from './../service.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-addarticles',
  templateUrl: './addarticles.component.html',
  styleUrls: ['./addarticles.component.css']
})
export class AddarticlesComponent implements OnInit {
  data: FormData;
  decoded = jwt_decode(this.service.getToken());
  file: File;
  newarticle: FormGroup;
  
  constructor(private service: ServiceService, private router: Router) {
    this.data = new FormData();
  }

  ngOnInit(): void {
    this.newarticle = new FormGroup({
      article: new FormControl(''),
      description: new FormControl(''),
    });
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
    }
  }
  article() {
    this.service.article(this.newarticle.value).subscribe((res: any) => {
      this.affectarticle(res._id);
      this.upload(res._id);
    });
    this.router.navigateByUrl('/find');
  }
  affectarticle(articleid) {
    this.service.Affectarticle(this.decoded.data._id, articleid).subscribe(res => {
      console.log(res);
    });
  }
  upload(id) {
    this.data.set('file', this.file);
    this.service.upload(this.data, id).subscribe(res => {
      console.log(res);
    });
  }
}
