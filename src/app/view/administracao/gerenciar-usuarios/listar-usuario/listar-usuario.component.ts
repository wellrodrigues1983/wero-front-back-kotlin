import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Page } from 'src/app/model/interfaces/Page';
import { User } from 'src/app/model/interfaces/User';
import { AdministracaoService } from '../../administracao.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  displayedColumns: string[] = ['id', 'login', 'roles'];

  constructor(private service: AdministracaoService) { }

  page!: Page<User>


  ngOnInit() {
    this.loadUsers(0, 10);
  }

  loadUsers(page: number, size: number) {
    this.service.getAllUsers(page, size).subscribe(data => {
      this.page = data
    });
  }

  onPaginator(event: any): void {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    this.service.getAllUsers(pageIndex, pageSize).subscribe(data => {
      this.page = data
    })

  }



}
