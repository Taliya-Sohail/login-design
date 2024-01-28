import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})

export class AppComponent {
  title = 'login-design';
  productCount: any;
  productList: any;
  addToCartList: any = [];
  cartProducts: any[] = [];
  subTotal: number = 0;
  constructor(private productService: ProductService, private router: Router) {
    this.productService.cartAddedSubject.subscribe((res:any)=> {
      if(res){
        this.productList = this.productService.productList
      this.productCount = res
      this.productList.map((item: any)=>{
        this.productCount.map((nestedItem:any)=>{
          if(item.id === nestedItem.productId){
            this.addToCartList.push(item)
          }
        })
      })


    }
      this.loadCart();
    })
  }

  ngOnInit(): void {
    this.loadCart();
  }
  redirectToSale() {
    this.router.navigateByUrl("/about");
  }

  loadCart() {
    this.subTotal = 0;
    this.productService.getCartItemsByCustId(5).subscribe((res: any)=> {
      this.cartProducts = res;
      debugger;
      this.cartProducts.forEach(element => {
          this.subTotal =  this.subTotal + element.productPrice;
      });
     
    })
  }
}

