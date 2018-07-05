import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';



// <div [formGroup]="form">
// <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"  [id]="field.name" [name]="field.name" [formControlName]="field.name">
// <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.name" [id]="field.name"
// rows="9" class="form-control" [placeholder]="field.placeholder"></textarea>
// </div> 

// text,email,tel,textarea,password, 
@Component({
    selector: 'textbox',
    template: `
      <div [formGroup]="form">
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="uk-input uk-form-width-medium uk-form-small"  [id]="field.name" [name]="field.name" [formControlName]="field.name">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.name" [id]="field.name"
        rows="9" class="uk-input uk-form-width-medium uk-form-small" [placeholder]="field.placeholder"></textarea>
      </div> 
    `
})
export class TextBoxComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    constructor() {

    }
}