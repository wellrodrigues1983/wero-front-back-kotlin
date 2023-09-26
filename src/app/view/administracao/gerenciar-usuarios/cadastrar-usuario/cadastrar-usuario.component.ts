import { UserRegisterRequest } from '../../../../model/interfaces/userRegisterRequest';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministracaoService } from '../../administracao.service';
import { User } from 'src/app/model/interfaces/User';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  userForm!: FormGroup;

  @Input() typeScreen: any;
  @Input() objElement: any;

  objEdit!: User;

  @Output() screenEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private service: AdministracaoService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      login: ['', Validators.required],
      passwd: ['', [Validators.required]],
      roles: ['', Validators.required],
      enable: ['', Validators.required]
    });

  }

  onSubmit() {
    console.log(this.userForm.valid)

    const data = this.userForm.value as UserRegisterRequest

    if (data) {

      this.service.registerUser(data).subscribe({
        next: (response) => {
          console.log('Resposta: ' + JSON.stringify(response))
          this.toast.success({detail:"SUCESSO",summary:'Usuario cadastrado com sucesso!',duration:3000})
          this.userForm.reset()
        },
        error: (err) => {
          console.log('Resposta: ' + JSON.stringify(err))
          this.toast.success({detail:"ERROR",summary:'Erro ao cadastrar usuário',duration:3000})
        }
      })

    }

    this.screenEvent.emit(true)
  }

  changeScreen(){
    this.screenEvent.emit(true)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.objEdit = this.objElement
  }

}
