import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
  username: string = '';
  password: string = '';
  public passwordVisible = false;
  public passwordIcon = '👁️';
  // public email = "📧";

  constructor(private toastr: ToastrService, private router: Router) { }


  login(): void {

  
    const validUsername = 'taliya';
    const validPassword = 'pass';
    console.log(this.username, this.password);

    if (this.username === validUsername && this.password === validPassword) {
      this.toastr.success('Login successful!', 'Success');
    
      this.router.navigate(['about']);
     
    }
    
    else if (this.username === "" || this.password === "") {
      this.toastr.warning('Enter Username and Password!', 'Note');
    }
    else {
      console.log(this.username, this.password);
      this.toastr.error('Invalid username or password', 'Error');
    }
  }
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    this.passwordIcon = this.passwordVisible ? '👀' : '👁️';
  }
}
