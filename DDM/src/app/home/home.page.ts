import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  cep: string;
  dados: any;
  constructor(private router: Router, private http: HttpClient) {}

local() {
  this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe(res=>{
    this.dados=res;
  });
}

}
