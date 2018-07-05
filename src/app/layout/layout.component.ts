import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { LayoutService } from '../services/layout.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  layoutForm: FormGroup;
  client: string;
  constructor(private layoutService:LayoutService,private route: ActivatedRoute,private router:Router,private location:Location) {
   }
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.client = params['client']; //taking value from  parameter client
     });
     this.layoutService.getLayoutByClientName(this.client)
         .then((result:any) => {
          this.layoutForm = new FormGroup({
           type: new FormControl(result.layout ? result.layout.type : ''),
           callnumber: new FormControl(result.layout ? result.layout.callnumber : ''),
           name_en: new FormControl(result.layout ? result.layout.name_en : ''),
           dataUrl: new FormControl(result.layout ? result.layout.buttons.button_1.dataUrl: ''),
           icon: new FormControl(result.layout ? result.layout.buttons.button_1.icon : ''),
           modal: new FormControl(result.layout ? result.layout.buttons.button_1.modal : ''),
           avatar: new FormControl(result.layout ? result.layout.buttons.button_1.avatar : ''),
           action: new FormControl(result.layout ? result.layout.buttons.button_1.action : '')
     
       });
   }).catch((error) => console.error(error));  
  }

  updateLayout(){
     this.layoutService.updateLayout(this.layoutForm.value,this.client)
     localStorage.setItem('url', '/client')
     this.router.navigate(['/client']);
     location.reload()
  }
}
