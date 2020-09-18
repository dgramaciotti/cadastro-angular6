import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pessoa-info',
  templateUrl: './pessoa-info.component.html',
  styleUrls: ['./pessoa-info.component.css']
})
export class PessoaInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public pessoa: any) {}

  ngOnInit(): void {
  }

}
