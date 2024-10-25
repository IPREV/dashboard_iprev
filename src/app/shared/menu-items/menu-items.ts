import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Início', type: 'link', icon: 'home' },
  /* { state: 'noticias', type: 'link', name: 'Notícias', icon: 'menu_book' }, */
  { state: 'dados-previdenciarios', type: 'link', name: 'Dados Previdênciarios', icon: 'insert_chart' },
  
  { state: 'gestao', type: 'link', name: 'Gestão e Governância', icon: 'library_books' },
  /*{ state: 'transporte', type: 'link', name: 'Transporte', icon: 'directions_car' },**/
  { state: 'prova-de-vida', type: 'link', name: 'Recad e Prova de vida ', icon: 'contacts' },
  /* { state: 'ramal', type: 'link', name: 'Ramal', icon: 'phone_in_talk' }, */
 /*  { state: 'frequencia', type: 'link', name: 'Folha de Frequência', icon: 'checklist' } */
  /* { state: 'iprev-play', type: 'link', name: 'IPREV Play', icon: 'play_circle_filled' }, */
  /* { state: 'ferias', type: 'link', name: 'Férias', icon: 'self_improvement' }, */
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
