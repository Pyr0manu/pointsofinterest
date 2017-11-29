export interface Point {
  id?:number;
  nom : string;
  address?: string;
  description?: string;
  latitude ?: number;
  longitude ?: number;
  categorie ?: Categorie;
  user?:User;
}

export interface Categorie {
  id?: number;
  nom : string;
}

export interface  User{
  id?:number;
  login:string;
  email?:string;
  rank?:number;

  password?:any;
  facebookId?:number;
  token?:string;
  salt?:any;
}
