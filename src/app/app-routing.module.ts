import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/mapa_entrega',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'entregas',
    loadChildren: () => import('./entregas/entregas.module').then( m => m.EntregasPageModule)
  },
  {
    path: 'nova-entrega',
    loadChildren: () => import('./nova-entrega/nova-entrega.module').then( m => m.NovaEntregaPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'detalhe-entrega',
    loadChildren: () => import('./detalhe-entrega/detalhe-entrega.module').then( m => m.DetalheEntregaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
