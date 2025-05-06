import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import ('./pages/home/home.component').then((m) => m.HomeComponent)
    },
  },
  {
    path: 'likes',
    loadComponent: () => {
      return import ('./pages/likes/likes.component').then((m) => m.LikesComponent)
    }
  },
  {
    path: 'components',
    loadComponent: () => {
      return import ('./pages/components/components.component').then((m) => m.ComponentsComponent)
    }
  },
  {
    path: 'data-binding',
    loadComponent: () => {
      return import ('./pages/data-binding/data-binding.component').then((m) => m.DataBindingComponent)
    }
  },
  {
    path: 'routing',
    loadComponent: () => {
      return import ('./pages/routing/routing.component').then((m) => m.RoutingComponent)
    }
  }, {
    path: 'services',
    loadComponent: () => {
      return import ('./pages/services/services.component').then((m) => m.ServicesComponent)
    }
  }, {
    path: 'https-request',
    loadComponent: () => {
      return import ('./pages/https-request/https-request.component').then((m) => m.HttpsRequestComponent)
    }
  }, {
    path: 'directives',
    loadComponent: () => {
      return import ('./pages/directives/directives.component').then((m) => m.DirectivesComponent)
    }
  }, {
    path: 'pipes',
    loadComponent: () => {
      return import ('./pages/pipes/pipes.component').then((m) => m.PipesComponent)
    }
  },
  {
    path: 'todos',
    loadComponent: () => {
      return import ('./pages/todos/todos.component').then((m) => m.TodosComponent)
    }
  },
];
