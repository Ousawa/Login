import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm!: FormGroup;

constructor(private formBuilder: FormBuilder, private router: Router, private userDataService: UserDataService) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['',[Validators.required,Validators.email]],
        senha: ['',[Validators.required]],
        nome:  ['',[Validators.required]]
      }
    );
  }

  submitLogin() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.getRawValue();
      this.userDataService.setUserData(userData);
      this.router.navigate(['/dashboard']); // Redirecionar para o Dashboard após o login
    }
  }
  

}
