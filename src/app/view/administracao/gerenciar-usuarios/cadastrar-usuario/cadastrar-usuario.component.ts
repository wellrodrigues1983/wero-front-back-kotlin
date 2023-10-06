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
  isEnabledRadio: boolean = false;
  objEdit!: User;

  @Input() typeScreen: any;
  @Input() objElement: any;

  @Output() screenEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private service: AdministracaoService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.iniciaForm()
  }

  onSubmit() {
    const data = this.userForm.value as UserRegisterRequest

    if (data) {
      this.service.registerUser(data).subscribe({
        next: (response) => {
          this.toast.success({ detail: "SUCESSO", summary: 'Usuario cadastrado com sucesso!', duration: 3000 })
          this.userForm.reset()
          this.screenEvent.emit(true)
        },
        error: (err) => {
          this.toast.success({ detail: "ERROR", summary: 'Erro ao cadastrar usuário', duration: 3000 })
        }
      })

    }
  }

  onUpdate() {
    const data = this.userForm.value as UserRegisterRequest

    if (data) {
      this.service.updateUser(data.id, data).subscribe({
        next: (response) => {
          this.toast.success({ detail: "SUCESSO", summary: 'Usuario atualizado com sucesso!', duration: 3000 })
          this.userForm.reset()
          this.screenEvent.emit(true)
        },
        error: (err) => {
          this.toast.success({ detail: "ERROR", summary: 'Erro ao atualizar usuário', duration: 3000 })
        }
      })
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.objEdit = this.objElement
    this.iniciaForm()

    if (!this.typeScreen) {
      this.userForm = this.fb.group({
        id: [this.objEdit.id, Validators.required],
        login: [this.objEdit.login, Validators.required],
        passwd: ['', [Validators.required]],
        roles: [this.objEdit.roles, Validators.required],
        isEnabled: [this.objEdit.isEnabled, Validators.required]
      });
    }

    this.isEnabledRadio = this.userForm.get('isEnabled')?.value;
  }

  onCancel() {
    this.screenEvent.emit(true)
  }

  iniciaForm() {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      login: ['', Validators.required],
      passwd: ['', [Validators.required]],
      roles: ['', Validators.required],
      isEnabled: ['', Validators.required]
    });
  }




}
