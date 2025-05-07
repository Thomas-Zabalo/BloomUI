import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./pages/home/home.component');
      return m.HomeComponent;
    },
  },
  {
    path: 'core/components',
    loadComponent: async () => {
      const m = await import('./pages/core/components/components.component');
      return m.ComponentsComponent;
    }
  },
  {
    path: 'core/data-binding',
    loadComponent: async () => {
      const m = await import('./pages/core/data-binding/data-binding.component');
      return m.DataBindingComponent;
    }
  },
  {
    path: 'core/routing',
    loadComponent: async () => {
      const m = await import('./pages/core/routing/routing.component');
      return m.RoutingComponent;
    }
  }, {
    path: 'core/services',
    loadComponent: async () => {
      const m = await import('./pages/core/services/services.component');
      return m.ServicesComponent;
    }
  }, {
    path: 'core/https-request',
    loadComponent: async () => {
      const m = await import('./pages/core/https-request/https-request.component');
      return m.HttpsRequestComponent;
    }
  }, {
    path: 'core/directives',
    loadComponent: async () => {
      const m = await import('./pages/core/directives/directives.component');
      return m.DirectivesComponent;
    }
  }, {
    path: 'core/pipes',
    loadComponent: async () => {
      const m = await import('./pages/core/pipes/pipes.component');
      return m.PipesComponent;
    }
  }, {
    path: 'components/button',
    loadComponent: async () => {
      const m = await import('./pages/components/button/button.component');
      return m.ButtonComponent;
    }
  }, {
    path: 'components/dropdown',
    loadComponent: async () => {
      const m = await import('./pages/components/dropdown/dropdown.component');
      return m.DropdownComponent;
    }
  },
  {
    path: 'likes',
    loadComponent: async () => {
      const m = await import('./pages/core/likes/likes.component');
      return m.LikesComponent;
    }
  },
  {
    path: 'dashboard',
    loadComponent: async () => {
      const m = await import('./pages/dashboard/dashboard.component');
      return m.DashboardComponent;
    }
  },
];
