import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibListagemDeUsuarioComponent } from './lib-listagem-de-usuario.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [LibListagemDeUsuarioComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
  ],
})
export class LibListagemDeUsuarioModule {}
