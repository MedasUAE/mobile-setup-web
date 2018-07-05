import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  template:`
     <form (ngSubmit)="onClick(this.form.value)" [formGroup]="form" class="uk-form-horizontal">
      <div *ngFor="let field of fields">
          <field-builder [field]="field" [form]="form"></field-builder>
      </div>
      <button class="uk-button uk-button-primary uk-margin-top">login</button>
    </form>
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  
  @Input() fields: any[] = [];
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    let fieldsCtrls = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required)
      } else {
        let opts = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }
  onClick(obj:any){
    this.onSubmit.emit(obj);
   }

 
}
