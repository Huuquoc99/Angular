import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { IUSER } from '../../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserService){}
  loginform = new FormGroup ({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  router = new Router()
  onSubmit =()=>{
      this.userService.UserLogin(this.loginform.value as IUSER).subscribe(
        data=>{
            const token = data?.accessToken
            const name = data?.name
            const userinfo = {token:token,name:name}
            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem('user',JSON.stringify(userinfo))
            alert('Đăng nhập thành công')
            console.log(data);
            
            // Chuyển hướng về dashboard admin
            this.router.navigate(['']);
        },
        error=>{
          alert(error.error);
        }
      )
  }
}
