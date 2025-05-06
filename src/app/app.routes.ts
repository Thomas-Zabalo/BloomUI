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
      return import ('./pages/core/likes/likes.component').then((m) => m.LikesComponent)
    }
  },
  {
    path: 'core/components',
    loadComponent: () => {
      return import ('./pages/core/components/components.component').then((m) => m.ComponentsComponent)
    }
  },
  {
    path: 'core/data-binding',
    loadComponent: () => {
      return import ('./pages/core/data-binding/data-binding.component').then((m) => m.DataBindingComponent)
    }
  },
  {
    path: 'core/routing',
    loadComponent: () => {
      return import ('./pages/core/routing/routing.component').then((m) => m.RoutingComponent)
    }
  }, {
    path: 'core/services',
    loadComponent: () => {
      return import ('./pages/core/services/services.component').then((m) => m.ServicesComponent)
    }
  }, {
    path: 'core/https-request',
    loadComponent: () => {
      return import ('./pages/core/https-request/https-request.component').then((m) => m.HttpsRequestComponent)
    }
  }, {
    path: 'core/directives',
    loadComponent: () => {
      return import ('./pages/core/directives/directives.component').then((m) => m.DirectivesComponent)
    }
  }, {
    path: 'core/pipes',
    loadComponent: () => {
      return import ('./pages/core/pipes/pipes.component').then((m) => m.PipesComponent)
    }
  },{
    path: 'components/button',
    loadComponent: () => {
      return import ('./pages/components/button/button.component').then((m) => m.ButtonComponent)
    }
  },
  {
    path: 'todos',
    loadComponent: () => {
      return import ('./pages/todos/todos.component').then((m) => m.TodosComponent)
    }
  },
];
