import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cartAddedSubject = new BehaviorSubject<number>(0);

  productList: any;

  constructor(private http: HttpClient) { }

  getAllProducts() {
    debugger;
    return this.http.get("https://fakestoreapi.com/products");
  }

  addToCart(obj: any) : Observable<any> {
    return this.http.post("https://fakestoreapi.com/carts",obj);
  }

  getCartItemsByCustId(custId: number) : Observable<any[]>  {
    return this.http.get<any[]>("https://fakestoreapi.com/carts/user/?userId=" + custId);
  }
   removeCartItemById(cartId: number) : Observable<any[]>  {
    return this.http.get<any[]>("https://fakestoreapi.com/carts/?id=" + cartId);
  }

  /*makeSale(obj: any) : Observable<any> {
    debugger;
    return this.http.post<any>("http://onlinetestapi.gerasim.in/api/Ecomm/AddNewSale",obj);
  }*/
}