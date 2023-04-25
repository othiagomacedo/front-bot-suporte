import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Alerta } from '../../model/alerta';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient
  ) {}

  openDialog(): void {
    
  }

  cancelarAcao(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.uploadFile(file);
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
  
    this.http.post('http://localhost:3000/upload', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
