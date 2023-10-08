import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceiroService } from '../financeiro.service';
import { Fornecedores } from 'src/app/model/interfaces/Fornecedores';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cadastro-fornecedores',
  templateUrl: './cadastro-fornecedores.component.html',
  styleUrls: ['./cadastro-fornecedores.component.css']
})
export class CadastroFornecedoresComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: FinanceiroService, private toast: NgToastService) {

  }

  ngOnInit() {
    this.iniciarForm()
  }

  iniciarForm() {

    this.cadastroForm = this.fb.group({
      cpfCnpj: ['', Validators.required],
      nomeRazaoSocial: ['', Validators.required],
      telefone: [''],
      contato: [''],
      email: [''],
      rua: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      complemento: [''],
      cep: [''],
      inscEstadual: [''],
      inscMunicipal: [''],
      // Adicione outros campos aqui conforme necessário
    });
  }

  onSubmit() {

    const data = this.cadastroForm.value as Fornecedores

    if (data) {
      this.service.saveFornecedores(data).subscribe({
        next: (response) => {
          console.log(response)
          this.toast.success({ detail: "SUCESSO", summary: 'Fornecedor cadastrado com sucesso!', duration: 3000 })
          this.cadastroForm.reset()
        },
        error: (err) => {
          if (err.status === 400) {
            this.toast.success({ detail: "ERRO", summary: 'Fornecedor já cadastrado', duration: 3000 })
          } else {
            this.toast.success({ detail: "ERRO", summary: 'Erro ao efetuar o cadastro', duration: 3000 })
          }

        }
      })
    }
  }

  onCepChange() {

    const cep = this.cadastroForm.get('cep')?.value;

    if (cep && cep.length === 8) {
      this.service.getAddressByCep(cep).subscribe(data => {
        this.cadastroForm.patchValue({
          rua: data.logradouro,
          complemento: data.complemento,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf
        });
      });
    }
  }

  onCnpjChange() {

    const cnpj = this.cadastroForm.get('cpfCnpj')?.value

    if (cnpj && cnpj.length === 14) {
      this.service.getCnpjInfo(cnpj).subscribe(data => {
        this.cadastroForm.patchValue({
          nomeRazaoSocial: data.razao_social,
          telefone: data.ddd_telefone_1,
          cep: data.cep,
          complemento: data.complemento,
          numero: data.numero,
          rua: data.descricao_tipo_de_logradouro + " " + data.logradouro,
          bairro: data.bairro,
          cidade: data.municipio,
          estado: data.uf
        })
      })
    }

  }



}
