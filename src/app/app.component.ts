import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {
  }

  transferir($event: any) {
    this.service.adicionar($event);
  }

}
