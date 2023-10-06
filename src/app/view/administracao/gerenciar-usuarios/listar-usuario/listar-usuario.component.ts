import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Page } from 'src/app/model/interfaces/Page';
import { User } from 'src/app/model/interfaces/User';
import { AdministracaoService } from '../../administracao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  displayedColumns: string[] = ['id', 'login', 'roles', 'ativo', 'editar'];

  constructor(private service: AdministracaoService, private router: Router) { }

  page!: Page<User>

  @Input() typeScreen: any;

  @Output() screenEvent = new EventEmitter<boolean>();


  ngOnInit() {
    this.loadUsers(0, 10);
  }

  loadUsers(page: number, size: number) {
    this.service.getAllUsers(page, size).subscribe({
      next: (response) => {
        this.page = response
      },
      error: (err) => {
        if (err.code === 403) {
          this.router.navigate(['login']);
        }
      }
    })
  }

  onPaginator(event: any): void {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    this.service.getAllUsers(pageIndex, pageSize).subscribe({
      next: (response) => {
        this.page = response

      },
      error: (err) => {
        if (err.code === 403) {
          this.router.navigate(['login']);
        }
      }
    })
  }


  changeScreen(element: any) {
    this.screenEvent.emit(element)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadUsers(0, 10);
  }


}
