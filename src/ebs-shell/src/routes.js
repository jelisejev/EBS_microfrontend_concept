import Vue from 'vue'
import Router from 'vue-router'
import ContactsApp from "./components/apps/ContactsApp";
import SettingsApp from "./components/apps/SettingsApp";
import TamApp from "./components/apps/TamApp";
import PodApp from "./components/apps/PodApp";
import OrganizationApp from "./components/apps/OrganizationApp";
import BuildingApp from "./components/apps/BuildingApp";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'contacts' }},
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsApp,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsApp,
    },
    {
      path: '/tam',
      name: 'tam',
      component: TamApp,
    },
    {
      path: '/pod',
      name: 'pod',
      component: PodApp,
    },
    {
      path: '/organization',
      name: 'organization',
      component: OrganizationApp,
    },
    {
      path: '/building',
      name: 'building',
      component: BuildingApp,
    },
  ]
})
