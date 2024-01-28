import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productList: any [] = [];
  cartObj : any = {
    "id": 5,
    "userId": 2,
    products:[],
    "Date": "2023-04-27T07:12:40.926Z"
  };
  constructor(private productService: ProductService,private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((result: any)=>{
      this.productList = result;
      this.productService.productList = result
    })
  }

  addItemToCart(id: number) {
    const product={productId:id,quantity:1}
    this.cartObj.products.push(product)
    console.log(this.cartObj)
    this.productService.addToCart(this.cartObj).subscribe((result: any)=>{
      if(result) {
         this.productList = result;
        // this.toastr.success("sucessfully added",'Success')

        this.toastr.success('Login successful!', 'Success');
                this.productService.cartAddedSubject.next(result.products);
       }
    })
  }
}