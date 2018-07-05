import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup; // our model driven form

  unsubcribe: any

  public fields: any[] = [
    {
      type: 'text',
      name: 'mobile',
      label: 'Mobile',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'password',
      label: 'Password',
      value: '',
      required: true,
    },
  ];

    constructor(private formBuilder: FormBuilder,private loginService: LoginService,private router: Router) {
        this.form = new FormGroup({
            fields: new FormControl(JSON.stringify(this.fields))
          })
          this.unsubcribe = this.form.valueChanges.subscribe((update) => {
            console.log(update);
            this.fields = JSON.parse(update.fields);
          });
     } // form builder simplify form initialization

    ngOnInit() {
        this.form = this.formBuilder.group({
            mobile: [''],
            password: ['', [<any>Validators.required, <any>Validators.minLength(3)]]
        });
    }

    login(obj) {
        this.loginService.login(obj)
            .then(isAuthenticated => {
                localStorage.setItem('url', '/dashboard')
                this.router.navigate(['/dashboard']);
            })
            .catch(() => {
                console.log("failed");

            })
    }

    onUpload(e) {
      console.log(e);
  
    }
  
    getFields() {
      return this.fields;
    }
  
    ngDistroy() {
      this.unsubcribe();
    }

}

