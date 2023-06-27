import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibListagemDeUsuarioComponent } from './lib-listagem-de-usuario/lib-listagem-de-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: LibListagemDeUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
