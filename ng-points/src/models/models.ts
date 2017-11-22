export interface Point {
  id?:number;
  nom : string;
  address: string;
  description?: string;
  latitude : number;
  longitude : number;
  categorie : Categorie;
}

export interface Categorie {

  id?: number;
  nom : string;
  point : Point;

}
