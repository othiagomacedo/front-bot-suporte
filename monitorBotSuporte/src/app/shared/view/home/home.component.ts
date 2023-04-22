import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Alerta } from '../../model/alerta';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HomeComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'id_canal', 'cron','ativo'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Alerta | null | undefined;

  addData(){
  
  }

  removeData(){

  }

  toggleCheckedState(item: any) {
    item.isChecked = !item.isChecked;
  }
}

const ELEMENT_DATA: Alerta[] = [
  {
    id: 1,
    id_canal: 222,
    mensagem: `apenas um teste de mensagem para Alerta, para aparecer num canal topster`,
    cron : `0/10 * * * * ?`,  
    ativo : `inativo`,
    urlImagem : `url da imagem`
  },
  {
    id: 2,
    id_canal: 1231231,
    mensagem: `outro texto alternativo para demonstrar uma mensagem de Alerta aqui`,
    cron : `0/20 * * * * ?`,  
    ativo : `inativo`,
    urlImagem : `url da imagem`
  }
  
];


