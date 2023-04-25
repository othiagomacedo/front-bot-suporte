import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Alerta } from '../../model/alerta';

@Component({
  selector: 'app-modal-alerta',
  templateUrl: './modal-alerta.component.html',
  styleUrls: ['./modal-alerta.component.less']
})

export class ModalAlertaComponent{

  alerta! : Alerta;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Alerta,
    public dialogRef: MatDialogRef<ModalAlertaComponent>,
  ) {}

  openDialog(): void {
    
  }

  cancelarAcao(): void {
    this.dialogRef.close();
  }

}
