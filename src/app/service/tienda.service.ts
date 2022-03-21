import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  constructor(private http:HttpClient) { }

  getProductos(seccion:string){
    //let url="http://localhost:8080/09_productos_web/productos";
    let url="productos";

    return this.http.get(url,{"params":{"seccion":seccion}});
    //alternativa post con parámetros enviados de forma tradicional
    /*let parametros=new HttpParams();
    parametros=parametros.set("seccion",seccion);
    let heads=new HttpHeaders();
    heads.set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<Alumno[]>("url",parametros,{headers:heads});*/
  }
  getSecciones(){
    //let url="http://localhost:8080/09_productos_web/secciones";
    let url="secciones";
    return this.http.get(url);
  }
}
