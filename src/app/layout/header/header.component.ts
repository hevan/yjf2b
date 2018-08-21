import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  curPath='home';
  constructor(private location: Location, private router:Router) {
  }

  ngOnInit(){
    let strPath = this.location.path();

    console.log(strPath);

    if(strPath.indexOf('product') > 0){
      this.curPath='product';
    }else if(strPath.indexOf('blog') > 0){
      this.curPath = 'blog';
    }else if(strPath.indexOf('about') > 0){
      this.curPath = 'about';
    }
  }

  goTo(page){
    let strPath = page;

    console.log(strPath);

    if(strPath.indexOf('product') > 0){
      this.curPath='product';
    }else if(strPath.indexOf('blog') > 0){
      this.curPath = 'blog';
    }else if(strPath.indexOf('about') > 0){
      this.curPath = 'about';
    }else{
      this.curPath='home';
    }
    this.router.navigate([page]);
  }
}
