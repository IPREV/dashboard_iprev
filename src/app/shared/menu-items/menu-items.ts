import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Início', type: 'link', icon: 'home' },
  { state: 'noticias', type: 'link', name: 'Notícias', icon: 'menu_book' },
  { state: 'arquivos', type: 'link', name: 'Arquivos', icon: 'insert_drive_file' },
  { state: 'suporte-ti', type: 'link', name: 'Suporte TI', icon: 'desktop_access_disabled' },
  /*{ state: 'transporte', type: 'link', name: 'Transporte', icon: 'directions_car' },**/
  { state: 'outros-servicos', type: 'link', name: 'Outras Solicitações', icon: 'more_horiz' },
  { state: 'telefones', type: 'link', name: 'Telefones', icon: 'phone_in_talk' },
  /*
  { state: 'lists', type: 'link', name: 'Lists', icon: 'desktop_access_disabled' },
  { state: 'menu', type: 'link', name: 'Menu', icon: 'directions_car' },
  { state: 'tabs', type: 'link', name: 'Tabs', icon: 'phone_in_talk' },
  { state: 'grid', type: 'link', name: 'Grid', icon: 'insert_drive_file' },
  { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
  {
    state: 'expansion',
    type: 'link',
    name: 'Expansion Panel',
    icon: 'vertical_align_center'
  },
  { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
  { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal'
  },
  {
    state: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular'
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in'
  },
  { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
  { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
  {
    state: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive'
  }
  */
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
