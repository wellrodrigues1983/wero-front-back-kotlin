import { UserRegisterRequest } from '../../../../model/interfaces/userRegisterRequest';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministracaoService } from '../../administracao.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: AdministracaoService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      login: ['', Validators.required],
      passwd: ['', [Validators.required]],
      roles: ['', Validators.required]
    });
  }

  onSubmit() {

    /* console.log('clicou' + JSON.stringify(this.userForm.value))

    const data = this.userForm.value as UserRegisterRequest

    console.log('data: ' + JSON.stringify(data)); */

    console.log(this.userForm.valid)

    const data = this.userForm.value as UserRegisterRequest


    if (data) {

      console.log('data: ' + JSON.stringify(data));

      this.service.registerUser(data).subscribe({
        next: (response) => {
          console.log('Resposta: ' + JSON.stringify(response))
        },
        error: (err) => {
          console.log('Resposta: ' + JSON.stringify(err))
        }
      })

      console.log('Formulário submetido:', this.userForm.value);
    }
  }

}
