import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  cron: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', cron:'0/10 * * * * ?'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', cron:'0/10 * * * * ?'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', cron:'0/10 * * * * ?'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', cron:'0/10 * * * * ?'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', cron:'0/10 * * * * ?'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', cron:'0/10 * * * * ?'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', cron:'0/10 * * * * ?'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', cron:'0/10 * * * * ?'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', cron:'0/10 * * * * ?'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', cron:'0/10 * * * * ?'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','cron','action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}
  

  abrirCaixaDialogo(element: PeriodicElement | null): void{
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      data: element === null ? {
        position: null,
        name: '',
        weight: null,
        symbol: '',
        cron: ''
      } : element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }

  getAlertas(): void{
    console.log("Vai aqui a lista de alertas");
    
  }

  deleteElement(position : number | null):void{
    this.dataSource = this.dataSource.filter(p => p.position !== position);
  }

  editElement(element : PeriodicElement | null):void{
    this.abrirCaixaDialogo(element);
  }
}
