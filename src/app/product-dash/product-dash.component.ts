import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/model/product';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss'],
})
export class ProductDashComponent implements OnInit {
toggleNavbar() {
throw new Error('Method not implemented.');
}
  baseUrl = environment.baseUrl;
  prodArr!: Product[];
  navbarOpen: boolean = false;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onNavbarToggle() {
   if(this.navbarOpen){
      this.navbarOpen = false
   }else{
       this.navbarOpen = true
   }
  }

  getProducts() {
    this._http.get<Array<Product>>(this.baseUrl).subscribe({
      next: (res) => {
        console.log(res);
        this.prodArr = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
