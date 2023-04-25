export interface Alerta {
  id?: number;
  id_canal: number;
  mensagem: string;
  cron: string;
  ativo : string;
  // is_embbed : boolean;
  // titulo : string;
  // descricao : string;
  // cor_R : number;
  // cor_G : number;
  // cor_B : number;
  urlImagem? : string;
}