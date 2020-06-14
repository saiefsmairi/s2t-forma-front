import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
  { path: '/liste-All-Users', title: 'Liste des utilisateurs',  icon: 'list_alt', class: '' },
  { path: '/statistique-platforme' , title: 'Statistique de la platforme',  icon: 'bar_chart', class: '' },

];
const APPRENANTROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau De Bord',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Mon Profile',  icon: 'person', class: '' },
  { path: '/liste-sessions', title: 'Liste Sessions',  icon: 'list_alt', class: '' },
  { path: '/reclamation', title: 'Réclamer un probléme',  icon: 'report_problem', class: '' },


  

];

const FORMATEURROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau De Bord',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Mon Profile',  icon: 'person', class: '' },
  { path: '/liste-sessions', title: 'Liste Sessions',  icon: 'list_alt', class: '' },
  { path: '/reclamation', title: 'Réclamer un probléme',  icon: 'report_problem', class: '' },



];

const SOCIETEROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau De Bord',  icon: 'dashboard', class: '' },
  { path: '/liste-sessions', title: 'Liste Sessions',  icon: 'list_alt', class: '' },
  { path: '/reclamation', title: 'Réclamer un probléme',  icon: 'report_problem', class: '' },


];

const GESTROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau de Bord',  icon: 'dashboard', class: '' },
<<<<<<< Updated upstream
  { path: '/gestion-utilisateurs', title: 'Gestion Utilisateurs',  icon: 'persons', class: '' },
  { path: '/gestion-sessions', title: 'Gestion Sessions',  icon: 'dashboard', class: '' },
  { path: '/liste-reclamations', title: 'Liste Réclamations',  icon: 'list_alt', class: '' },
  { path: '/gestion-recu', title: 'Gestion Recu',  icon: 'view_list', class: '' },
=======
  { path: '/gestion-utilisateurs', title: 'Gestion Utilisateurs',  icon: 'persons', class: ''},
  { path: '/ajout-session', title: 'Ajout Session',  icon: 'add', class: ''  },
  { path: '/gestion-sessions', title: 'Gestion Sessions',  icon: 'settings', class: ''  },
  { path: '/liste-reclamations', title: 'Liste Réclamations',  icon: 'list_alt', class: ''},
  { path: '/gestion-recu', title: 'Gestion Recu',  icon: 'view_list', class: ''},
  { path: '/statistique-sessions', title: 'Statistique sur les sessions',  icon: 'bar_chart', class: ''},

>>>>>>> Stashed changes

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



