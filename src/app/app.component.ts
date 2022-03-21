import { TiendaService } from './service/tienda.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from './model/Producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  seccion:string;
  productos:any;
  secciones:any;
  constructor(private service:TiendaService){

  }
  ngOnInit(): void {
    this.cargarSecciones();
  }

  buscarProductos(){
    this.service.getProductos(this.seccion).subscribe(data=>this.productos=data);
  }

  cargarSecciones(){
    this.service.getSecciones().subscribe(data=>this.secciones=data);
  }
}
