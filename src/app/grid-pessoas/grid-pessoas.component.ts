import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PessoaInfoComponent } from '../pessoa-info/pessoa-info.component';
import {MatPaginator} from '@angular/material/paginator';
import {PessoasService} from '../pessoas.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grid-pessoas',
  templateUrl: './grid-pessoas.component.html',
  styleUrls: ['./grid-pessoas.component.css']
})
export class GridPessoasComponent implements OnInit{
  displayedColumns: string[] = ['id','Nome', 'Info','Delete'];
  dataSource;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatTable) table:MatTable<any>;
  delAction(pessoa){
    this.pessoasService.deletePessoa(pessoa.id).subscribe(()=>{
      this.pessoasService.getPessoas().subscribe((res:any)=>{
        this.dataSource = res;
        this.table.renderRows();
        alert('Pessoa removida com sucesso!');
        window.location.reload();
      })
    });
  }
  tableAction(pessoa){
    this.dialog.open(PessoaInfoComponent,{data:pessoa});
  }
  constructor(public dialog:MatDialog, private pessoasService:PessoasService) {}

  ngOnInit(): void {
    this.pessoasService.getPessoas().subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    });
  }

}
