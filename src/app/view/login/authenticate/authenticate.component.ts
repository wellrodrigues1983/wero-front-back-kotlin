import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthRequest } from 'src/app/model/interfaces/AuthRequest';


@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent {

  loginForm = this.formBuilder.group({
    login: ['', Validators.required],
    passwd: ['', Validators.required],
  });

  @Input() config: any;

  @Output() loginEvent = new EventEmitter<AuthRequest>();


  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    if (this.loginForm.value && this.loginForm.valid) {
      this.loginEvent.emit(this.loginForm.value as AuthRequest)
    }
  }

}
