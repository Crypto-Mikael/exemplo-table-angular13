import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 4, name: 'Teryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-lib-listagem-de-usuario',
  templateUrl: './lib-listagem-de-usuario.component.html',
  styleUrls: ['./lib-listagem-de-usuario.component.css'],
})
export class LibListagemDeUsuarioComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  originalDataSource: PeriodicElement[] = ELEMENT_DATA;
  dataSource: PeriodicElement[] = ELEMENT_DATA;
  public symbols = ELEMENT_DATA.map(({ symbol }) => symbol);
  matTableDataSource: MatTableDataSource<PeriodicElement> =
    new MatTableDataSource(ELEMENT_DATA);
  public inputDePesquisa: string;
  public selectDePesquisa: string = 'H';

  public mostrarTexto() {
    this.matTableDataSource.filter = this.inputDePesquisa;
  }

  public filtrarPorOption(event) {
    this.matTableDataSource.data = this.originalDataSource.filter(
      (element) => element.symbol === event.value
    );
  }
}
