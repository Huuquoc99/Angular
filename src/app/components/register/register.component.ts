import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { IUSER } from '../../interface/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private userService: UserService){}
  registerform = new FormGroup ({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  router = new Router()
  onSubmit =()=>{
    this.userService.RegisterUser(this.registerform.value as IUSER).subscribe(data=>{
        console.log(data);  
        alert("Đăng ký thành công");  
        this.router.navigate(['login']);    
    }, error=>{
      console.log(error); 
      alert(error.error);  
    }
  )
  }
}
