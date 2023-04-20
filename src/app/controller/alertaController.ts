import { HttpClient } from "@angular/common/http";


class AlertaController {
    apiURL: string | undefined;

    constructor(private http : HttpClient) {
        this.apiURL == 'http://localhost:8080';
    }

    listarAlertas(){
        this.http.get(`${this.apiURL}/alerta`)
        .subscribe(resultado => console.log(resultado));
    }

}

