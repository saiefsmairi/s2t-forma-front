import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
 export let  ROUTES: RouteInfo[] = [

];


const ADMINROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau De Bord',  icon: 'dashboard', class: '' },
  { path: '/ajout-gestionnaire', title: 'Ajout Gestionnaire',  icon: 'add', class: '' },
];

const APPRENANTROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau De Bord',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Mon Profile',  icon: 'person', class: '' },
  { path: '/liste-sessions', title: 'Liste Sessions',  icon: 'person', class: '' },
  { path: '/reclamation', title: 'Réclamer un probléme',  icon: 'person', class: '' },


  

];

const FORMATEURROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau De Bord',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Mon Profile',  icon: 'person', class: '' },
  { path: '/liste-sessions', title: 'Liste Sessions',  icon: 'person', class: '' },
  { path: '/reclamation', title: 'Réclamer un probléme',  icon: 'person', class: '' },



];

const SOCIETEROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau De Bord',  icon: 'dashboard', class: '' },
  { path: '/liste-sessions', title: 'Liste Sessions',  icon: 'person', class: '' },
  { path: '/reclamation', title: 'Réclamer un probléme',  icon: 'person', class: '' },


];

const GESTROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau de Bord',  icon: 'dashboard', class: '' },
  { path: '/gestion-utilisateurs', title: 'Gestion Utilisateurs',  icon: 'persons', class: '' },
  { path: '/gestion-sessions', title: 'Gestion Sessions',  icon: 'dashboard', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userRole:any= JSON.parse(sessionStorage.getItem('auth-user')).roles[0];
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    console.log(this.userRole);
   
  this.setRoutes();
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }


setRoutes(){
switch(this.userRole) {
  
case 'ROLE_ADMIN':{
  ROUTES = [...ADMINROUTES];
  break;
}
case 'ROLE_FORMATEUR': {
  ROUTES = [...FORMATEURROUTES];
  break;
}
case 'ROLE_APPRENANT':{
  ROUTES = [...APPRENANTROUTES];
  break;
}
case 'ROLE_SOCIETE':{
  
  ROUTES = [...SOCIETEROUTES];

  break;
}
case 'ROLE_GESTIONNAIRE':{
  ROUTES = [...GESTROUTES];
  break;
}
}
}

  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}



