export interface Point {
  id?:number;
  nom : string;
  address?: string;
  description?: string;
  latitude ?: number;
  longitude ?: number;
  categorie ?: Categorie;
  pathLoop ?: PathLoop;
}

export interface Categorie {
  id?: number;
  nom : string;
}

export interface PathLoop {
  depart?:Point;
  etapes?:Point[];
}
