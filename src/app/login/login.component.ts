import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public myForm: FormGroup; // our model driven form

    constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { } // form builder simplify form initialization

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            mobile: [''],
            password: ['', [<any>Validators.required, <any>Validators.minLength(3)]]
        });
    }

    login(user: User, isValid: boolean) {
        console.log(user);
        this.loginService.login(user)
            .then(isAuthenticated => {
                this.router.navigate(['/dashboard']);
            })
            .catch(() => {
                console.log("failed");

            })
    }

}

